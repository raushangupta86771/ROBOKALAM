import React, { useState } from 'react';

function EmotionalStatus(props) {
    const [selectedStatus, setSelectedStatus] = useState(null);

    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
        props.onChange(e.target.value);
    };

    return (
        <div className="EmotionalStatus">
            <h2>How are you feeling?</h2>
            <label>
                <input
                    type="radio"
                    name="status"
                    value="happy"
                    checked={selectedStatus === 'happy'}
                    onChange={handleStatusChange}
                />
                Happy
            </label>
            <label>
                <input
                    type="radio"
                    name="status"
                    value="sad"
                    checked={selectedStatus === 'sad'}
                    onChange={handleStatusChange}
                />
                Sad
            </label>
        </div>
    );
}

export default EmotionalStatus;
