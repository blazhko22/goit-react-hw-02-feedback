import React, { Component } from 'react';
import s from './Notification.module.css';

class Notification extends Component {  
      
    constructor(){  
        super();  
        this.state = {  
            message: "There is no feedback"  
        };  
    }  
      
    render() {  
        return <h3 className={s.title}>{this.state.message}</h3>;  
    }  
}

export default Notification;