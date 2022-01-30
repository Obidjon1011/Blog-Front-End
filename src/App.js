import './App.css';
import AddBlog from './Blog/AddBlog';
import Blog from './Blog/Blog';
import Footer from './Footer/Footer';
import {useRoutes } from 'react-router-dom';
import BlogDetail from './Blog/BlogDetail';

function App() {
  let routes = useRoutes([
    { path: "/", element: <Blog /> },
    { path: "add-article", element: <AddBlog /> },
    { path: "blog-detail/:slug", element: <BlogDetail /> },
    // ...
  ]);
  return (
    <div className='App'>
      {routes}
      <Footer />
    </div>
  );
}

export default App;
