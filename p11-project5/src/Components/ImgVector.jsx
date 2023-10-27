import "./ImgVector.css"
import json from "../data.json"

function RecommendedProducts() {
    return (
        <div className="divImgVector">
            {
                json.products.map(product =>
                    <div className="divProductsBox" key={product.id}>
                        <img class="imgVector" src={product.imagenOne} alt="Aquí va tu imgegen" />
                        <p className="productBrand">{product.brand}</p>
                        <p className="product">{product.nameProduct}</p>
                        <p>{product.price}</p>
                    </div>
                )
            }
        </div>
    );
}

export default RecommendedProducts;