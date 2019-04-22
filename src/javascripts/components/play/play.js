import util from '../../helpers/util';
import actions from '../pet/pet';

let playCounter = 100;
// const playMath = () => playCounter;

const playQuad = () => {
  let domString = '';
  domString += '<div class="text2">';
  domString += '<p class="quadTitle">Play</p>';
  domString += `<p id="score1"> Fun: ${playCounter}</p>`;
  domString += '<button class="btn" id="work"> Work </button>';
  domString += '<button class="btn" id= "sing"> Sing </button>';
  domString += '</div>';
  util.printToDom('play', domString);
};

const decreasePlay = (e) => {
  actions.decreasePlayPhoto();
  e.preventDefault();
  const decrease = (util.randomize(5) + 1);
  playCounter -= decrease;
  if (playCounter < 0) {
    playCounter = 0;
  }
  util.printToDom('score1', `Fun: ${playCounter}`);
};

const increasePlay = (e) => {
  actions.increasePlayPhoto();
  e.preventDefault();
  const increase = (util.randomize(5) + 1);
  playCounter += increase;
  if (playCounter > 100) {
    playCounter = 100;
  }
  util.printToDom('score1', `Fun: ${playCounter}`);
};

const buttonEvents = () => {
  document.getElementById('work').addEventListener('click', decreasePlay);
  document.getElementById('sing').addEventListener('click', increasePlay);
};
export default { playQuad, buttonEvents, playCounter };
