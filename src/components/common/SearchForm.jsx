import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchIssues } from "../../store//actions/index";

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return <div>!</div>;
  }
};

const renderInput = ({ input, label, className, meta }) => {
  return (
    <div className="input-group has-validation">
      <input
        {...input}
        placeholder={label}
        autoComplete="off"
        className={className + (renderError(meta) ? " error-field" : "")}
        title={renderError(meta) ? meta.error : ""}
      />{" "}
      {renderError(meta)}
    </div>
  );
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.owner) {
    errors.owner = "The owner field is required.";
  }

  if (!formValues.repository) {
    errors.repository = "The repository field is required.";
  }

  return errors;
};

const SearchForm = ({ handleSubmit, onFormSubmit }) => {
  const onSubmit = (formValues) => {
    onFormSubmit(formValues);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="d-flex justify-content-center"
    >
      <Field
        name="owner"
        label="Owner"
        component={renderInput}
        className="form-control form-control-sm mx-1 bg-transparent text-white card-prop"
      />
      <Field
        name="repository"
        label="Repository"
        component={renderInput}
        className="form-control form-control-sm mx-1 bg-transparent text-white card-prop"
      />

      <div>
        <button type="submit" className="btn btn-primary btn-sm mx-2">
          Submit
        </button>
      </div>
    </form>
  );
};

export default connect(null, { fetchIssues })(
  reduxForm({
    form: "searchForm",
    validate,
  })(SearchForm)
);
