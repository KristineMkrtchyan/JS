
let div = document.getElementById("chees")

let table = document.createElement("table");

let figure = {
	0:["&#9814","&#9816","&#9815","&#9812","&#9813","&#9815","&#9816","&#9814"],
	1:["&#9817","&#9817","&#9817","&#9817","&#9817","&#9817","&#9817","&#9817"],
	6:["&#9823","&#9823","&#9823","&#9823","&#9823","&#9823","&#9823","&#9823"],
	7:["&#9820","&#9822","&#9821","&#9819","&#9818","&#9821","&#9822","&#9820"],
};

let tab = function (rows,columns){
	
	for(let i=0; i<rows; i++){
		
		let row = table.rows[i];
		let tr =  document.createElement("tr");
		table.append(tr)
		console.log(row)
		for(let j=0; j<columns; j++){
			let td =  document.createElement("td");
			
			tr.append(td) 
			
			
			if((i+j)%2 == 0){
				td.style.backgroundColor = "#3c1a08c9"
			}
			td.setAttribute("class", "block")
			if(figure[i] !==undefined && figure[i][j] !==undefined){
				
				td.innerHTML = figure[i][j];
				
			}
		}
		
	}

}

let z = tab(8,8)

div.append(table)


