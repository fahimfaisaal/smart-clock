/* eslint-disable import/named */
import '../scss/main.scss';
import { Clock } from './Clock/clock';
import { Util } from './Util/util';

//* ================== Variables ======================
const timeNodes = Object.freeze([
  Util.$('#hour'),
  Util.$('#minutes'),
  Util.$('#seconds'),
  Util.$('#milliseconds'),
]);
const languageButton = Util.$('#translateButton > a');
let language = 'english';

//* ================== Functions ======================
const timeConverter = () => {
  const clock = new Clock(language);
  const currentTimes = Object.freeze([
    clock.getHour,
    clock.getMinutes,
    clock.getSeconds,
    clock.getMilliseconds,
  ]);

  timeNodes.forEach((time, index) => {
    // eslint-disable-next-line no-param-reassign
    time.textContent = currentTimes[index] < 10 ? `0${currentTimes[index]}` : currentTimes[index];
  });
};

const changeLanguage = () => {
  languageButton.textContent = `translate to ${language}`;
  language = language === 'english' ? 'bangla' : 'english';
};

//* ================== Invoked ======================
setInterval(timeConverter, 1);
languageButton.addEventListener('click', changeLanguage);
