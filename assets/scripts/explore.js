// explore.js
/** Authors:
 * Meron Asfaw & Triston Babers, Fall 2022
 */

window.addEventListener('DOMContentLoaded', init);

// init: Ensures everything runs only afyer the DOM has loaded.
function init() {
  // Get Image of Mouth Emoji
  var mouthEmoji = document.querySelector('img[alt="Smiling face"]');
  // Initialize Voice Synthesizer
  var voiceSelect = document.getElementById('voice-select');
  // Initialize Voice-select Options List
  var option = document.querySelector('option[value="select"]');
  // Initialize pressToTalk Button
  var pressToTalk = document.querySelector('button');
  // Initalize Text Area
  var txtArea = document.getElementById('text-to-speak');

  // Populate <option> with Browser Defaults
  // var parentElement = option;      // POSSIBLY REMOVE !!!!!
  var parentElement = voiceSelect;
  speechSynthesis.getVoices().forEach(function(voice) {
    var childElement = document.createElement("option");
    var childText = document.createTextNode(voice.name);

    // Add Attribute & Selector Text to Child Element List
    childElement.setAttribute("value", voice.name);
    childElement.appendChild(childText);
    
    // Add Child Element to Voice Selecter List
    parentElement.appendChild(childElement);
  });
  
  /* Update Current Voice Selection Event Listener.
   *   - We are changing the voiceSelect variable in order
   *   to keep track of the voice to play when Press to Talk
   *   is pressed.
   */
  var currentVoiceSelection;
  voiceSelect.addEventListener('change', function (event) {
    currentVoiceSelection = event;
  });

  /* Play Text on Press to Talk Event Listener
   *   - When the Press to Talk button is clicked we will
   *   first grab the text from the text box element, and
   *   then play the text2speech according to the currently
   *   selected voice.
   */
  var text2Speech = new SpeechSynthesisUtterance();
  pressToTalk.addEventListener('click', function () {
    // Grab Current Text
    text2Speech.text = txtArea.value;

    // Play Text to Speech
    window.speechSynthesis.speak(text2Speech);
  });

  /** Open Mouth Emoji at Start
   *   - This detects when the speechSynthesis Event starts
   *   and opens the mouth emoji.
   */
  text2Speech.addEventListener('start', function() {
    mouthEmoji.src = 'assets/images/smiling-open.svg';
  });

  /** Close Mouth Emoji at End
   *   - This detects when the speechSynthesis Event ends
   *   and closes the mouth emoji.
   */
  text2Speech.addEventListener('end', function() {
    mouthEmoji.src = 'assets/images/smiling.svg';
  });
};