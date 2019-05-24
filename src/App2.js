import React, { Component } from "react";
import Moment from "react-moment";
import Select from "react-select";
import { FaHeart } from "react-icons/fa";
import "./App.css";

var GphApiClient = require("giphy-js-sdk-core");
const client_key = GphApiClient("mmBoU4I5w6UfsLVutRV3bcVFIFWRl4uH");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      select: "",
      defaultData: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSelect(event) {
    this.setState({
      select: event
    });
  }

  handleSubmit(event) {
    console.log(this.state.input + " and " + this.state.select.value);
    event.preventDefault();
  }

  _renderGif(data) {
    return <h1>Test</h1>;
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="row">
            <div className="header-wrapper col-12">
              <form onSubmit={this.handleSubmit}>
                <input
                  value={this.state.input}
                  onChange={this.handleInput}
                  type="text"
                  placeholder="Search GIPHY"
                  name="name"
                  className="input-component"
                />
                <Select
                  className="select-component"
                  options={[
                    { value: "random", label: "Random" },
                    { value: "trending", label: "Trending" }
                  ]}
                  value={this.state.select}
                  onChange={this.handleSelect}
                  placeholder="Choose GIF category..."
                />
                <input
                  className="submit-component"
                  type="submit"
                  value="Search now!"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="content container">
          <div className="row">
            <div className="col-3">
              <div className="image-card-container">
                <img
                  src="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg"
                  alt=""
                />
                <h4>Hello world</h4>
                <p>#tag #tag</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer container">
          <div className="row">
            <div className="content-footer col-12">
              <h5>
                Developed with <FaHeart size={12} color="#ED4C67" /> by Desi
                Mandasari
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
