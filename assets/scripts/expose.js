// expose.js
/** Authors:
 * Meron Asfaw & Triston Babers, Fall 2022
 */

window.addEventListener('DOMContentLoaded', init);

// Declare Globals
var hornSelection;
var image;
var volImg;
var playButton;
var party;
var audio;
var jsConfetti;

// init is used to define variables after DOM loads
function init() {
  // image section
  hornSelection = document.getElementById('horn-select');
  image = document.querySelector('img[alt="No image selected"]');
  
  // sound associated with the image section
  volImg = document.querySelector('img[alt="Volume level 2"');
  playButton = document.getElementById('volume');
  audio = document.querySelector('audio[class="hidden"]');

  // party confetti section
  party = document.querySelector('button');
  jsConfetti = new JSConfetti();

  // Horn Selection Event Listeners
  hornSelection.addEventListener('change', (e) => {
    //Horn Selection Changed
    switch (e.target.value) {
      case 'air-horn':
        image.src='assets/images/air-horn.svg';
        audio.src='assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        image.src = 'assets/images/car-horn.svg';
        audio.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        image.src = 'assets/images/party-horn.svg';
        audio.src = 'assets/audio/party-horn.mp3';
        break;
      default:
        return;
    }
  });

  playButton.addEventListener('change', (e) => {
    // Volume control
    // switch (e.target.value) {
    //   case (e.target.value == 0):
    //     volImg.src = 'assets/icons/volume-level-0.svg';
    //     audio.volume = e.target.value / 100;
    //     break;
    //   case (e.target.value < 33):
    //     volImg.src = 'assets/icons/volume-level-1.svg';
    //     audio.volume = e.target.value / 100;
    //     break;
    //   case (e.target.value < 67):
    //     volImg.src = 'assets/icons/volume-level-2.svg';
    //     audio.volume = e.target.value / 100;
    //     break;
    //   default:
    //     volImg.src = 'assets/icons/volume-level-3.svg';
    //     audio.volume = e.target.value / 100;
    //     break;
    // }
      if (e.target.value == 0) {
        volImg.src='assets/icons/volume-level-0.svg';
        audio.volume = e.target.value/100;
      }
      else if (e.target.value < 33) {
        volImg.src='assets/icons/volume-level-1.svg';
        audio.volume = e.target.value/100;
      }
      else if (e.target.value < 67) {
        volImg.src='assets/icons/volume-level-2.svg';
        audio.volume = e.target.value/100;
      }
      else {
        volImg.src='assets/icons/volume-level-3.svg';
        audio.volume = e.target.value/100;
      }

  });

  party.addEventListener('click', () => {
    audio.play();
    const event = hornSelection.value;
    if (event == 'party-horn') jsConfetti.addConfetti();
  });
}
