const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi,callback){
    let xhttp = new XMLHttpRequest();

    //xmlhttp.open() → Prepara la petición para ser enviada tomando tres parámetros: prótocolo, url, asíncrono (true).
    xhttp.open('GET', urlApi, true)

    //xmlhttp.onreadystatechange → Un eventHandler que es llamado cuando la propiedad readyState cambia.
    xhttp.onreadystatechange = function(event){

        //xmlhttp.readyState → Retorna el estado de la petición.
        if(xhttp.readyState === 4){ 

            //xmlhttp.status → Retorna el estado de la respuesta de la petición. (200,400,500)
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }else{
            const error = new Error('Error ' + urlApi);
            return callback(error, null);
            }
        }
    }
    //xmlhttp.send() → Envía la petición.
    xhttp.send();
}

//Clase 8- uso de Hadukeeeeen digo, uso de call backs.
fetchData(`${API}/products`, function(err1, data1){
    if(err1) return console.error(err1);
    fetchData(`${API}/products/${data1[0].id}`, function(err2,data2){
        if(err2) return console.error(err2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(err3, data3){
            if(err3) return console.error(err3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});