import React, { Component } from "react";
import moment from "moment";

export default class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            searchParams: {},
            searching: null
        };
        this.handSubmit = this.handSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            searchParams: {
                topic: this.refs.topic.value,
                startDate: this.refs.startYear.value
                    ? `&begin_date=${moment(new Date(this.refs.startYear.value)).format('YYYYMMDD')}`
                    : "",
                endDate: this.refs.endYear.value
                    ? `&end_date=${moment(new Date(this.refs.endYear.value)).format('YYYYMMDD')}`
                    : "",
                limit: this.refs.numOfRecords.value
                    ? this.refs.numOfRecords.value
                    : 10

            }
        }, function () {
            // alert("new state is " + JSON.stringify(this.state));
            this.props.newQuery(this.state); // Send the Query to Home Component
            this.setState({
                searching: true
            }, () => setTimeout(() => this.setState({ searching: null }), 1200));
        });
    }
}