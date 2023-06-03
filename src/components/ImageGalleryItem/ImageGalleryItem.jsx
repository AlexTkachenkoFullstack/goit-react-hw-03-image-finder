export const ImageGalleryItem = ({image, alt}) => {
    return (
        <li className="gallery-item">
            <img loading="lazy" src={image} alt={alt} width='360px'/>
        </li>
    )
}