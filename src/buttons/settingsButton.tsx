import IconButton from "./iconsButton";
import React, { useState } from "react";
import "../css/iconStyles.css";

const SettingsButton = () => {
  const [isSettingsVisible, setSettingsVisible] = useState(false);

  const toggleSettings = () => {
    setSettingsVisible(!isSettingsVisible);
  };

  const handleClick = () => {
    toggleSettings();
  };

  return (
    <div className="settings-button-container">
      <IconButton className="settings-button" onClick={handleClick}>
        <img
          src="images/settingsButton.svg"
          alt="Settings Icon"
          className="icon"
        />
      </IconButton>
      <div
        className={`settings-container ${isSettingsVisible ? "expanded" : ""}`}
      >
        {isSettingsVisible && (
          <div className="settings-content">
            <button className="close-button" onClick={toggleSettings}>
              x
            </button>
            <div className="settings-row">
              <h6 className="setting-text">Light/Dark mode</h6>
            </div>
            <div className="settings-row">
              <h6 className="setting-text">High contrast mode</h6>
            </div>
            <div className="settings-row">
              <h6 className="setting-text">Language selection</h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsButton;
