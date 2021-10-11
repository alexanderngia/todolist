import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };
  render() {
    var { keyword } = this.state;
    return (
      <div className="mt-3 flex-col">
        <input
          name="keyword"
          type="text"
          className="form-control"
          placeholder="Add Keyword"
          aria-label="Add Keyword"
          aria-describedby="button-addon2"
          value={keyword}
          onChange={this.onChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={this.onSearch}
        >
          <i className="fas fa-search "></i>Search
        </button>
      </div>
    );
  }
}
