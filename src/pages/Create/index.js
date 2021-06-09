import React, { useEffect, useState } from 'react';
import axios from "axios";

import { Container } from 'react-bootstrap';

// style page
import "./style.scss";

const Create = () => {
    const [post, setPost] = useState([]);

    const createPost = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            setPost(response.data);
        })
    }

    // useEffect(() => {
    //     getPosts()
    // }, []);

    return (
        <div className="pg-create">
            <Container>
                <h1 className="pg-create__title">Criar post</h1>

                <div className="create-post">
                    <form action="" className="create-post__form">
                        <div className="form-group">
                            <label htmlFor="create-post__title">Titulo</label>
                            <input type="text" name="title" id="title" className="create-post__field-title" />
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Create;
