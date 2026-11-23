import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { usePosts } from '../../context/PostsContext';
import { useAuth } from '../../context/AuthContext';
import { Button, Input, Modal } from '../shared';

// Rules for each field. Returns an object of error messages.
function validate(values) {
  const errors = {};
  if (values.author.trim().length < 2) errors.author = 'Enter your name (at least 2 characters).';
  if (values.title.trim().length < 5) errors.title = 'The title needs at least 5 characters.';
  if (values.body.trim().length < 20) errors.body = 'The post needs at least 20 characters.';
  return errors;
}

function CreatePostForm() {
  const { addPost } = usePosts();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [createdPost, setCreatedPost] = useState(null);

  const { values, errors, touched, handleChange, handleBlur, validateAll, reset } = useForm(
    { author: user?.name || '', title: '', body: '' },
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return; // stop if something is invalid

    const newPost = addPost({
      author: values.author.trim(),
      title: values.title.trim(),
      body: values.body.trim(),
    });
    setCreatedPost(newPost); // opens the success modal
  };

  const writeAnother = () => {
    setCreatedPost(null);
    reset();
  };

  // Only show an error after the person has visited the field (or tried to submit).
  const err = (name) => (touched[name] ? errors[name] : undefined);

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <Input label="Your name" name="author" value={values.author} onChange={handleChange} onBlur={handleBlur} error={err('author')} required />
        <Input label="Title" name="title" value={values.title} onChange={handleChange} onBlur={handleBlur} error={err('title')} required />
        <Input label="Post" name="body" multiline rows={6} value={values.body} onChange={handleChange} onBlur={handleBlur} error={err('body')} required />
        <Button type="submit">Publish post</Button>
      </form>

      {createdPost && (
        <Modal title="Post published" onClose={writeAnother}>
          <p>Your post is now on the Posts page.</p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Button onClick={() => navigate(`/posts/${createdPost.id}`)}>View post</Button>
            <Button variant="outline" onClick={writeAnother}>Write another</Button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default CreatePostForm;
