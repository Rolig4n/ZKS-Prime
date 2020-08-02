/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import PageDefualt from '../../componentes/PageDefault';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
// import dados_iniciais from '../../data/dados_iniciais.json';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  return (
    <PageDefualt paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Carregando...</div>)}
      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefualt>
  );
}

export default Home;
