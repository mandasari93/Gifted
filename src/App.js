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
      data: []
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
    console.log(
      this.state.input === null
        ? "null"
        : this.state.input + " and " + this.state.select.value
    );
    if (this.state.select.value === "random") {
      console.log("You choose a random data.");
      client_key
        .trending("gifs", { q: this.state.input })
        .then(response => {
          this.setState({
            data: response.data
          });
          console.log(this.state.data);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (this.state.select.value === "trending") {
      console.log("You choose a trending data.");
      client_key
        .trending("gifs", { q: this.state.input })
        .then(response => {
          this.setState({
            data: response.data
          });
          console.log(this.state.data);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log("You dont choose anything.");
      client_key
        .search("gifs", { q: this.state.input })
        .then(response => {
          this.setState({
            data: response.data
          });
          console.log(this.state.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    event.preventDefault();
  }

  render() {
    let content;

    if (this.state.data.length === 0) {
      content = (
        <div className="empty-content col-12">
          <h2>No Data</h2>
        </div>
      );
    } else {
      content = this.state.data.map((item, index) => {
        return (
          <div className="col-3" key={index}>
            <div className="image-card-container">
              <img src={item.images.original.url} alt={item.title} />
              <h4>{!item.title ? "No Title" : item.title}</h4>
              <p>
                <Moment format="LLLL">{item.import_datetime}</Moment>
              </p>
            </div>
          </div>
        );
      });
    }

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
          <div className="row">{content}</div>
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
