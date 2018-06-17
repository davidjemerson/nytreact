import React, { Component } from "react";
import API from "../../utils/API";

class Saved extends Component {
    state = {
        articles: "",
        title: "",
        date: "",
        url: ""
    };

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getArticles()
            .then(res =>
                this.setState({ articles: res.data, title: "", date: "", url: ""})
            )
            .catch(err => console.log(err));
    };

    deleteArticle = id => {
        API.deleteArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };


    render () {
    return (
        <div className="container">

            <div className="row">
                <div className="col-sm-12">
                <br/>

                    <div className="panel panel-primary">

                        <div className="panel-heading">
                            <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
                        </div>

                        <div className="panel-body" id="well-section">
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">

                    <hr/>
                    <h5 className="text-center"><small>Made by Ahmed with lots and lots of <i className="fa fa-heart"></i></small></h5>

                </div>
            </div>

        </div>
    )
    }
}

export default Saved;