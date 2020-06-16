import React from "react";

const Toggle = ({ theme, on, onClick }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: `2px solid ${theme.text}`,
      width: 20,
      height: 20,
      borderRadius: "100%",
    }}
    onClick={onClick}
  >
    {
      <div
        style={{
          width: on ? 16 : 0,
          height: on ? 16 : 0,
          borderRadius: "100%",
          backgroundColor: theme.text,
          transition: "height 0.5s, width 0.5s",
        }}
      />
    }
  </div>
);

export default Toggle;
