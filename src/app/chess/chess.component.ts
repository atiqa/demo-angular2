import { Component, OnInit } from '@angular/core';
// import { Promise } from 'es6-promise';
let blackPieces = ["-", "rook-black.png", "knight-black.png", "bishop-black.png", "queen-black.png", "king-black.png", "bishop-black.png", "knight-black.png", "rook-black.png"];
let whitePieces = ["-", "rook-white.png", "knight-white.png", "bishop-white.png", "queen-white.png", "king-white.png", "bishop-white.png", "knight-white.png", "rook-white.png"];
let darkgrey = "darkgrey";
let lightgrey = "lightgrey";
let activeImage = null;
let lastPosition = null;
let white = true;
let flickeringCells = [];

function resolveAfter2Seconds(x) { 
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1(f) {
  var x = await resolveAfter2Seconds(f);
  console.log(x); // 10
f();


}

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {
  rowList = [];
  pieceLocation = [];
  imagePath = "assets/Images/";

 

  constructor() {
	this.validateRook = this.validateRook.bind(this);
  }

  ngOnInit() {
	let bc = darkgrey;
	for(let i = 1; i <= 8; i++) {
		let columnList = [];		
		columnList.push({sm: 2, img: null});
		bc = bc == darkgrey ? lightgrey : darkgrey;
		for(let j = 1; j <= 8; j++) {
			let id = "i" + i + "j" + j;
			bc = bc == darkgrey ? lightgrey : darkgrey;
			let img = i == 1 ? blackPieces[j] : i == 8 ? whitePieces[j] : i == 2 ? "pawn-black.png" : i == 7 ? "pawn-white.png" : null;

			let pos = {r: i-1, c: j};
			if(img != null) {
				// img = "assets/Images/" + img;
			}
			
			columnList.push({pos: pos, cl: "chess", sm: 1, bc: bc, img: img});
		}
		columnList.push({sm: 2, img: null});
		this.rowList.push(columnList);
	}
	for(let ndx in this.rowList) {
		// console.table(this.rowList[ndx]);
	}
  }


  

  validateKing(pos) {
	let r = pos.r;
	let c = pos.c;
	let rDiff = Math.abs(r - lastPosition.r);
	let cDiff = Math.abs(c - lastPosition.c);
	if(Math.abs(rDiff - cDiff) <= 1) {
		let img = this.rowList[r][c].img;
		if(img != null) {
			return this.validateColor(img);
		}
		return true;
	}
	return false;
  }
  validateQueen(pos) {
	return this.validateBishop(pos) || this.validateRook(pos);

  }

  validateBishop(pos) {
	let r = pos.r;
	let c = pos.c;
	

	let rDiff = Math.abs(r - lastPosition.r);
	let cDiff = Math.abs(c - lastPosition.c);
console.log("validateBishop - rDiff=" + rDiff + " cDiff=" + cDiff);
	if(rDiff == cDiff) {
		let rDelta = (lastPosition.r < r) ? 1 : -1
		let cDelta = (lastPosition.c < c) ? 1 : -1;
//alert("rDelta=" + rDelta + " cDelta=" + cDelta);
		for(let row = lastPosition.r, col = lastPosition.c; row != r; row += rDelta, col += cDelta) {
//alert("row=" + row + " col=" + col);
			let cell = this.rowList[row][col];
// console.table(cell);
			if(cell.img != null) {
				return false;
			}
		}
		let img = this.rowList[r][c].img;
		if(img != null) {
			return this.validateColor(img);
		}
		return true;
	} 
	return false;
  }

  validateKnight(pos) {
	let r = pos.r;
	let c = pos.c;
	
	let rDiff = Math.abs(r - lastPosition.r);
	let cDiff = Math.abs(c - lastPosition.c);
	if(((rDiff == 1) && (cDiff == 2)) || ((rDiff == 2) && (cDiff == 1)) || ((c == lastPosition.c) && (r == lastPosition.r))) {
		return true;
	} 
	return false;
  }

  validateColor(img) {
	let ret = false;
	if(((img.search("white") == -1) && (activeImage.search("white") != -1)) || ((img.search("black") == -1) && (activeImage.search("black") != -1))) {		
		ret = true;
	}
	console.log("validateColor: ret=" + ret);
	return ret;
  }

  validateRook(pos) {
	let r = pos.r;
	let c = pos.c;
	let ret = false;
	if((c == lastPosition.c) || (r == lastPosition.r))  {
		let delta = (lastPosition.r < r) ? 1 : -1;
		let cellWithImage = null;
		let ndx = lastPosition.r;
		let last = r;
		let row = true;
		if(r == lastPosition.r) {
			delta = (lastPosition.c < c) ? 1 : -1;
			ndx = lastPosition.c;
			last = c;
			row = false;
		}
		while(ndx != last) {
			let cell = row? this.rowList[ndx][c] : this.rowList[r][ndx];
			if(cell.img != null) {
				cellWithImage = cell;
				break;
			}
			ndx += delta;
		}
		if(ndx == last) {
			let img = row? this.rowList[ndx][c].img : this.rowList[r][ndx].img;
			ret = img == null? true : this.validateColor(img);
		}
	}
	
	return ret;
  }

  validateWhitePawn(pos) {
	let r = pos.r;
	let c = pos.c;
	let rOffset = lastPosition.r - r;
	let cOffset = Math.abs(lastPosition.c - c);
	let ret = false;
	let img = this.rowList[r][c].img;
	if((img == null) && (c == lastPosition.c) && (rOffset == 1 || rOffset == 0)) {			
		ret = true;			
	}
	else if((img != null) && (cOffset == 1) && (rOffset == 1 || rOffset == 0)) {	
		ret = this.validateColor(img);
	}
	return ret;
  }

  fleckerCell(r, c) {
	if(r >= 0 && r < 8 && c > 0 && c < 9) {
		let cell = this.rowList[r][c];
		let img = cell.img;
		if((img == null) || this.validateColor(img)){			
			cell.cl = "animate-flicker";
			flickeringCells.push(cell);		
			console.log("flickering");	
		}
	}
  }

  fleckerCellA(cell) {
	let img = cell.img;
	if((img == null) || this.validateColor(img)){			
		cell.cl = "animate-flicker";
		flickeringCells.push(cell);		
		console.log("flickering image: " + img);
	}
  }

  flickerPawn(pos, delta) {
	let r = pos.r;
	let c = pos.c;
	this.fleckerCell(r, c);
	r = pos.r + delta;
	let cell = this.rowList[r][c];
	let img = cell.img;
console.log("img=" + img);
	if(img == null){			
		this.fleckerCellA(cell);	
	}
	if(c + 1 < 9) {
		cell = this.rowList[r][c + 1];
		img = cell.img;
		if((img != null) && this.validateColor(img)){			
			this.fleckerCellA(cell);	
		}
	}
	if(c - 1 > 0) {
		cell = this.rowList[r][c - 1];
		img = cell.img;
		if((img != null) && this.validateColor(img)){			
			this.fleckerCellA(cell);	
		}
	}
  }
  
  

  flickerKnight(pos) {
	let r = pos.r;
	let c = pos.c;
	let list = [{r: 0, c: 0},{r: -2, c: -1}, {r: -2, c: 1}, {r: -1, c: 2}, {r: -1, c: -2}, {r: 2, c: 1}, {r: 2, c: -1}, {r: 1, c: -2}, {r: 1, c: 2} ];
	for(let i in list) {
		let v = list[i];
		this.fleckerCell(r + v.r, c + v.c);
	}
	
	
  }

  flickerBishop(pos) {
	let r = pos.r;
	let c = pos.c;
	let list = [{r: -1, c: -1}, {r: -1, c: 1}, {r: 1, c: -1}, {r: 1, c: 1}];

	for(let i in list) {
console.log("flickerBishop - i=" + i);
		let v = list[i];
		for(let row = lastPosition.r, col = lastPosition.c; row < 8 && row >= 0 && col > 0 && col < 9; row += v.r, col += v.c) {
console.log("flickerBishop - row/col=" + row + "/" + col);
			let cell = this.rowList[row][col];
			this.fleckerCellA(cell);
			if(cell.img != null) {
				break;
			}			
		}
	}
console.log("flickerBishop - completed.");
  }

  flickerRook(pos) {
	let r = pos.r;
	let c = pos.c;
	let list = [{r: 0, c: -1}, {r: 0, c: 1}, {r: 1, c: 0}, {r: -1, c: 0}];

	for(let i in list) {
console.log("flickerRook - i=" + i);
		let v = list[i];
		for(let row = lastPosition.r, col = lastPosition.c; row < 8 && row >= 0 && col > 0 && col < 9; row += v.r, col += v.c) {
			let cell = this.rowList[row][col];
console.log("flickerRook - row/col=" + row + "/" + col);
			this.fleckerCellA(cell);
			if(cell.img != null && cell.img != activeImage) {
				break;
			}			
		}
	}
console.log("flickerRook - completed.");
  }

  flickerQueen(pos) {
	this.flickerRook(pos);
	this.flickerBishop(pos);
  }

  flickerKing(pos) {
	let r = pos.r;
	let c = pos.c;
	let list = [{r: 0, c: 0}, {r: 0, c: -1}, {r: 0, c: 1}, {r: 1, c: 0}, {r: -1, c: 0}, {r: -1, c: -1}, {r: -1, c: 1}, {r: 1, c: -1}, {r: 1, c: 1}];

	for(let i in list) {
		let v = list[i];
		this.fleckerCell(r+v.r, c+v.c);
	}
  }

  flicker(pos) {
	console.log("flicker: pos=" + JSON.stringify(pos));
	switch(activeImage) {
		case "pawn-white.png":
			this.flickerPawn(pos, -1);
			break;
		case "pawn-black.png":
			this.flickerPawn(pos, 1);
			break;
		case "rook-white.png":
		case "rook-black.png":
			this.flickerRook(pos);
			break;
		case "knight-white.png":
		case "knight-black.png":
			this.flickerKnight(pos);
			break;
		case "bishop-white.png":
		case "bishop-black.png":
			this.flickerBishop(pos);
			break;
		case "queen-white.png":
		case "queen-black.png":
			this.flickerQueen(pos);
			break;
		case "king-white.png":
		case "king-black.png":
			this.flickerKing(pos);
			break;
		default:						
			break;
	}
  }

  validateBlackPawn(pos) {
	let r = pos.r;
	let c = pos.c;
	let rOffset = r - lastPosition.r;
	let cOffset = Math.abs(lastPosition.c - c);
	let ret = false;
	let img = this.rowList[r][c].img;
	if((img == null) && (c == lastPosition.c) && (rOffset == 1 || rOffset == 0)) {	
		ret = true;			
	}
	else if((img != null) && (cOffset == 1) && (rOffset == 1 || rOffset == 0)) {	
		ret = this.validateColor(img);
	}
	return ret;
  }

  validate(pos) {
	let r = pos.r;
	let c = pos.c;
	let ret = false;

	switch(activeImage) {
		case "pawn-white.png":
			ret = this.validateWhitePawn(pos);
			break;
		case "pawn-black.png":
			ret = this.validateBlackPawn(pos);
			break;
		case "rook-white.png":
		case "rook-black.png":
			ret = this.validateRook(pos);
			break;
		case "knight-white.png":
		case "knight-black.png":
			ret = this.validateKnight(pos);
			break;
		case "bishop-white.png":
		case "bishop-black.png":
			ret = this.validateBishop(pos);
			break;
		case "queen-white.png":
		case "queen-black.png":
			ret = this.validateQueen(pos);
			break;
		case "king-white.png":
		case "king-black.png":
			ret = this.validateKing(pos);
			break;
		default:
			if((c == lastPosition.c) && (r == lastPosition.r)) {
				ret = true;
			}			
			break;
	}
console.log("validate - ret=" + ret);
	return ret;
  }

  canMove(img) {
	if((white && img.search("white") != -1) || (!white && img.search("black") != -1)) {
		white = !white;	
		console.log("canMove : true");	
		return true;
	}
console.log("canMove : false");
	return false;
  }

  cancelFlikering() {
	for(let i in flickeringCells) {
		let v = flickeringCells[i];
		this.rowList[v.pos.r][v.pos.c].cl = "chess";
	}
	flickeringCells = [];
  }

  move(column) {
	let pos = column.pos;
	let r = pos.r;
	let c = pos.c;
	let img = column.img;
	this.cancelFlikering();
	console.log("Moving " + img + " row=" + r + " col=" + c + " activeImage=" + activeImage);

	if(img != null && activeImage == null && this.canMove(img)) {		
		this.rowList[r][c].img = null;
		activeImage = img;
		lastPosition = pos;
		this.flicker(pos);
		console.log("M1: Clicked on image");		
	}
	else if(img == null && activeImage != null) {
		if(this.validate(pos)) {


			this.rowList[r][c].img = activeImage;
			activeImage = null;


		
// promise1.then(() => { this.flicker(pos);activeImage = null;});
// setTimeout(function(){doInvoke();}, 3000);
// p.then((res) => {this.hello();}); 
			// lastPosition = pos;
			// f1(() => {this.flicker(lastPosition);activeImage = null;console.log("flicker completed.");});
			console.log("M2: Clicked on empty cell - Active image placed");	
		}
		else {
			console.log("M2: Clicked on empty cell ignored");		
		}
	}
	else if(activeImage != null) {
		if(this.validate(pos)) {
			this.rowList[r][c].img = activeImage;
			activeImage = null;
			console.log("M3: Clicked on image - image replaced by Active image");
		}
		else {
			console.log("M3: Clicked on image ignored.");
		}
	}
	else {
		console.log("M4: No Action");
	}	
  }

}
