import "./banner.css";
import SearchBar from "./searchBar";

const Banner = () => {
    return (
        <div className="banner">
            <div className="image">
                <h1>Exercises <span className="redWord">Search</span> Engine</h1>
                <SearchBar />
            </div>
        </div>
    );
}

export default Banner;
