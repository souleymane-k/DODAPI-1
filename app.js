'use strict';
function getDogImage(){
fetch('https://dog.ceo/api/breeds/image/random/3')
.then(reponse => reponse.json())
.then(responseJson => console.log(responseJson));
}

function watchForm(){
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });
}

$(function(){
 console.log('submit your 3 random requests');
 watchForm();

})
