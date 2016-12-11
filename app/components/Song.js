import React from 'react';
import $ from 'jquery';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = { song: {} }
  }

  componentDidMount() {
    $.ajax({
      url: `/api/songs/${this.props.params.id}`,
      type: 'GET'
    }).done( song => {
      this.setState({ song });
    });
  }

  render() {
    let { title, artist, lyrics } = this.state.song;
    return (
      <div className="container">
        <h3>{title}</h3>
        <h5>{artist}</h5>
        <blockquote>{lyrics}</blockquote>
      </div>
    )
  }
}

export default Song;
