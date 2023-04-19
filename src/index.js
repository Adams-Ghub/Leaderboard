import _ from 'lodash';
import './style.css';
import Games from './operations'



const scoreboard = document.querySelector('.score-board');
const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('.submit-btn')
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score')


const myGame = new Games()
const gameId = myGame.createNew()
let DATA = myGame.getScores(gameId)
console.log(gameId)

const showScore = async () => {
    const info = await DATA
    for (let i = 0; i < info.length; i++) {
        const boardItem = document.createElement('div');
        const itemName = document.createElement('span');
        const itemScore = document.createElement('span');

        if (i % 2 > 0) {
            boardItem.id = 'odd';
        }
        boardItem.classList.add('score-item');
        itemName.textContent = `${info[i].user}: `;
        itemScore.textContent = info[i].score;
        boardItem.appendChild(itemName);
        boardItem.appendChild(itemScore);
        scoreboard.appendChild(boardItem);
    }
};

refreshBtn.addEventListener('click', async () => {
    DATA = myGame.getScores(gameId)
    scoreboard.innerHTML = ""
    showScore()
    console.log("DATA:", DATA)
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let params = { id: gameId, user: nameInput.value, score: scoreInput.value }
    console.log(params)
    myGame.addScores(params)
    nameInput.value = "";
    scoreInput.value = ""
})

window.addEventListener('load', () => {
    showScore();
});