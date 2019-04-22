import util from '../../helpers/util';

const increaseEatPhoto = () => {
  document.getElementById('pet').style.backgroundImage = "url('https://thumbs.gfycat.com/UniformBabyishBarbet-size_restricted.gif')";
  let domString = '';
  domString += '<img class="salad" src="https://pkmneclipse.net/images/letsgo/kanto-normal/Jigglypuff.gif">';
  util.printToDom('pet', domString);
};

const decreaseEatPhoto = () => {
  document.getElementById('pet').style.backgroundImage = "url('https://media.giphy.com/media/84GPVK2F37zFK/giphy.gif')";
  let domString = '';
  domString += '<img class="salad" src="https://pkmneclipse.net/images/letsgo/kanto-normal/Jigglypuff.gif">';
  util.printToDom('pet', domString);
};

const increasePlayPhoto = () => {
  document.getElementById('pet').style.backgroundImage = "url('https://media2.giphy.com/media/YoGX4OZFjUwRq/giphy.gif')";
  let domString = '';
  domString += '<img class="salad" src="https://66.media.tumblr.com/79d716f63bbd839ba4483e5f5f16746c/tumblr_ovo0puNb5n1rnln7bo1_400.gif">';
  util.printToDom('pet', domString);
};

const decreasePlayPhoto = () => {
  document.getElementById('pet').style.backgroundImage = "url('https://i.makeagif.com/media/12-27-2015/lv0Mb9.gif')";
  let domString = '';
  domString += '<img class="fight" src="http://www.rubbercat.net/sa/dumpfm-tomauty-jigglychair.gif">';
  util.printToDom('pet', domString);
};
const increaseFightPhoto = () => {
  document.getElementById('pet').style.backgroundImage = "url('https://thumbs.gfycat.com/UniformBabyishBarbet-size_restricted.gif')";
  const domString = '';
  util.printToDom('pet', domString);
};
const decreaseFightPhoto = () => {
  document.getElementById('pet').style.backgroundImage = "url('https://66.media.tumblr.com/4f56a02bd39e09fdcc9b98941b7d795c/tumblr_phj7paWmgt1rovyoxo7_250.gif')";
  let domString = '';
  domString += '<img class="salad" src="https://i.kym-cdn.com/photos/images/original/001/402/721/efe.gif">';
  util.printToDom('pet', domString);
};
const increaseSleepPhoto = () => {
  let domString = '';
  domString += '<img class="sleeping" src="https://i.pinimg.com/originals/88/b1/b6/88b1b6ab2a19e04863685d6a49a3e488.gif">';
  util.printToDom('pet', domString);
};
const decreaseSleepPhoto = () => {
  document.getElementById('pet').style.backgroundImage = "url('https://i.imgur.com/V5fKNQt.gif?noredirect')";
  let domString = '';
  domString += '<img class="salad" src="https://pkmneclipse.net/images/letsgo/kanto-normal/Jigglypuff.gif">';
  util.printToDom('pet', domString);
};

export default {
  increaseEatPhoto,
  increaseFightPhoto,
  increasePlayPhoto,
  increaseSleepPhoto,
  decreaseEatPhoto,
  decreaseFightPhoto,
  decreasePlayPhoto,
  decreaseSleepPhoto,
};
