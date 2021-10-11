import React, { Component } from "react";

export default class Taskitem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };
  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  };
  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  };
  render() {
    var { task, index } = this.props;

    return (
      <tr>
        <td className="text-center">{index}</td>
        <td className="text-center">{task.name}</td>
        <td
          className={task.status ? "label-active" : "label-hide"}
          onClick={this.onUpdateStatus}
        >
          {task.status ? "Active" : "Hide"}
        </td>
        <td className="flex">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.onUpdate}
          >
            Edit
          </button>
          &nbsp;
          <button
            type="reset"
            className="btn btn-danger"
            onClick={this.onDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
