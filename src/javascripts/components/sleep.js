import util from '../helpers/util';

const sleepQuad = () => {
  let domString = '';
  domString += '<p class="quadTitle">Sleep</p>';
  domString += '<p class="score">50</p>';
  domString += '<button class="btn"> Power Nap </button>';
  domString += '<button class="btn"> Sleep </button>';
  util.printToDom('sleep', domString);
};

export default { sleepQuad };
