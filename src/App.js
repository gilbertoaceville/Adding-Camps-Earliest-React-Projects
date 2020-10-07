import React from "react";
import "./App.css";
import "./Appmedia.css";
import { Navigation } from "./hoc/navigation";
import { campFiles } from "./camp";
import { Card } from "./hoc/card/card";
import { RightClick } from "./hoc/rightclick/rightclick";
import { Helmet } from "react-helmet";
import videos from './assests/video/swaps.webm'
// import Ajax from "./hoc/ajax/ajax";

class App extends React.Component {
  state = {
    allcamps: [...campFiles],
    mainIndex: null,
    bg: "",
    removeInput: false,
    inputindex: null,
    showInput: false,
    position: {
      x: null,
      y: null,
    },
    nextIndex: "",
    prevIndex: null,
  };

  handleOnSubmit = (camps) => {
    this.setState({
      ...this.state,
      allcamps: [...this.state.allcamps, { ...camps }],
    });
  };

  renameEachCard = (e) => {
    let eachCamp = [...this.state.allcamps];
    eachCamp[this.state.mainIndex].name = e;

    this.setState({
      ...this.state,
      allcamps: [...eachCamp],
    });
  };

  removeEachCard = (e) => {
    let eachCamp = [...this.state.allcamps];
    eachCamp.splice(e, 1);

    this.setState({
      ...this.state,
      allcamps: [...eachCamp],
    });
  };

  exchangeEachCard = (e) => {
    this.handleClick();
    let eachCamp = [...this.state.allcamps];
    let temp = eachCamp[this.state.prevIndex];
    eachCamp[this.state.prevIndex] = eachCamp[this.state.mainIndex];
    eachCamp[this.state.mainIndex] = temp;
    this.setState({
      ...this.state,
      allcamps: [...eachCamp],
    });
    this.handleUnClick();
  };

  handlePrevIndex = (index) => {
    this.setState({
      ...this.state,
      prevIndex: index,
    });
  };

  componentDidMount() {
    this.handleClick();
    // this.handleUnClick()
  }

  handleClick = (e) => {
    this.setState({
      ...this.state,
      click: true,
    });
  };

  handleUnClick = (e) => {
    setTimeout(() => {
      this.setState({
        ...this.state,
        click: false,
      });
    }, 5000);
  };

  // handleColorChange = e => {
  //   if (e.which === 13) {
  //     this.setState({
  //       ...this.state,
  //       bg: e.target.value
  //     });
  //   }
  // };

  //setting index of each of the images
  settingIndex = (setindex, e) => {
    this.setState({
      ...this.state,
      mainIndex: setindex,
    });
  };

  handleRemoval = (nomindex) => {
    this.setState({
      ...this.state,
      removeInput: !this.state.removeInput,
      nomindex,
    });
  };

  handleInputBtn = (e) => {
    this.setState({
      ...this.state,
      removeInput: false,
    });
  };

  render() {
    return (
      <>
        <Helmet>
          <title>Camps</title>
          <link rel="icon" href="https://www.vicmie.com/favicon.ico" />
        </Helmet>
        <Navigation
          bg={this.state.bg}
          submit={this.handleOnSubmit.bind(this)}
        />
        <RightClick
          exchangeEachCard={this.exchangeEachCard.bind(this)}
          handleOnBlur={this.handleInputBtn.bind(this)}
          trouble={this.state.removeInput}
          removeInput={this.handleRemoval.bind(this, this.state.mainIndex)}
          rename={this.renameEachCard.bind(this)}
          remove={this.removeEachCard.bind(this, this.state.mainIndex)}
        >
          <div className="camp-grid">
            {this.state.allcamps.map((eachCamp, index) => {
              return (
                <Card
                  exchangeEachCard={this.exchangeEachCard.bind(this)}
                  handleOnBlur={this.handleInputBtn.bind(this)}
                  inputremove={this.state.removeInput}
                  change={this.renameEachCard.bind(this)}
                  getIndex={this.settingIndex.bind(this, index)}
                  key={index}
                  src={eachCamp.picture || ''}
                  name={eachCamp.name || 'Reload'}
                  cardIndex={index}
                  cardTarget={this.state.mainIndex}
                  prev={this.handlePrevIndex.bind(this, index)}
                />
              );
            })}
          </div>
        </RightClick>
        {this.state.click && (
          <div
            style={{
              height: "52vh",
              margin: "0 20px",
              display: "grid",
              alignItems: "center",
              width: "35%",
              color: "#f00",
              backgroundColor: '#f9f9f9'
            }}
          >
          <div>
          <div>
            <video autoPlay={true} controls src={videos} alt='video' />
          </div>
            <h4 style={{padding: '10px 0'}}>
              Note:{" "}
              <span style={{ color: "#000", fontWeight: 500 }}>
                To Swap Camps! Click on 1<sup>st</sup> Camp of Choice...
                Right-Click on 2<sup>nd</sup> Camp of Choice then Click the
                Exchange Option
              </span>
            </h4>

          </div>
          </div>
        )}
        {/* <Ajax change={this.handleColorChange.bind(this)} /> */}
      </>
    );
  }
}

export default App;
