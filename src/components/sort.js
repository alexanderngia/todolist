import React, { Component } from "react";

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: {
        by: "",
        value: 1,
      },
    };
  }
  onClick = (sortBy, sortValue) => {
    this.props.onSort(sortBy, sortValue);
  };

  render() {
    return (
      <div className="mt-3 flex-col">
        <div
          className="btn-group"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort
            </button>
            <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <li onClick={() => this.onClick("name", 1)}>
                <a className="dropdown-item" href="/#">
                  A - Z
                </a>
              </li>
              <li onClick={() => this.onClick("name", -1)}>
                <a className="dropdown-item" href="/#">
                  Z - A
                </a>
              </li>
              <li onClick={() => this.onClick("status", 1)}>
                <a className="dropdown-item" href="/#">
                  Active
                </a>
              </li>
              <li onClick={() => this.onClick("status", -1)}>
                <a className="dropdown-item" href="/#">
                  Hide
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
