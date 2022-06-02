import './App.css';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import 'react-router-dom'
import AllNews from './components/AllNews/AllNews'
import About from './components/About/About'
import News from './components/News/News';
import Ordered from './components/Ordered/Ordered';
import  MainBlogs from './components/MainBlogs/MainBlogs';
import './components/News/News';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainBlogs />} />
        <Route path='/Allnews' element={<AllNews />} />
        <Route path='/About' element={<About />} />
        <Route path='/News' element={<News/>} />
        {/* <Route path='/AddBlog' element={<AddBlog />} /> */}
        <Route path='/Ordered' element={<Ordered />} />
      </Routes>
    </Layout>
  );
}

export default App;
