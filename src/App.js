import React, { useReducer } from "react";
import { scaleLinear } from "d3-scale";
import useResizeObserver from "use-resize-observer";
import useSolarized from "./useSolarized";
import ModeButton from "./ModeButton";
import Toggle from "./Toggle";
import "./App.css";
import data from "./data";

const dayToBars = (day, scaleY, theme, options) => {
  const count = Object.values(options).reduce((prev, curr) => prev + curr, 0);
  const size = 6 / count;
  if (count === 0) {
    return <></>;
  }
  const data = [];
  if (options.easy) {
    data.push(day.easy);
  }
  if (options.medium) {
    data.push(day.medium);
  }
  if (options.hard) {
    data.push(day.hard);
  }
  return (
    <>
      {data.map((d, i1) => {
        return d
          .reduce((prev, curr) => [...prev, prev[prev.length - 1] + curr], [0])
          .reverse()
          .map((v, i2) => (
            <rect
              key={v}
              width={size}
              y={scaleY(v)}
              x={size * i1}
              height={90 - scaleY(v)}
              fill={theme[i2]}
              strokeWidth="0.5"
              stroke={theme.text}
            />
          ));
      })}
    </>
  );
};

const weekToDays = (week, scaleY, theme, options) => {
  return (
    <>
      {week.days.map((day, i) => (
        <g
          key={JSON.stringify(day)}
          style={{ transform: `translateX(${i * 8}px)` }}
          className="week"
        >
          {dayToBars(day, scaleY, theme, options)}
          <text
            style={{ fontSize: 2 }}
            x="3"
            y={scaleY(-10)}
            textAnchor="middle"
            fill={theme.text}
          >
            Day {i + 1}
          </text>
        </g>
      ))}
      <text
        style={{ fontSize: 4 }}
        x="11"
        y={scaleY(-24)}
        textAnchor="middle"
        fill={theme.text}
      >
        Week {week.index}
      </text>
    </>
  );
};

const optionsReducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "easy": {
      return { ...state, easy: !state.easy };
    }
    case "medium": {
      return { ...state, medium: !state.medium };
    }
    case "hard": {
      return { ...state, hard: !state.hard };
    }
    default:
      return state;
  }
};

function App() {
  const [options, dispatch] = useReducer(optionsReducer, {
    easy: true,
    medium: true,
    hard: true,
  });
  const [theme, lightMode, setLightMode] = useSolarized();
  const scaleY = scaleLinear().domain([0, 260]).range([90, 10]);
  const { ref, width } = useResizeObserver();
  const canvasWidth = width < 840 ? width - 40 : 800;
  const canvasHeight = ~~(canvasWidth / 2);

  return (
    <div
      ref={ref}
      className="App"
      style={{
        color: theme.text,
        backgroundColor: theme.background,
        transition: "background-color 0.5s, color 0.25s",
      }}
    >
      <h2>
        Visualization of the{" "}
        <a
          style={{ color: theme[8], transition: "color: 0.5s" }}
          href="https://hundredpushups.com/"
        >
          One Hundred Pushups
        </a>
        -program
      </h2>
      <svg
        width={canvasWidth}
        height={canvasHeight}
        viewBox="0 0 200 100"
        className="graph"
      >
        {[0, 50, 100, 150, 200, 250].map((n) => (
          <g key={n} transform={`translate(0 ${scaleY(n)})`}>
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
            <g
              key={week.index}
              style={{ transform: `translateX(${(week.index - 1) * 30}px)` }}
            >
              {weekToDays(week, scaleY, theme, options)}
            </g>
          ))}
        </g>
      </svg>
      <div>
        <br />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: 6,
            rowGap: 2,
          }}
        >
          <span style={{ justifySelf: "end" }}>Easy</span>
          <Toggle
            theme={theme}
            on={options.easy}
            onClick={() => dispatch({ type: "easy" })}
          />
          <span style={{ justifySelf: "end" }}>Medium</span>
          <Toggle
            theme={theme}
            on={options.medium}
            onClick={() => dispatch({ type: "medium" })}
          />
          <span style={{ justifySelf: "end" }}>Hard</span>
          <Toggle
            theme={theme}
            on={options.hard}
            onClick={() => dispatch({ type: "hard" })}
          />
        </div>
      </div>
      <ModeButton theme={theme} onClick={() => setLightMode(!lightMode)} />
    </div>
  );
}

export default App;
