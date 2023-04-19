export default class Games {

    createNew = async () => {
        let gameId = null;
        const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
            method: 'POST',
            body: JSON.stringify({
                name: "Adams Fun Game"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        gameId = data.result.replace('Game with ID: ', "").replace(" added.", "");

        return gameId;
    }

    addScores = async ({ id, user, score }) => {
        const response = fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:${id}/scores/`, {
            method: 'POST',
            body: JSON.stringify({
                user: user, score: score
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        const data = await response;
        console.log(data)
    }

    getScores = async (id) => {
        const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:${id}/scores/`)

        const data = await response.json();
        console.log(data.result)
        return data.result;
    }



} 