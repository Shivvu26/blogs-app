import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import AllContent from './components/AllContent';
import PostCards from './components/BlogCard';
import Footer from './components/Footer';
import BlogCreate from './components/BlogCreate';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <AllContent /> } />
        <Route path="blog-create" element={ <BlogCreate/> } />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
