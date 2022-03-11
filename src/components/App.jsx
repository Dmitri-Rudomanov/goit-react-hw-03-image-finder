import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar.js';
import ImageGallery from './ImageGallery/ImageGallery.js';
import pixabayAPI from '../services/pixabayApi.js';
import Button from './Button/Button.js';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  onBtnClick = () => {
    this.setState({ page: this.state.page + 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.onFetchImg();
    }
  }

  queryChange = query => {
    this.setState({ query });
    this.setState({ page: 1, images: [] });
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
        {this.state.images.length !== 0 && <Button onClick={this.onBtnClick} />}
      </div>
    );
  }
}

export default App;
