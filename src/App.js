import './App.css';
import Landing_page from './landing_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostServices from './PostServices';
import Post_view from './Post_view';
import PostForm from './PostForm';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing_page />}></Route>
          <Route path="/LandingPage" element={<Landing_page />}></Route>
          <Route path="/PostView" element={<Post_view />}>
          <Route path="PostServices" element={<PostServices />}></Route>
          </Route>
          <Route path="PostForm" element={<PostForm />}></Route>
          

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
