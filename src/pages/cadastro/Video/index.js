import React from 'react';
import PageDefault from '../../../componentes/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <PageDefault>
            <h2>
                Cadastro de Video
            </h2>
            <br />
            <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
        </PageDefault>
    )
}

export default CadastroVideo;