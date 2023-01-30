import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';
import Spinner from 'src/components/Spinner';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import './styles.scss';





const getPostsByCategory = (posts, category) => {
  if (category === 'Accueil') {
    return posts;
  }

  return posts.filter((post) => post.category === category);
};

// == Composant
function Blog() {
  const [zenMode, setZenMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState(categoriesData);
  const [posts, setPosts] = useState([]);

  const classNames = `blog${zenMode ? ' blog--zen' : ''}`;

  const handleClick = () => {
    setLoading(true);
    // simulation de chargement des posts
    setTimeout(() => {
      setPosts(postsData);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={classNames}>
      <Header
        categories={categories}
        toggleZenMode={() => {
          setZenMode(!zenMode);
        }}
        zenMode={zenMode}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        Load data
      </button>{loading ? (<Spinner />) : (
        <Routes>
          {categories.map((category) => (
            <Route
              key={category.route}
              path={category.route}
              element={<Posts posts={getPostsByCategory(posts, category.label)} />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

// == Export
export default Blog;
