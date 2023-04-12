import { createSearchParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate= useNavigate();

    const handleSearch = () => {
        navigate({
            pathname: "/products",
            search:createSearchParams({
                search: searchTerm
            }) .toString()
        });
        setSearchTerm(""); 
    };

    const handleInput = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };
    return (
        <>
            <form>
                <select className="select-active">
                    <option>All Categories</option>
                    <option>Women's</option>
                    <option>Men's</option>
                    <option>Cellphones</option>
                    <option>Computer</option>
                    <option>Electronics</option>
                    <option> Accessories</option>
                    <option>Home & Garden</option>
                    <option>Luggage</option>
                    <option>Shoes</option>
                    <option>Mother & Kids</option>
                </select>
                <input
                    value={searchTerm}
                    onKeyDown={handleInput}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="Search"
                />
            </form>
        </>
    );
};

export default Search;
