import { createContext, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/useLocalStorage';

export const API_URL = 'https://jsonplaceholder.typicode.com';

const PostsContext = createContext(null);

// Shows who wrote a post. API posts only have a userId number.
export function getAuthorName(post) {
  return post.author || `Member ${post.userId}`;
}

export function PostsProvider({ children }) {
  // Posts from the API (first 30 are plenty for this app).
  const { data, loading, error, refetch } = useFetch(`${API_URL}/posts?_limit=30`);

  // Posts created by the user are kept in local state + localStorage,
  // because JSONPlaceholder does not really save new posts.
  const [myPosts, setMyPosts] = useLocalStorage('communityhub-my-posts', []);
  const [likedIds, setLikedIds] = useLocalStorage('communityhub-likes', []);

  // Newest local posts first, then the API posts.
  const posts = [...myPosts, ...(data || [])];

  const addPost = ({ title, body, author }) => {
    const newPost = {
      id: `local-${Date.now()}`,
      userId: 0,
      title,
      body,
      author,
    };
    setMyPosts((prev) => [newPost, ...prev]);
    return newPost;
  };

  const getLocalPost = (id) => myPosts.find((p) => String(p.id) === String(id));

  const isLiked = (id) => likedIds.includes(String(id));

  const toggleLike = (id) => {
    const key = String(id);
    setLikedIds((prev) => (prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key]));
  };

  const value = {
    posts,
    loading,
    error,
    refetch,
    myPosts,
    likedCount: likedIds.length,
    addPost,
    getLocalPost,
    isLiked,
    toggleLike,
  };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
}

export function usePosts() {
  return useContext(PostsContext);
}
