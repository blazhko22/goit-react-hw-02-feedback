import React, { Component } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';

class Render extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };


  render() {
    const { value } = this.state;

    return (

      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
          onIncrement={this.handleIncrement}
        />
        </Section>
        <Section title="Statistics">
          <Statistics value={value} />
        </Section>
      </div>
    );
  }
  
}

export default Render;