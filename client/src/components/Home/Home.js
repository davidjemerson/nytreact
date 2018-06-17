import React, { Component } from "react";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Home extends Component {
    state = {
        search: "",
        qty: "",
        syear: "",
        eyear: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.search && this.state.qty) {
          this.getArticles();
        }
    };

    render () {
    return (
        <div className="container">

            <div className="jumbotron" style={{backgroundColor: '#20315A', color: 'white'}}>
                <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
            </div>

            <div className="row">
                <div className="col-sm-12">
                <br/>

                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
                        </div>
                        <div className="panel-body">

                            <form>
                                <Input
                                    value={this.state.search}
                                    onChange={this.handleInputChange}
                                    name="search"
                                    placeholder="Search Term"
                                />
                                
                                <Input
                                    value={this.state.qty}
                                    onChange={this.handleInputChange}
                                    name="qty"
                                    placeholder="Number of Records to Retrieve"
                                />

                                <Input
                                    value={this.state.syear}
                                    onChange={this.handleInputChange}
                                    name="syear"
                                    placeholder="Start Year (Optional)"
                                />

                                <Input
                                    value={this.state.eyear}
                                    onChange={this.handleInputChange}
                                    name="eyear"
                                    placeholder="End Year (Optional)"
                                />

                                <FormBtn
                                    disabled={!(this.state.search && this.state.qty)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Search Articles
                                </FormBtn>
                                <FormBtn>Clear Results</FormBtn>
                                {/* <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
                                <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button> */}

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
    }
}

export default Home;