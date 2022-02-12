import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onGood, onNeutral, onBad}) => (
    <div className={s.listFeedback}>
        <button type="button" className={s.buttonFeedback} onClick={onGood}>
            Good
        </button>
        <button type="button" className={s.buttonFeedback} onClick={onNeutral}>
            Neutral
        </button>    
        <button type="button" className={s.buttonFeedback} onClick={onBad}>
            Bad
        </button>
  </div>
);

export default FeedbackOptions;