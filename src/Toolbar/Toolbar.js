import React, { useState } from "react";
import "./Toolbar.css";

const Toolbar = () => {
    // State to manage the visibility of categories and top 5 list
    const [showCategories, setShowCategories] = useState(false);
    const [showTop5List, setShowTop5List] = useState(false);

    // Click handler for the "Categories" button
    const handleCategoriesClick = () => {
        setShowCategories(true);
        setShowTop5List(false);
        // You can add logic here to open categories or perform other actions
    };

    // Click handler for the "Top 5 List" button
    const handleTop5ListClick = () => {
        setShowCategories(false);
        setShowTop5List(true);
        // You can add logic here to open the top 5 list or perform other actions
    };

    return (
        <div className="toolbar">
            <button className="toolbar-button" onClick={handleCategoriesClick}>

            </button>
            <button className="toolbar-button" onClick={handleTop5ListClick}>

            </button>
        </div>
    );
};

export default Toolbar;