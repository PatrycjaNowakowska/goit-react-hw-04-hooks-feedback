import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

const option = {
  option1: "good",
  option2: "neutral",
  option3: "bad",
};

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  totalFeedbackCounter = () => {
    this.setState((state) => ({
      ...state,
      total: state.good + state.neutral + state.bad,
    }));
  };

  positiveFeedbackPercentageCounter = () => {
    this.setState((state) => ({
      ...state,
      percentage: (state.good / state.total) * 100,
    }));
  };

  addGoodFeedback = (e) => {
    this.setState((state, props) => ({
      ...state,
      
      good: (state.good + 1),
    }));
    this.totalFeedbackCounter();
    this.positiveFeedbackPercentageCounter();
  };

  addNeutralFeedback = (e) => {
    this.setState((state, props) => ({
      ...state,
      neutral: state.neutral + 1,
    }));
    this.totalFeedbackCounter();
    this.positiveFeedbackPercentageCounter();
  };

  addBadFeedback = (evt) => {
    this.setState((state, props) => ({
      ...state,
      bad: state.bad + 1,
    }));
    this.totalFeedbackCounter();
    this.positiveFeedbackPercentageCounter();
  };

  render() {
    return (
      <div className="">
        <Section title={"Please leave a feedback "}>
          <FeedbackOptions
            {...option}
            addGoodFeedback={this.addGoodFeedback}
            addNeutralFeedback={this.addNeutralFeedback}
            addBadFeedback={this.addBadFeedback}
          />
        </Section>

        <Section title={"Statistics"}>
          {this.state.total === 0 ? (
            <Notification message={"No feedback given"} />
          ) : (
            <ul>
              <li>
                Good: {this.state.good}
              </li>
              <li>
                Neutral: {this.state.neutral}
              </li>
              <li>
                Bad: {this.state.bad}
              </li>
              <li>
                Total: {this.state.total}
              </li>
              <li>
                Positive feedback:{" "}
                {Math.round(this.state.percentage)}%
              </li>
            </ul>
          )}
        </Section>
      </div>
    );
  }
}

export default Statistics;