import { doc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const BlogHeading = styled.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`;

function Home(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    firestore
      .collection('Posts')
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log('posts', posts);
        setPosts(posts);
      });
  }, []);
  return (
    <div className="home">
      {/* <h1 style={styles.heading}>Tech Blog</h1> */}
      <BlogHeading>Tech Blog</BlogHeading>

      <button className="createPostBtn">Create Post</button>

      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
const styles = {
  heading: {
    marginTop: 25,
  },
};
