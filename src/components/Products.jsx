import React, { useEffect, useState } from "react";

export function Products() {
    const [priceRange, setPriceRange] = useState(600);
    const [filteredItems, setFilteredItems] = useState([]);

    // Replace this with your actual item list
    const allItems = [
        { id: 1, phone: "iPhone 13", price: 799, description: "The latest iPhone model" },
        { id: 2, phone: "Samsung Galaxy S21", price: 699, description: "Flagship Android smartphone" },
        { id: 3, phone: "Google Pixel 6", price: 699, description: "Google's smartphone with a great camera" },
        { id: 4, phone: "OnePlus 9 Pro", price: 899, description: "High-performance OnePlus device" },
        { id: 5, phone: "Xiaomi Mi 11", price: 599, description: "Budget-friendly Xiaomi phone" },
        { id: 6, phone: "Sony Xperia 5 III", price: 799, description: "Sony's flagship Xperia" },
        { id: 7, phone: "LG V60 ThinQ", price: 599, description: "Former LG flagship phone" },
        { id: 8, phone: "Motorola Moto G Power", price: 249, description: "Affordable Motorola device" },
        { id: 9, phone: "Nokia 8.3", price: 399, description: "Nokia's 5G-capable phone" },
        { id: 10, phone: "Asus ROG Phone 6", price: 999, description: "Gaming-oriented Asus device" },
        // Add more phones here
    ];

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

    // Initial filtering and sorting when the component mounts
    useEffect(() => {
        setFilteredItems(allItems.filter((item) => item.price <= priceRange).sort((a, b) => a.price - b.price));
    }, []);

    return (
        <div>
            <h2>Fetch products from local data</h2>
            <label htmlFor="prices">Filter products by prices: {priceRange ? priceRange : null}</label>
            <br />
            <input
                id="prices"
                type="range"
                min="0"
                max="1000"
                step="20"
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
                </tr>
                </thead>
                <tbody>
                {filteredItems.map((item) => (
                    <tr key={item.id}>
                        <td scope="row">{item.phone}</td>
                        <td scope="row">{item.price}</td>
                        <td scope="row">{item.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
