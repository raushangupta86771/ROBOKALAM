import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VideoPlayer({ match }) {
    const [status, setStatus] = useState('');
    const [video, setVideo] = useState({});

    useEffect(() => {
        axios.get(`/videos/${match.params.id}`)
            .then(response => {
                console.log(response.data);
                setVideo(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [match.params.id]);

    const handleStatusChange = event => {
        setStatus(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`http://localhost:5000/videos/${match.params.id}/status`, { status })
            .then(response => {
                console.log(response.data);
                setStatus('');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="VideoPlayer">
            <h1>{video.title}</h1>
            <div className="VideoWrapper">
                <video src={video.url} controls></video>
                <div className="StatusWrapper">
                    <h3>Your status:</h3>
                    <div className="StatusButtons">
                        <button value="happy" onClick={handleStatusChange}>😀</button>
                        <button value="neutral" onClick={handleStatusChange}>😐</button>
                        <button value="sad" onClick={handleStatusChange}>😢</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={status} onChange={handleStatusChange} placeholder="Enter a custom status" />
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;

