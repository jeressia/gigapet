import '../styles/main.scss';
import eatQuad from './components/eat/eat';
import playQuad from './components/play/play';
import fightQuad from './components/fight/fight';
import sleepQuad from './components/sleep/sleep';
// import progress from './components/progress/progress';

const init = () => {
  eatQuad.eatQuad();
  fightQuad.fightQuad();
  playQuad.playQuad();
  sleepQuad.sleepQuad();
  eatQuad.buttonEvents();
  playQuad.buttonEvents();
  fightQuad.buttonEvents();
  sleepQuad.buttonEvents();
  // progress.progressBar();
};

init();
