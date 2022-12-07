import { collection, addDoc } from 'firebase/firestore';
import { useFormInput } from '../hooks';

import React, { useState } from 'react';
import { firestore } from '../firebase';

function CreatePost(props) {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('title', title, title.value);
    console.log('subTitle', subTitle, subTitle.value);

    console.log('content', content, content.value);
    console.log(firestore);

    // Add a new document in collection "cities"
    firestore.collection('Posts').add({
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date(),
    });
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input
            // value={title.value}
            // onChange={(e) => setTitle(e.target.value)}
            {...title}
          />
        </div>
        <div className="form-field">
          <label>Sub Title</label>
          <input
            // value={subTitle.value}
            // onChange={(e) => setSubTitle(e.target.value)}
            {...subTitle}
          />
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea
            // value={content.value}
            // onChange={(e) => setContent(e.target.value)}
            {...content}
          ></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
