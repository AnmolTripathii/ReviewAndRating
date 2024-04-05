import React, { useState, useEffect } from 'react';
import ReviewHighlighter from './ReviewHighlighter/ReviewHighlighter';

const App = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = require('./ReviewData/ReviewData.json');
                setReviews(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="app-container">
            <h1>Reviews</h1>
            <ReviewHighlighter reviews={reviews} />
        </div>
    );
};

export default App;
