export default class Games {
  createNew = async () => {
    let gameId = null;
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Adams Fun Games',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    gameId = data.result.replace('Game with ID: ', '').replace(' added.', '');

    return gameId;
  }

  addScores = async ({ user, score }) => {
    const response = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/k5DaJcCw6vMB9vppptzt/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user, score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response;
  }

  getScores = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/k5DaJcCw6vMB9vppptzt/scores/');

    const data = await response.json();
    return data.result;
  }
}