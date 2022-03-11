import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.js';
import s from './ImageGallery.module.css';

const ImageGallery = ({ Images }) => {
  return (
    <ul className={s.ImageGallery}>
      {Images &&
        Images.map(img => (
          <ImageGalleryItem key={img.id} webformatURL={img.webformatURL} />
        ))}
    </ul>
  );
};

export default ImageGallery;
