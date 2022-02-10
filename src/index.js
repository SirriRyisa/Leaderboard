import './style.css';

import { setScores, getScores } from './api.js';

const formSelect = document.querySelector('.leader-board');
formSelect.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = {};
  obj.user = formSelect.elements.user.value;
  obj.score = formSelect.elements.score.value;
  setScores(obj);
  formSelect.reset();
});

const render = async () => {
  const list = await getScores();
  const htmlContainer = document.querySelector('.list-item');
  htmlContainer.innerHTML = '';
  list.forEach((obj) => {
    htmlContainer.innerHTML += `<li>${obj.user}: ${obj.score}</li>`;
  });
};
render();

const refreshh = document.querySelector('.refresh');
refreshh.addEventListener('click', render);