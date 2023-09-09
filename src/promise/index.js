const promise = new Promise(function(resolve, reject){
    resolve('hey!');
});

const cows = 15; //cows=  vacas

const countCows = new Promise(function(res,rej){
    if(cows >10){
        res( `we have ${cows} cows on the farm`)
    }else{
        rej('There is no cows on the farm')
    }
})

countCows
    .then((res)=>{
        console.log(res); //S i la promesa se cumple caemos en el ".then" que nos trae lo que enviamos desde RES en la función "countCows".
    })
    .catch((err)=>{
        console.log(err); //Si la promesa falla caemos en el ".catch" que nostrae lo que enviamos desde REJ en la función "countCows".
    })
    .finally(()=>console.log('Finally')) //Nos devuelve un mensaje sin importar si se cumple o no la promesa. Nos avisa que terminó la ejecuación del codigo.