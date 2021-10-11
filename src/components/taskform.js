import React, { Component } from "react";

export default class Taskform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }
  componentWillMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status,
      });
    } else if (!nextProps.task) {
      this.setState({
        id: "",
        name: "",
        status: false,
      });
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    // cancel & closeform
    this.onClear();
    this.props.addTask(this.state);
  };

  onClear = () => {
    this.setState({
      name: "",
      status: false,
    });
    this.props.addTask(this.state);
  };

  render() {
    var { id } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <legend>{id !== "" ? "Update task" : "Add Task"}</legend>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input field"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
        </div>
        <div className="form-group mt-3">
          <label>Status</label>
          <select
            name="status"
            className="form-control"
            value={this.state.status}
            onChange={this.onChange}
          >
            <option value={true}>Active</option>
            <option value={false}>Hide</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-danger mt-3"
          onClick={this.onClear}
        >
          Cancel
        </button>
      </form>
    );
  }
}
