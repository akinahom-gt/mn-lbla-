import React from "react";

const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    return (
        <form onSubmit={handleSubmit} >
            <input 
                
                value={query}
                className="right-0 top-2 px-[90px] absolute"
                placeholder="Search Recipe"
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
            />   
            <input
                
                disabled={isLoading || !query}
                type="submit"
                className="right-0 px-10 top-2 absolute"
                value="Search"
            />
        </form>
    )
};

export default SearchBar;