import React from "react";
import axios from "axios";
class GettingImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/images/toonified")
      .then((res) => {
        this.setState({ photo: res.data });
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  render() {
    return (
      <div className="App">
        <p>Your lovely toonified image</p>
        <img src={this.state.photo} alt="toonified" />
      </div>
    );
  }
}

export default GettingImage;
