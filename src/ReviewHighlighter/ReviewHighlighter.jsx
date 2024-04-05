import React from 'react';
import './ReviewHighlighter.css'
import ReviewData from '../ReviewData/ReviewData.json';
import { CgProfile } from "react-icons/cg";
import { IoMdPersonAdd } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import { MdOutlineBookmarks } from "react-icons/md";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const ReviewHighlighter = () => {
    const Star = ({ stars }) => {
        const rating = Array.from({length: 5}, (elem, index) => {
            let number = index + 0.5;
            return (
                <span key={index}>
                    {stars >= index + 1 ? (
                        <FaStar color='#ffaa4a' size={20} className='icon'/>
                    ) : stars >= number ? (
                        <FaStarHalfAlt size={20} color='#ffaa4a' className='icon'/>
                    ) : (
                        <AiOutlineStar size={20} className='icon'/>
                    )}
                </span>
            );
        });

        return rating;
    };
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
    

    return (
        <div className='review'>
            {ReviewData.map((reviewHighlighter, index) => (
                <div className='element' key={index}>
                    <div className='header'>
                    <div className='title'>
                        <div><CgProfile size={50} /></div>
                        <h1>{reviewHighlighter.reviewer_name} wrote a review at tripadvisor.com</h1>
                    </div>
                    <div className='add'>
                        <IoMdPersonAdd size={30}/>
                        <MdOutlineBookmarks size={30}/>
                        <IoIosMore size={30}/>
                    </div>
                    </div>
                    <div className='context'>
                    <div className='rate'>
                        <div>
                        <Star stars={reviewHighlighter.rating_review_score} />
                        </div>
                        <div className='date'>{reviewHighlighter.date}</div>
                    </div>
                    <div className='content'>
                        <SingleReviewHighlighter
                        key={reviewHighlighter.ReviewHighlighter_id} // Assuming ReviewHighlighter_id is the correct key
                        content={reviewHighlighter.content}
                        sentiment={reviewHighlighter.sentiment}
                    />
                    </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewHighlighter;
