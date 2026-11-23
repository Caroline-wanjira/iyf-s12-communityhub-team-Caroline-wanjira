import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import About from './pages/About';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import Challenges from './pages/challenges/Challenges';
import TimerChallenge from './pages/challenges/TimerChallenge';
import ApiSearch from './pages/challenges/ApiSearch';
import TabsChallenge from './pages/challenges/TabsChallenge';
import UserProfile from './pages/challenges/UserProfile';

// Every page is a child of <Layout />, so the header, sidebar and footer
// are shared. The page itself appears where Layout renders <Outlet />.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="posts/:postId" element={<PostDetail />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />

        {/* Daily challenges */}
        <Route path="challenges" element={<Challenges />} />
        <Route path="challenges/timer" element={<TimerChallenge />} />
        <Route path="challenges/search" element={<ApiSearch />} />
        <Route path="challenges/tabs" element={<TabsChallenge />} />
        <Route
          path="challenges/profile/:userId"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
