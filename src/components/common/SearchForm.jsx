import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchRepo } from "../../store//actions/index";

let disabledClass = true;

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
  disabledClass = !formValues.owner || !formValues.repository;

  if (!formValues.owner) {
    errors.owner = "The owner field is required.";
  }

  if (!formValues.repository) {
    errors.repository = "The repository field is required.";
  }

  return errors;
};

const SearchForm = ({ handleSubmit }) => {
  const dispatch = useDispatch();

  const onSubmit = (formValues) => {
    dispatch(fetchRepo(formValues.owner, formValues.repository));
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
        <button
          type="submit"
          className="btn btn-primary btn-sm mx-2"
          disabled={disabledClass}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default connect(
  () => ({
    initialValues: { owner: "facebook", repository: "react" },
  }),
  { fetchRepo }
)(
  reduxForm({
    form: "searchForm",
    validate,
  })(SearchForm)
);
