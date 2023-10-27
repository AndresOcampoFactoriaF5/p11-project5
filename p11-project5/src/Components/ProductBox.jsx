import "./ProductBox.css";

const ProductBox = ({classBox, hrefBox, srcBox, id, altBox}) => {
    return (
    <div class="divBox" className={classBox} href={hrefBox}>
        <img
        src={srcBox}
        id={id}
        alt={altBox}
        />
    </div> 
    );
}

export default ProductBox;