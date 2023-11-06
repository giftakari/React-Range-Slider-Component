import React, { useEffect, useState } from "react";

export function ProductsFromApi() {
    const [priceRange, setPriceRange] = useState(10);
    const [filteredItems, setFilteredItems] = useState([]);
    const [allItems, setAllItems] = useState([]);

    function fetchProducts() {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setAllItems(data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchProducts();
    }, []); // Fetch products once on component mount, no dependencies

    // Filter and sort items based on price range
    useEffect(() => {
        const filtered = allItems.filter((item) => item.price <= priceRange);
        const sortedItems = [...filtered].sort((a, b) => a.price - b.price);
        setFilteredItems(sortedItems);
    }, [priceRange]);

    const handlePriceRangeChange = (event) => {
        const newValue = parseInt(event.target.value);
        setPriceRange(newValue);
    };

    return (
        <div>
            <h2>Fetch products from an external API</h2>
            <label htmlFor="prices">Filter products by prices: {priceRange ? priceRange : null}</label>
            <br />
            <input
                id="prices"
                type="range"
                min="0"
                max="100"
                step="1"
                value={priceRange}
                onChange={handlePriceRangeChange}
            />
            <label htmlFor="prices">{priceRange}</label>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                </tr>
                </thead>
                <tbody>
                {filteredItems.map((item) => (
                    <tr key={item.id}>
                        <td scope="row">{item.title.slice(0, 40)}</td>
                        <td scope="row">{item.price}</td>
                        <td scope="row">{item.description.slice(0, 30)}</td>
                        <td scope="row">
                            <img
                                src={item.image}
                                alt=""
                                className="img-fluid"
                                style={{ maxWidth: "4rem", height: "4rem" }}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
