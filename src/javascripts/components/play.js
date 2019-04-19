import util from '../helpers/util';

const playQuad = () => {
  let domString = '';
  domString += '<p class="quadTitle">Play</p>';
  domString += '<p class="score">100</p>';
  domString += '<button class="btn"> Code </button>';
  domString += '<button class="btn"> Sing </button>';
  util.printToDom('play', domString);
};

export default { playQuad };
