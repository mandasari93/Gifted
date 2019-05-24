import React, { Component } from "react";
import Moment from "react-moment";
import "./App.css";

var GphApiClient = require("giphy-js-sdk-core");
const client_key = GphApiClient("mmBoU4I5w6UfsLVutRV3bcVFIFWRl4uH");

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="row">
            <div className="header-wrapper col-12">
              <form>
                <input
                  type="text"
                  placeholder="Search GIPHY"
                  name="name"
                  className="input-component"
                />
                <select className="select-component">
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">
                    Coconut
                  </option>
                  <option value="mango">Mango</option>
                </select>
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
              <h3>Developed by Desi Mandasari</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
