import React, { useEffect, useState } from 'react';
import axios from "axios";

import { Container, Row, Col } from 'react-bootstrap';
import { H1, H2, H3, H4, H5, H6, Paragraph } from '../../components/elements/Typography';

// style page
import "./style.scss";


const Home = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            setPosts(response.data);
        })
    }

    const deletePost = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            setPosts(response.data);
        })
    }

    useEffect(() => {
        getPosts()
    }, []);

    return (
        <div className="pg-home">
            {/* -

                Verbos HTTP

                    -   Seguinte usando a lib axios, eu quero vc faça 3 telas pra testar os verbos http
                    -   1 Lista os dados
                    -   2 adicionar o dados
                    -   3 editar dados
                    -   Na listagem tem que ter um botão de deletar
                    -   Ao pra fazer as chamadas vc pode usar esse servir/api aqui
                    -   https://jsonplaceholder.typicode.com"
                    -   Sacou? Quero que vc faça um CRUD
                    -   Create, Read, Update, Delete
                    -   Os campos pode ser qualquer um tá bom?
                    -   Mas tem que ser mais no mínimo 3
                    -   A ideia é vc testar os verbos
                    -   E fazer crud

            */}

            <Container>
                <div className="wrapper-typography">
                    <H1 text="titulo h1" color="primary" />
                    <H2 text="titulo h2" color="secondary" />
                    <H3 text="titulo h3" color="white" />
                    <H4 text="titulo h4" color="black" />
                    <H5 text="titulo h5" color="black-light" />
                    <H6 text="titulo h6" color="gray" />
                    <Paragraph text="Paragrafo de texto ara teste de componentes de elementos" color="secondary" />
                </div>

                <div className="posts">
                    <Row>
                        {
                            posts.map((post, key) => {
                                return (
                                    <Col xs={4} key={key}>
                                        <div className="post">
                                            <H1 text={post.title} color="primary" />
                                            <Paragraph text={post.body} color="primary" />
                                            <button className="btn btn--delete">Deletar</button>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Home;
