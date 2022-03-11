import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar.js';
import ImageGallery from './ImageGallery/ImageGallery.js';
import pixabayAPI from '../services/pixabayApi.js';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ page: 1, images: [] });
      this.onFetchImg();
    }
  }

  queryChange = query => {
    this.setState({ query });
  };

  onFetchImg = () => {
    pixabayAPI
      .fetchGallery(this.state.query, this.state.page)
      .then(({ hits }) =>
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
        }))
      );
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.queryChange} />
        <ImageGallery Images={this.state.images} />
      </div>
    );
  }
}

export default App;
