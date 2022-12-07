import { Route, Routes } from 'react-router-dom';
import { Navbar, Home, PostDetail, CreatePost } from './';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post/:postId" element={<PostDetail />} />
        <Route exact path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
