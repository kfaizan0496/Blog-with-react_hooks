import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';

function PostDetail(props) {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  useEffect(() => {
    firestore
      .collection('Posts')
      .doc(postId)
      .get()
      .then((snapshot) => {
        console.log('snapshot', snapshot.data());
        setPost(snapshot.data());
      });
  }, []);
  return (
    <div className="post-detail">
      PostDetail
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
