import React from 'react';
import Menu from '../../componentes/Menu';
import dados_iniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import Footer from '../../componentes/Footer';

function Home() {
  return (
    <div>
      <Menu />

      <BannerMain 
        videoTitle={dados_iniciais.categorias[0].videos[0].title}
        url = {dados_iniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
        
      />
      
      <Carousel 
        ignoreFirstVideo
        category={dados_iniciais.categorias[0]}
      />

      <Carousel category={dados_iniciais.categorias[1]} />
      <Carousel category={dados_iniciais.categorias[2]} />
      <Carousel category={dados_iniciais.categorias[3]} />
      <Carousel category={dados_iniciais.categorias[4]} />
      <Carousel category={dados_iniciais.categorias[5]} />

      <Footer />
    </div>
  );
}

export default Home;
