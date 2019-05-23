import React, { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";
import "./App.css";

var GphApiClient = require("giphy-js-sdk-core");
const client_key = GphApiClient("mmBoU4I5w6UfsLVutRV3bcVFIFWRl4uH");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      input: "",
      option: "Trending"
    };
    this.handleInput = this.handleInput.bind(this);
    this.getGif = this.getGif.bind(this);
    this.getTrendingGif = this.getTrendingGif.bind(this);
    this.getRandomGif = this.getRandomGif.bind(this);
  }

  getGif(event) {
    if (event.key === "Enter") {
      client_key
        .search("gifs", { q: event.target.value })
        .then(response => {
          this.setState({
            data: response.data
          });
        })
        .catch(err => {
          console.log(err);
        });
      this.setState({
        input: ""
      });
    }
  }

  getTrendingGif() {
    this.setState({
      option: "Trending"
    });
  }

  getRandomGif() {
    this.setState({
      option: "Random"
    });
  }

  handleInput(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    console.log(this.state.input);
    console.log(this.state.option);
    return (
      <div className="container">
        <div className="searchInputContainer row">
          <input
            value={this.state.input}
            onChange={this.handleInput}
            onKeyDown={this.getGif}
            className="content_input"
            type="text"
            placeholder="Search.."
          />
        </div>

        <div>
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="small"
                  checked={this.state.option === "Trending"}
                  onChange={this.getTrendingGif}
                />
                Trending
              </label>
            </li>

            <li>
              <label>
                <input
                  type="radio"
                  value="medium"
                  checked={this.state.option === "Random"}
                  onChange={this.getRandomGif}
                />
                Random
              </label>
            </li>
          </ul>
        </div>

        <div className="imageContainer row">
          {this.state.data.map((item, index) => {
            return (
              <div className="imgCard col-3" key={index}>
                <div
                  className="content_image"
                  style={{
                    backgroundImage: `url(${item.images.original.url})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  }}
                />
                <div>
                  <h3 className="content_title">
                    {!item.title ? "No Title" : item.title}
                  </h3>
                  <Moment>{item.import_datetime}</Moment>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
