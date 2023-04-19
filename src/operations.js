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
        let theId = data.result;
        gameId = theId.replace('Game with ID: ', "").replace(" added.", "");

        return gameId
    }

    getScores = async (id) => {

        let gameId = null;
        const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
            method: 'POST',
            body: JSON.stringify({
                name: "Adams Fun Game"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        })
        
        const data = await response.json();    
      

    }

} 