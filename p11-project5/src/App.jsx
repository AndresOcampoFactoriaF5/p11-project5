import "./App.css"
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import ContentCard from "./Components/ContentCard";
import ProductsH2 from "./Components/ProductsH2";
import ProductBox from "./Components/ProductBox";

function App(){
    return (
        <div className="card">
            <Header />
            <NavBar />
            <ContentCard />
            <ProductsH2 />
            <ProductBox classBox="Product1" hrefBox="" srcBox="" id="Product1" altBox="Imagen de..."/>
        </div>
    );
}

export default App;