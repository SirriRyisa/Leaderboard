const gameApi = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aqEWX22DXEqIpCJET4GL/scores';

const getScores = async () => {
  const response = await fetch(gameApi);
  const data = await response.json();
  return data.result;
};
const setScores = async (obj) => {
  const response = await fetch(`${gameApi}`, {
    method: 'POST', 
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  await response.json();
};

export { getScores, setScores };