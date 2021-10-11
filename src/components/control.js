import React, { Component } from "react";
import Search from "./search";
import Sort from "./sort";
export default class Control extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="input-group row flex">
        {/* Search */}
        <Search onSearch={this.props.onSearch} />
        {/* Sort */}
        <Sort
          onSort={this.props.onSort}
          sortBy={this.props.sortBy}
          sortValue={this.props.sortValue}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
