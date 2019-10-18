$(function(){

$('#btn').on('click', function() {
var arrayNr = [];
var nr;

function extractNumber(){
	nr = Math.floor((Math.random() * 90) + 1);
	return nr;
	
}

function checkNr(){
	var i;
	for(i=0; i<=5; i++){
		if(arrayNr[i] == nr)
			return false;
	}
}

while(arrayNr.length < 6){
extractNumber();
checkNr();
if(checkNr !== false){
	arrayNr.push(nr + ' ');
}
}

$('#rez').html(arrayNr);
});
});