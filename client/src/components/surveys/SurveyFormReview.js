import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  return (
    <div>
      <h5>Please review your email</h5>
      <div className="row">
        <div className="col s12">
          <div className="card white medium">
            <span>
              <div>
                <p>
                  <strong>{formValues.subject}</strong>
                </p>
              </div>
              <hr />
              <div>
                <strong>no-reply@surveyor.com</strong>
                <br />
                <label>to {formValues.recipients}</label>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3>I'd like your input!</h3>
                <p>Please answer the following question:</p>
                <p>{formValues.body}</p>
                <div>Yes</div>
                <div>No</div>
              </div>
            </span>
          </div>
        </div>
      </div>

      <button
        className="yellow darken-3 white-text btn-flat left"
        onClick={onCancel}
      >
        Back
        <i className="material-icons right">arrow_back</i>
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat white-text right"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
