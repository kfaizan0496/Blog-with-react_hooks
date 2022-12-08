import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';
import Radium from 'radium';

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
      <h1 style={styles.heading}>{post.title}</h1>
      <p style={styles.postDetail}>{post.content}</p>
    </div>
  );
}

const styles = {
  postDetail: {
    border: '1px solid #e1e1e1',
    // padding: 5,
    paddingTop: 10,
    borderRadius: 5,

    '@media(max-width: 720px)': {
      color: 'pink',
    },
  },
  heading: {
    textAlign: 'center',
    margin: 0,

    ':hover': {
      color: 'red',
    },
  },
};
export default Radium(PostDetail);
