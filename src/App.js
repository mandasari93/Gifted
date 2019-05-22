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

  componentWillMount() {
    client_key
      .search("gifs", { q: "cats" })
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="container">
        <h2>Hello World</h2>
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
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
