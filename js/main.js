'use strict';
var radios = document.querySelectorAll('.radio');
var button = document.querySelector('.button-comenzar');
var valorRadio=0;


function llamada(){
  console.log('hola');
  // for (var i = 0; i < radios.length; i++){
  //   if (radios[i].checked){
  //
  //     valorRadio=radios[i].value;
  //     break;
  //   }
  // }
  // var url='https://raw.githubusercontent.com/Adalab/cards-data/master/'+valorRadio+'.json';
  // fetch(url)
  //
  //   .then(function(response){
  //     return response.json();
  //   });
}
button.addEventListener('Click', llamada);
