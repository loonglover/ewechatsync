
const csv=require('csvtojson');
fs = require('fs');
const { URL } = require('url');

// csvStr="1,2,3 \n 4,5,6\n 7,8,9";
var csvStr = fs.readFileSync( new URL('file:///C:/temp/addr2.csv'),{encoding:"utf-8"});

csv({noheader:true}).fromString(csvStr).on('csv',(csvRow)=>
{ // this func will be called 3 times
	console.log(csvRow) // => [1,2,3] , [4,5,6]  , [7,8,9]
})
.on('done',()=>{
	//parsing finished
})