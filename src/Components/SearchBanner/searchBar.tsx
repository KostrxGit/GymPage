import { FaSearch } from 'react-icons/fa';

const searchIcon = <FaSearch size="45px" fill="#FA0F1B" />;
// create search bar on type
const SearchBar = () => {
    return (
        <div className="search">
            {/* <div className="searchIcon">
                <FaSearch size="45px" fill="#FA0F1B" />
            </div> */}
            <div className="searchBar">
                <input type="text" placeholder="Search for exercises" />
            </div>
        </div>
    );
}

export default SearchBar;
