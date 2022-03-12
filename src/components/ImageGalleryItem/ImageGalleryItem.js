import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeformatURL, onImgClick }) => {
  return (
    <li
      className={s.ImageGalleryItem}
      onClick={() => onImgClick(largeformatURL)}
    >
      <img className={s.ImageGalleryItemImg} src={webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
