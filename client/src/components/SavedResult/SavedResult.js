import React, { Component } from "react";
import "./SavedResults.css";
import API from '../../utils/API';

export default class IndividualResult extends Component {
    constructor() {
        super();
        this.state = {
            deleted: null
        }
        this.delete = this.delete.bind(this);
    };

    delete() {
        this.setState({deleted: true}, () => {
            this.props.onDelete(this.props.articleID);
        })
    }

    render() {
        return (
            <li className="collection-item">
        <img className = "img-fluid img-thumbnail rounded right" src={this.props.image}/>
        <br/>
        <p> Title: </p>  {this.props.title}
        <br/>
        <p> URL: </p> <a href={this.props.url} target="_blank"> {this.props.url} </a>
        {this.props.date? (<p><br/>{`Date: ${this.props.date}`}</p>) : ""}
        <br/>
        <p> ID: </p> {this.props.articleId}
        <br/>
        {this.state.deleted? (<button id={this.props.id} className="btn btn-primary right-align articleSavedBtn"> Article Deleted </button>):
          (<button id={this.props.id} onClick={this.delete} className="btn btn-success right-align articleSaveBtn"> Delete </button>)
        }

      </li>
        );
    };
}