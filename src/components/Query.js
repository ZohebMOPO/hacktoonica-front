import React from "react";

export default class Query extends React.Component {
  state = {
    loading: true,
    image: null,
  };

  async componentDidMount() {
    const url = `https://api.trace.moe/search?url=${encodeURIComponent(
      "https://i.postimg.cc/3wtx80CP/amagami-ss.jpg"
    )}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ image: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.image) {
      return <div>didn't get a image</div>;
    }

    return (
      <div>
        <video>
          <source src={this.state.image.video} type="video/mp4" />
        </video>
        <img src={this.state.image.image} alt="" />
      </div>
    );
  }
}
