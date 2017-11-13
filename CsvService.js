const fs = require('fs');

const { URL } = require('url'); 

const csv=require('csvtojson');

var csvFilePath = 'file:///C:/temp/addr2.csv';
csv().fromFile(csvFilePath).on("end_parsed",function(jsonArrayObj){ 
    //when parse finished, result will be emitted here.
   console.log(jsonArrayObj); 
 })
 //hello
// csv().fromFile('file:///C:/temp/addr2.csv').on('json',(jsonObj)=>{
// 	// combine csv header row and csv line to a json object
// 	console.log(jsonObj.foxaddrID); //==> 1 or 4
// }).on('done',(error)=>{
// 	console.log('end')
// })

// var data = fs.readFileSync( new URL('file:///C:/temp/addr2.csv'),{encoding:"utf-8"});
// console.log(data.length);
// console.log(data);
