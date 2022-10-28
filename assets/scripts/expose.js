// expose.js

window.addEventListener('DOMContentLoaded', init);

// Declare Globals
var hornSelection;
var image;
var playButton;
var audio;

// init is used to define variables after DOM loads
function init() {
  //var expose = document.getElementsByClassName("expose");
  hornSelection = document.getElementById("horn-select");
  image = document.querySelector("[type='img']");
  playButton = document.querySelector("[type='button']");
  audio = document.querySelector("[type='audio']");

  // Event Listeners
  hornSelection.addEventListener('change', hornChangeEvent(selection));
  playButton.addEventListener('click', clickPlayButton());
}

//Horn Selection Changed
function hornChangeEvent(selection) {
  // Change Image & Audio Based on Selection Value
  switch (selection.target.value) {
    case 'air-horn':
      changeImage(image, assets/images/air-horn.svg); 
      changeAudio(audio, assets/audio/air-horn.mp3);
      break;
    case 'car-horn':
      changeImage(image, assets/images/car-horn.svg);
      changeAudio(audio, assets/audio/car-horn.mp3);
      break;
    case 'party-horn':
      changeImage(image, assets/images/party-horn.svg);
      changeAudio(audio, assets/audio/party-horn.mp3); 
      break;
    default:
      return;
  }
}

// Change Image Source
function changeImage(img, source) {
  img.src = source;
}

// Change Audio Source
function changeAudio(aux, source) {
  aux.src = source;
}

// Play Button is Clicked
function clickPlayButton() {

  // code to run when the event is triggered

}