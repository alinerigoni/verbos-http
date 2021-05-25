import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import "./style.scss";

const Posts = ({ posts }) => {
    console.log('posts', posts);

    return (

        <div className="posts">
            <Row>
                {
                    posts.map((post, key) => {
                        return (
                            <Col xs={4} key={key}>
                                <div className="post" >
                                    <p className="title">{post.title}</p>
                                    <p className="text">{post.body}</p>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>

        </div>
    );
};

Posts.propTypes = {
    posts: PropTypes.array,
};

export default Posts;
