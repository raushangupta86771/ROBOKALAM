import React, { useState } from 'react';
import axios from 'axios';

function AddVideo() {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [thumbnail, setThumbnail] = useState('');

    const handleTitleChange = event => {
        setTitle(event.target.value);
    };

    const handleUrlChange = event => {
        setUrl(event.target.value);
    };

    const handleThumbnailChange = event => {
        setThumbnail(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:5000/videos', { title, url, thumbnail })
            .then(response => {
                console.log(response.data);
                setTitle('');
                setUrl('');
                setThumbnail('');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="AddVideo">
            <h1>Add a new video</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={handleTitleChange} />

                <label htmlFor="url">Video URL:</label>
                <input type="text" id="url" value={url} onChange={handleUrlChange}
                />

                <label htmlFor="thumbnail">Thumbnail URL:</label>
                <input type="text" id="thumbnail" value={thumbnail} onChange={handleThumbnailChange} />

                <button type="submit">Add Video</button>
            </form>
        </div>
    );
}

export default AddVideo;