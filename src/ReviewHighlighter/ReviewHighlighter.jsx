import React, { useState, useEffect } from 'react';
import ReviewData from '../ReviewData/ReviewData.json'

const SingleReviewHighlighter = ({ content, sentiment }) => {
    const getBackgroundColor = () => {
        switch (sentiment) {
            case 'Positive':
                return '#D9F2DD';
            case 'Mixed':
                return '#e8bd6d3d';
            case 'Negative':
                return '#F2DBD9';
            case 'Neutral':
                return '#eaf09b6b';
        }
    };

    return (
        <div
            style={{
                margin: '10px',
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: getBackgroundColor(),
            }}
        >
            {content}
        </div>
    );
};

const ReviewHighlighter = () => {
    const [reviewHighlighters, setReviewHighlighters] = useState([]);

    useEffect(() => {
        // Fetch or import your JSON data here
        const fetchData = async () => {
            try {
                // Sample data
                const response = await fetch('your-json-file-url');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setReviewHighlighters(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error here, e.g., set state for error message
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {ReviewData.map(reviewHighlighter => (
                <SingleReviewHighlighter
                    key={reviewHighlighter.ReviewHighlighter_id} // Assuming ReviewHighlighter_id is the correct key
                    content={reviewHighlighter.content}
                    sentiment={reviewHighlighter.sentiment}
                />
            ))}
        </div>
    );
};

export default ReviewHighlighter;
