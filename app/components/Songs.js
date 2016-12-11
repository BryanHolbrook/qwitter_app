import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class Songs extends React.Component {
  constructor(props) {
    super(props);
    this.addSong = this.addSong.bind(this);
    this.state = { songs: [] }
  }

  componentDidMount() {
    $.ajax({
      url: '/api/songs',
      type: 'GET',
      dataType: 'JSON'
    }).done( songs => {
      this.setState({ songs });
    });
  }

  addSong(e) {
    e.preventDefault();
    let { title, artist, lyrics, form } = this.refs;
    $.ajax({
      url: '/api/songs',
      type: 'POST',
      data: { title: title.value, artist: artist.value, lyrics: lyrics.value }
    }).done( song => {
      form.reset();
      this.setState({ songs: [...this.state.songs, {...song}] });
    });
  }

  render() {
    let songs = this.state.songs.map( song => {
      return (
        <li
          key={song._id}
          className="collection-item"
        >
          <Link to={`/songs/${song._id}`}>
            {song.title}
          </Link>
        </li>
      )
    });

    return (
      <div className="center blue lighten-5">
        <br></br>
        <h1>Qwitter Reviews</h1>
        <h4>Write your Qwitter review below!</h4>
        <p>That company is terrible, you know it now we need to know it.</p>

        <div className="center blue lighten-5">
            <form ref="form" className="container" onSubmit={this.addSong}>
              <input className="center" ref="title" placeholder="title" />
              <input className="center" ref="artist" placeholder="company" />
              <textarea className="center" ref="lyrics" placeholder="review"></textarea>
              <button className="btn">Send Review</button>
            </form>
          </div>
        <div className="center blue lighten-5">
          <ul className="container">
            {songs}
          </ul>
        </div>
      </div>
    )
  }

}

export default Songs;
