import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onIncrement }) => (
    <div className={s.listFeedback}>
        <button type="button" onClick={onIncrement}>
            Good
        </button>
        <button type="button" onClick={onIncrement}>
            Neutral
        </button>    
        <button type="button" onClick={onIncrement}>
            Bad
        </button>
  </div>
);

export default FeedbackOptions;