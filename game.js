import { getBase, makeEyes, makeTop } from './character.js';


const state = {
  eyes: 'blue',
  top: 'red'
};


function renderCharacter() {
  document.getElementById('lyrBase').src = getBase();
  document.getElementById('lyrEyes').src = makeEyes(state.eyes);
  document.getElementById('lyrTop').src = makeTop(state.top);
}


function init() {
  renderCharacter();
}


init();



I’ve
