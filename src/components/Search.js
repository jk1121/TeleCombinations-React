import React, { Component } from 'react';
import SearchField from "react-search-field";

class Search extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    onSearch = (value) => {
        debugger;
        console.log("Clicked" + value);
        this.props.onSearchInput(value);
    }
    render() {
        return (<div className="col-10 m-5">
            <div>
                <label className="mr-5" style={{ color: "blue" }}>ENTER PHONE NUMBER : </label>
                <SearchField
                    placeholder="Search..."
                    onSearchClick={this.onSearch}
                    classNames="test-class"
                />
            </div>
            <h6><div><label className="m-2">Total Number of Records: </label>{this.props.totalRecords} </div></h6>
        </div>);
    }
}

export default Search;