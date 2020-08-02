/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTiltles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Um ae',
    url: 'https://www.youtube.com/watch?v=cagSfmzvTrg',
    categoria: 'Front end',
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  return (
    <PageDefault>
      <h2>Cadastro de Video</h2>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video cadastrado');
        // eslint-disable-next-line arrow-body-style
        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
          // eslint-disable-next-line no-console
            console.log('Cadastrou');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do video"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTiltles}
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
