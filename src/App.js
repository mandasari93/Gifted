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
      inputValue: "",
      input: "",
      name: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    client_key
      .search("gifs", { q: "jokowi" })
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleInput(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ inputValue: this.state.input });
  };

  render() {
    console.log(this.state.input);
    return (
      <div className="container">
        <div className="searchInputContainer row">
          <input
            name="name"
            id="name"
            value={this.input}
            onChange={this.handleInput}
            onSubmit={this.handleSubmit}
            className="content_input"
            type="text"
            placeholder="Search.."
          />
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
