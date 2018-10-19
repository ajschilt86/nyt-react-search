import React, { Component } from "react";
import "./IndividualResults.css";
import API from "../../utils/API";

export default class IndividualResult extends Component {

    constructor() {
        super();
        this.state = {
            saved: null
        }
        this.save = this.save.bind(this);
    };

    save() {
        console.log("saved articles clicked")
        API.saveArticle({
            arcticleId: this.props.id,
            url: this.props.url,
            title: this.props.title,
            date: this.props.date,
            image: this.props.image
        })
            .then(this.setState({
                saved: true
            }));
    }

    render() {
        return (
            <li className="collection-item">
                <img className="img-thumbnail" src={this.props.img} alt="article pic" />
                <p>Title: </p> {this.props.title}
                <p>URL: </p> <a href={this.props.url} target="_blank"> {this.props.url} </a>
                {this.props.date ? (<p>{`Date ${this.props.date}`}</p>) : ""}
                <p>ID: </p> {this.props.id}
                {this.state.saved ? (<button id={this.props.id} className="btn btn-primary right-align articleSavedBtn"> Article Saved </button>) :
                    (<button id={this.props.id} onClick={this.save} className="btn btn-success right-align articleSaveBtn"> Save </button>)
                }
            </li>
        );
    }
}