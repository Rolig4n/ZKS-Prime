/* eslint-disable linebreak-style */
import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(objetoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoVideo),
  })
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const dados = await respostaServidor.json();
        return dados;
      }
      throw new Error('nao foi possivel pegar os dados:(');
    });
}

export default {
  create,
};
