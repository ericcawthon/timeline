import React from "react";
import { Field, reduxForm } from "redux-form";

class DateForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form
                className="ui form error"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field
                    name="startDate"
                    label="Enter Start Date"
                    component={this.renderInput}
                />
                <Field
                    name="endDate"
                    label="Enter End Date"
                    component={this.renderInput}
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.startDate) {
        errors.startDate = "You must enter a starting date";
    }

    if (!formValues.endDate) {
        errors.endDate = "You must enter an ending date";
    }

    return errors;
};

export default reduxForm({
    form: "dateForm",
    validate: validate
})(DateForm);
