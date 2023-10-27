import "./App.css"
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import ContentCard from "./Components/ContentCard";
import ProductsH2 from "./Components/ProductsH2";
import RecommendedProducts from "./Components/ImgVector";

function App(){
    return (
        <div className="card">
            <div className="headerNavbarAbsolute">
                <Header />
                <NavBar />
            </div>
            <ContentCard />
            <div className="productsBoxApp">
                <ProductsH2 />
                <RecommendedProducts />
            </div>
        </div>
    );
}

export default App;