import React, { Component } from "react";
import "./App.css";

var GphApiClient = require("giphy-js-sdk-core");
const client_key = GphApiClient("mmBoU4I5w6UfsLVutRV3bcVFIFWRl4uH");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  searchImage() {
    let some_data = this.state.data;
    client_key
      .search("gifs", { q: "cats" })
      .then(response => {
        response.data.forEach(gifObject => {
          this.setState({
            data: some_data.push(gifObject)
          });
          /* return (
            <div className="col-2">
              <img src="" alt="" />
            </div>
          ); */
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    this.searchImage();
    console.log(this.state.data);
    return (
      <div>
        <h2>Hello World</h2>
        <div className="imageContainer row" />
      </div>
    );
  }
}

export default App;
