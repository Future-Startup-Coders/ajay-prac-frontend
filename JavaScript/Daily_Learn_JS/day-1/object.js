let Krishna={

    name:'Krishna',
    jerseyNo:17
}

let IPL = {
    18: {
        name: 'Virat Kohli',
        jerseyNo: 18
    },
    45: {
        name: 'Rohit Sharma',
        jerseyNo: 45
    },
    7: {
        name: 'mahi',
        jerseyNo: 7
    },

    
    
    
}
console.log("hidh")
//IPL[17] =Ajay;
//console.log(IPL[17])

console.log("---------------------------------------------------------------");

console.log('name ' + ' Jersey NO');
console.log(IPL[18].name + ' ' + IPL[18].jerseyNo );
console.log(IPL[45].name + ' ' + IPL[45].jerseyNo);
console.log(IPL[7].name + ' '+ IPL[7].jerseyNo );

console.log("---------------------------------------------------------------");

console.log("----- Using For loop---------");
console.log('name ' + ' Jersey NO');
let data= Object.values(IPL);
for(let i=0 ; i<data.length;i++){
    let data1=data[i];
    console.log(data1.name + " "+ data1.jerseyNo); 
}

console.log("---------------------------------------------------------------");

console.log("----- Using For Each loop---------");
console.log('name ' + ' Jersey NO');

for(let i in IPL){

    let player=IPL[i];
    console.log(player.name + " " + player.jerseyNo);
}




