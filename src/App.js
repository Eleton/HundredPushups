import React from "react";
import data from "./data";
import { scaleLinear } from "d3-scale";
import useSolarized from "./useSolarized";
import "./App.css";

const dayToBars = (day, scaleY, theme) => {
  return (
    <>
      {day.easy
        .reduce((prev, curr) => [...prev, prev[prev.length - 1] + curr], [0])
        .reverse()
        .map((v, i) => (
          <rect
            width="2"
            y={scaleY(v)}
            x="0"
            height={90 - scaleY(v)}
            fill={theme[i]}
            strokeWidth="0.5"
            stroke={theme.text}
          />
        ))}
      {day.medium
        .reduce((prev, curr) => [...prev, prev[prev.length - 1] + curr], [0])
        .reverse()
        .map((v, i) => (
          <rect
            width="2"
            y={scaleY(v)}
            x="2"
            height={90 - scaleY(v)}
            fill={theme[i]}
            strokeWidth="0.5"
            stroke={theme.text}
          />
        ))}
      {day.hard
        .reduce((prev, curr) => [...prev, prev[prev.length - 1] + curr], [0])
        .reverse()
        .map((v, i) => (
          <rect
            width="2"
            y={scaleY(v)}
            x="4"
            height={90 - scaleY(v)}
            fill={theme[i]}
            strokeWidth="0.5"
            stroke={theme.text}
          />
        ))}
    </>
  );
};

const weekToDays = (week, scaleY, theme) => {
  return (
    <>
      {week.days.map((day, i) => (
        <g style={{ transform: `translateX(${i * 8}px)` }} className="week">
          {dayToBars(day, scaleY, theme)}
          <text
            style={{ fontSize: 2 }}
            x="3"
            y={scaleY(-10)}
            textAnchor="middle"
          >
            Day {i + 1}
          </text>
        </g>
      ))}
      <text style={{ fontSize: 4 }} x="11" y={scaleY(-24)} textAnchor="middle">
        Week {week.index}
      </text>
    </>
  );
};

function App() {
  const [theme, lightMode, setLightMode] = useSolarized();
  const scaleY = scaleLinear().domain([0, 260]).range([90, 10]);
  console.log(data);
  console.log(scaleY(data[0].days[0].easy[0]));
  console.log(data[0].days[0].easy);
  return (
    <div
      className="App"
      style={{
        color: theme.text,
        backgroundColor: theme.background,
        transition: "background-color 0.5s, color 0.25s",
      }}
    >
      <button onClick={() => setLightMode(!lightMode)}>Switch theme</button>
      <svg width="800" height="400" viewBox="0 0 200 100" className="graph">
        {[0, 50, 100, 150, 200, 250].map((n) => (
          <g transform={`translate(0 ${scaleY(n)})`}>
            <text
              style={{ fontSize: 4, textAnchor: "end" }}
              x="9"
              y="1"
              fill={theme.text}
            >
              {n}
            </text>
            <line
              x1="10"
              x2="190"
              y1={0}
              y2={0}
              stroke={theme.text}
              strokeWidth="0.25"
              style={{ opacity: 0.5 }}
            />
          </g>
        ))}
        <g style={{ transform: "translateX(14px)" }}>
          {data.map((week) => (
            <g style={{ transform: `translateX(${(week.index - 1) * 30}px)` }}>
              {weekToDays(week, scaleY, theme)}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

export default App;
