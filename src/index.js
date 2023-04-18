import _ from 'lodash';
import './style.css';

const DATA = [
  {
    name: 'Player one',
    score: '300',

  },
  {
    name: 'Player two',
    score: '300',

  },
  {
    name: 'Player three',
    score: '300',

  },
  {
    name: 'Player four',
    score: '300',

  },
];

const scoreboard = document.querySelector('.score-board');

const showScore = () => {
  for (let i = 0; i < DATA.length; i++) {
    const boardItem = document.createElement('div');
    const itemName = document.createElement('span');
    const itemScore = document.createElement('span');

    if (i % 2 > 0) {
      boardItem.id = 'odd';
    }
    boardItem.classList.add('score-item');
    itemName.textContent = `${DATA[i].name}: `;
    itemScore.textContent = DATA[i].score;
    boardItem.appendChild(itemName);
    boardItem.appendChild(itemScore);
    scoreboard.appendChild(boardItem);
  }
};

window.addEventListener('load', () => {
  showScore();
});