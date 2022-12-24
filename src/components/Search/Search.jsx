import {  useEffect, useState } from "react";
import History from "./History";
import "./Search.css"

function Search() {

    const[q, setQ] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        History.push("/search?q=" + q);
    }


    return (
        <div className="item" id="search">
            <div className="search-menu">
                <form action="/search" onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        placeholder="Search wallpapers" 
                        value={q}
                        onChange={e => setQ(e.target.value)}
                    />
                </form>
                <i className="fa fa-search"></i>
            </div>
        </div>
    );
}

export default Search;