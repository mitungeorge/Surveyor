import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div key={survey._id} className="card blue-grey darken-1">
          <div className="card-content">
            <span className="card-title white-text">{survey.title}</span>
            <p className="white-text">{survey.body}</p>
            <p className="right white-text">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a className="gold-text">Yes: {survey.yes}</a>
            <a className="gold-text">No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div style={{ marginLeft: '5%', width: '90%' }}>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
