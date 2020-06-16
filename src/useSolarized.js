import { useState, useEffect } from "react";

const c = {
  light: ["#fdf6e3", "#eee8d5", "#93a1a1", "#839496"],
  dark: ["#002b36", "#073642", "#586e75", "#657b83"],
  yellow: "#b58900",
  orange: "#cb4b16",
  red: "#dc322f",
  magenta: "#d33682",
  violet: "#6c71c4",
  blue: "#268bd2",
  cyan: "#2aa198",
  green: "#859900",
};

const useSolarized = () => {
  const [lightMode, setLightMode] = useState(true);
  const [colors, setColors] = useState({});
  useEffect(() => {
    const cols = {
      0: c.yellow,
      1: c.orange,
      2: c.red,
      3: c.magenta,
      4: c.violet,
      5: c.blue,
      6: c.cyan,
      7: c.green,
    };
    if (lightMode) {
      cols.background = c.light[0];
      cols.text = c.dark[1];
      cols["8"] = c.dark[0];
    } else {
      cols.background = c.dark[0];
      cols.text = c.light[1];
      cols["8"] = c.light[0];
    }
    setColors(cols);
  }, [lightMode]);
  return [colors, lightMode, setLightMode];
};

export default useSolarized;
