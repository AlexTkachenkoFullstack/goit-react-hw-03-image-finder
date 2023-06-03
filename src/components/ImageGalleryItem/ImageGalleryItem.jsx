import css from './ImageGalleryItem.module.css'
export const ImageGalleryItem = ({ image, alt, largeImage, handleClick }) => {
  
    return (
        <li className={css.imageGalleryItem} onClick={()=>handleClick(largeImage)}>
            <img loading="lazy" className={ css.imageGalleryItemImage} src={image} alt={alt} width='360px'/>
        </li>
    )
}