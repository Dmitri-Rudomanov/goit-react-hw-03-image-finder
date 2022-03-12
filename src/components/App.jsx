import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar.js';
import ImageGallery from './ImageGallery/ImageGallery.js';
import pixabayAPI from '../services/pixabayApi.js';
import Button from './Button/Button.js';
import Loader from './Loader/Loader.js';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: null,
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
    this.setState({ isLoading: true });
    pixabayAPI
      .fetchGallery(this.state.query, this.state.page)
      .then(({ hits }) =>
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          isLoading: false,
        }))
      );
  };

  render() {
    const showMoreCheck =
      this.state.images.length !== 0 && !this.state.isLoading;

    return (
      <div>
        <Searchbar onSubmit={this.queryChange} />
        <ImageGallery Images={this.state.images} />
        {this.state.isLoading && <Loader />}
        {showMoreCheck && <Button onClick={this.onBtnClick} />}
      </div>
    );
  }
}

export default App;
