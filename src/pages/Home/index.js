import React, { useEffect, useState } from 'react';
import axios from "axios";

// components of the page
import Posts from '../../components/posts';

// style page
import "./style.scss";

const Home = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            setPosts(response.data);
        })
    }

    useEffect(() => {
        getPosts()
    }, []);

    return (
        <div className="pg-home">
            <h1 className="pg-home__title">Verbos HTTP</h1>
            <ul className="pg-home__list">
                <li className="pg-home__list-item">Seguinte usando a lib axios, eu quero vc faça 3 telas pra testar os verbos http</li>
                <li className="pg-home__list-item">1 Lista os dados</li>
                <li className="pg-home__list-item">2 adicionar o dados</li>
                <li className="pg-home__list-item">3 editar dados</li>
                <li className="pg-home__list-item">Na listagem tem que ter um botão de deletar</li>
                <li className="pg-home__list-item">Ao pra fazer as chamadas vc pode usar esse servir/api aqui</li>
                <li className="pg-home__list-item"><a href="https://jsonplaceholder.typicode.com">https://jsonplaceholder.typicode.com</a></li>
                <li className="pg-home__list-item">Sacou? Quero que vc faça um CRUD</li>
                <li className="pg-home__list-item">Create, Read, Update, Delete</li>
                <li className="pg-home__list-item">Os campos pode ser qualquer um tá bom?</li>
                <li className="pg-home__list-item">Mas tem que ser mais no mínimo 3</li>
                <li className="pg-home__list-item">A ideia é vc testar os verbos</li>
                <li className="pg-home__list-item">E fazer crud</li>
            </ul>

            <Posts posts={posts} />
        </div>
    )
}

export default Home;
