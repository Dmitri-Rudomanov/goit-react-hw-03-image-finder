import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar.js';
import ImageGallery from './ImageGallery/ImageGallery.js';
import pixabayAPI from '../services/pixabayApi.js';
import Button from './Button/Button.js';
import Loader from './Loader/Loader.js';
import Modal from './Modal/Modal.js';
import s from './App.module.css';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: null,
    showModal: null,
    largeImg: '',
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

  handleGalleryImg = fullImgUrl => {
    this.setState({
      largeImg: fullImgUrl,
      showModal: true,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

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
      <div className={s.App}>
        {this.state.showModal && (
          <Modal largeImage={this.state.largeImg} onClose={this.toggleModal} />
        )}
        <Searchbar onSubmit={this.queryChange} />
        <ImageGallery
          Images={this.state.images}
          onImgClick={this.handleGalleryImg}
        />
        {this.state.isLoading && <Loader />}
        {showMoreCheck && <Button onClick={this.onBtnClick} />}
      </div>
    );
  }
}

export default App;
