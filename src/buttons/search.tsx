import React, { useContext, useEffect, useState, ChangeEvent } from "react";
import { MapContext } from "../map/mapContext";
import SearchButton from "./SearchButton";
import "../css/iconStyles.css";

type Feature = {
  type: string;
  properties: {
    name: string;
    [key: string]: any; // Additional properties
  };
  geometry: {
    type: string;
    coordinates: [number, number];
  };
};

const SearchEngine: React.FC = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Feature[]>([]);

  // State to hold data from all JSON files
  const [allData, setAllData] = useState<Feature[]>([]);

  const { map } = useContext(MapContext);

  // Function to handle fetching data from multiple JSON files
  const fetchData = async (filePaths: string[]) => {
    const promises = filePaths.map(async (filePath) => {
      const response = await fetch(filePath);
      const data = await response.json();
      return data.features as Feature[]; // Assuming features holds data in each file
    });

    const allFeatures = await Promise.all(promises);
    setAllData(allFeatures.flat()); // Combine features from all files
  };

  useEffect(() => {
    // Provide an array of file paths to the fetchData function
    fetchData([
      "/WhereToOslo/json/cafe.geojson",
      "restaurants.geojson",
      "json/drinks.geojson",
      "json/store.geojson",
      "json/activity.geojson",
    ]);
  }, []);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);

    if (e.target.value) {
      setSearchResults(
        allData.filter((feature) =>
          feature.properties.name
            .toLowerCase()
            .includes(e.target.value.toLowerCase()),
        ),
      );
    } else {
      setSearchResults([]);
    }
  };
  const handleSelect = (feature: Feature) => {
    setSearchQuery(feature.properties.name);
    setShowSearch(false);
    map.getView().animate({
      center: feature.geometry.coordinates,
      zoom: 18,
    });
    setSearchQuery("");
    setShowSearch(false);
    setSearchResults([]);
  };
  return (
    <div className="position-relative">
      <div className="button-container">
        <SearchButton onClick={() => handleSearchToggle()} />
      </div>
      <div className={`search-container ${showSearch ? "expanded" : ""}`}>
        {showSearch && (
          <>
            <div className="search-input-container">
              <input
                type="text"
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <div className="list-group">
              {searchResults.map((feature, index) => (
                <div
                  key={index}
                  className="list-group-item"
                  onClick={() => handleSelect(feature)}
                  style={{ cursor: "pointer" }}
                >
                  {feature.properties.name}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchEngine;
