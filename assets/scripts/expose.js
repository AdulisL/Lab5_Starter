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
  // hornSelection = document.getElementById('horn-select');
  let horn = document.getElementById('horn-select');
  image = document.querySelector(".air-horn");
  playButton = document.querySelector("[type='button']");
  audio = document.querySelector("[type='audio']");
  

  // Event Listeners
  hornSelection.addEventListener("image", function () {
    // hornChangeEvent(e);
    if (horn.target.value == "air-horn") {
      image.src = assets/images/air-horn.svg;
    }
  });
  // playButton.addEventListener('playButton', clickPlayButton);
}

//Horn Selection Changed
function hornChangeEvent(e) {
  // Change Image & Audio Based on Selection Value
  e.preventDefault();
  switch (e.target.value) {
    case 'air-horn':
      // console.log(assets/images/air-horn.svg); 
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

// multi function run
function btnClick(e) {
  e.preventDefault();
  hornChangeEvent(e);
}