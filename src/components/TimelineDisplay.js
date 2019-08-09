import React from "react";
import { connect } from "react-redux";

import { fetchDates } from "../actions";
class TimelineDisplay extends React.Component {
    renderdate(headertext, date) {
        return (
            <div class="ui message">
                <div class="header">{headertext}</div>
                <p>{date}</p>
            </div>
        );
    }

    render() {
        if (!this.props.dateValues.dates.futureDate) {
            return (
                <div class="ui message">
                    <div class="header">Enter Dates Above</div>
                    <p>All it takes is two inputs!</p>
                </div>
            );
        } else {
            return (
                <div>
                    <div class="ui horizontal divider" />
                    {this.renderdate(
                        "Start Date: ",
                        this.props.dateValues.dates.startDate
                    )}
                    {this.renderdate(
                        "End Date: ",
                        this.props.dateValues.dates.endDate
                    )}
                    {this.renderdate(
                        "Future Date: ",
                        this.props.dateValues.dates.futureDate
                    )}
                </div>
            );
        }
    }
}

const mapStatetoProps = state => {
    return {
        dateValues: state.dateValues
    };
};

export default connect(
    mapStatetoProps,
    { fetchDates: fetchDates }
)(TimelineDisplay);
