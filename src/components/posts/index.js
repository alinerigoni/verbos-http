import PropTypes from 'prop-types';
import "./style.scss";

const Posts = ({ posts }) => {
    console.log('posts', posts);

    return (
        <div className="posts">
            {
                posts.map((post, key) => {
                    return (
                        <div className="post" key={key}>
                            <p className="title">{post.title}</p>
                            <p className="text">{post.body}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

Posts.propTypes = {
    posts: PropTypes.array,
};

export default Posts;
