import React, { createRef } from "react";

export class Card extends React.Component {

  handleRename = e => {
    e.preventDefault();
    this.props.change(this.inputRename.current.value);
    e.target.reset();
    this.props.handleOnBlur()
  };

  handleMouse = e =>{
    this.props.handleOnBlur()
    this.props.prev()
  }

  handleInput = e =>{
    e.stopPropagation()
  }

  handleExchange = e =>{
    this.props.getIndex()
  }

  inputRename = createRef();
  render() {
    return (
      <div className="card" onClick={this.handleMouse.bind(this)} onContextMenu={this.handleExchange.bind(this)} draggable>
        <img src={this.props.src} alt={this.props.name} />
        <h3 unselectable='true'>{this.props.name}</h3>
        <div>
          {this.props.inputremove && this.props.cardTarget === this.props.cardIndex && (
            <form onSubmit={this.handleRename.bind(this)}>
              <input
                autoFocus={true}
                onClick={this.handleInput.bind(this)}
                ref={this.inputRename}
                className="card-input"
                type="text"
                placeholder="Enter name"
              />
              {/* <div className="buttons">
                <button>Change Name</button>
              </div> */}
            </form>
          )}
        </div>
        {this.props.children}
      </div>
    );
  }
}
