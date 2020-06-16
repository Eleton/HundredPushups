import React from "react";

const ModeButton = ({ theme, onClick }) => (
  <button
    style={{
      color: theme.background,
      backgroundColor: theme.text,
      border: `2px solid ${theme[8]}`,
      borderRadius: 50,
      outline: "none",
      fontSize: "1.5rem",
      padding: "0.25rem 1rem",
      margin: "1rem 0",
    }}
    onClick={onClick}
  >
    MODE
  </button>
);

export default ModeButton;
