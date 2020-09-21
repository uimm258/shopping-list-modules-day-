'use strict';

function getDogImage() {
    let breed = document.getElementById("dog").value;
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }

function displayResults(responseJson) {
    console.log(responseJson);
    //replace the existing image with the new one
    $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`
    )
    //display the results section
    $('.results').removeClass('hidden');
}

//fetch https://dog.ceo/api/breeds/list/all
function getBreedImage(){
    fetch('https://dog.ceo/api/breeds/list')
        .then(response => response.json())
        .then(responseJson =>
            getArrayBreeds(responseJson.message))
        .catch(error => alert('No image found. Please try it again'));
}

//get an array of breeds in the url to create a selector
function getArrayBreeds(breedList){
    //create an empty array to hold every value in the breedlist
    let doglist = ' ';
    breedList.forEach(breed => {
        //add option value to each selector
        //everytime when the function passes through the array, doglist ++
        doglist += `<option value="${breed}"> ${breed} </option>`
    });
    //set html of the breed list
    $("#dog").html(doglist); 
    watchForm();
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getDogImage();
    });
}


$(function() {
    console.log('App loaded! Waiting for submit!');
    getBreedImage();
});