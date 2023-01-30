import PropTypes from 'prop-types';

import Post from 'src/components/Post';

import './styles.scss';

function Posts({ posts }) {
  return (
    <main className="posts">
      <h1 className="posts-title">Dev Of Thrones</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
          // Décidément il est partout ce spread operator !
          // Ça revient à taper :
          // <Post key={post.id}
          //   id={post.id}
          //   title={post.title}
          //   category={post.category}
          //   excerpt={post.excerpt}
          // />
          // Ça économise nos petits doigts en passant toutes les valeurs de l'objet "post" en props
        ))}
      </div>
    </main>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default Posts;
