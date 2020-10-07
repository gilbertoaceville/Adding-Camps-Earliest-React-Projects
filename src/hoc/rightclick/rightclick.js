import React from "react";

export class RightClick extends React.Component {

  handleRightClick = e => {
    e.preventDefault();
    let x = e.screenX;
    let y = e.screenY - 80;

    this.setState({
      ...this.state,
      showRigntClick: true,
      position: {
        x,
        y
      }
    });
  };

  handleOnClick = e => {
    this.setState({
      ...this.state,
      showRigntClick: false
    });
  };

  state = {
    showRigntClick: false,
    position: {
      x: 0,
      y: 0
    }
  };

  handleNewName = e => {
    this.props.removeInput();
  };

  handleBlur = e =>{
    this.props.handleOnBlur()
  }

  render() {
    return (
      <div
        onClick={this.handleOnClick.bind(this)}
        onContextMenu={this.handleRightClick.bind(this)}
      >
        {this.state.showRigntClick && (
          <div
            className="list"
            style={{
              left: this.state.position.x,
              top: this.state.position.y
            }}
          >
            <ul>
              <li onClick={this.props.remove}>Remove Camp</li>
              <li onClick={this.handleNewName.bind(this)}>{
                  !this.props.trouble ? 'Rename Camp' : "Exit Rename"
              }</li>
              <li  onClick={this.props.exchangeEachCard}>Exchange Camp</li>
            </ul>
          </div>
        )}
        {this.props.children}
      </div>
    );
  }
}
