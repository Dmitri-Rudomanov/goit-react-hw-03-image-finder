import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img className={s.ImageGalleryItemImg} src={webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
