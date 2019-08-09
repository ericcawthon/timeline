import React from "react";
import { connect } from "react-redux";
import { submitDates } from "../actions";
import DateForm from "./DateForm";

class DateContainer extends React.Component {
    onSubmit = formValues => {
        this.props.submitDates(formValues);
    };

    render() {
        return (
            <div>
                <h3>Create a Timeline</h3>
                <DateForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}
export default connect(
    null,
    { submitDates }
)(DateContainer);
