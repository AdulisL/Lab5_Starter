// explore.js
/** Authors:
 * Meron Asfaw & Triston Babers, Fall 2022
 */

window.addEventListener('DOMContentLoaded', init);

// Declare Globals
var speech;
var image;
var txtArea;
var selectVoice;
var pressToTalk;
var list = [];

function init() {
  // initializing variables
  speech = window.speechSynthesis;
  txtArea = document.querySelector('textarea');
  selectVoice = document.getElementById('voice-select');
  image = document.querySelector('img[alt="Smiling face"]')
  pressToTalk = document.querySelector('button')
  
  // Press To Talk event listener
  pressToTalk.addEventListener('click', () => {
    const input = new SpeechSynthesisUtterance(txtArea.value);
    const selected = selectVoice.selectedOptions[0].getAttribute('data-name');
    
    for (let i = 0; i < list.length; i++){
      if(input[i].name === selected) input.voice = list[i];
    }
    speech.speak(input);

  });
  
}