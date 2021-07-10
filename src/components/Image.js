import React, { Component } from "react";
import "./Image.css";
import axios from "axios";

class Image extends Component {
  state = {
    title: "",
    content: "",
    image: null,
  };

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.id]: e.target.value,
  //   });
  // };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append("image", this.state.image, this.state.image.name);
    // form_data.append("title", this.state.title);
    // form_data.append("content", this.state.content);
    let url = "https://abhis-319407.el.r.appspot.com/api/posts";
    axios
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        document.getElementById("org").src = res.data["org_img"];
        document.getElementById("toon").src = res.data["toon_img"];
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="app">
        <h1> Upload your image here and find your anime twin!</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
              required
            />
          </p>
          <input type="submit" className="in1" />
        </form>
        <div style={{ display: "block" }}>
          <img
            id="org"
            alt="org"
            src=""
            style={{ height: "400px", width: "400px", objectFit: "cover" }}
          />
          <img
            id="toon"
            alt="toon"
            src=""
            style={{ height: "400px", width: "400px", objectFit: "cover" }}
          />
        </div>
      </div>
    );
  }
}

export default Image;
