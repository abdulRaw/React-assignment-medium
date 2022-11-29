import { useEffect, useMemo, useState } from "react";
import { useShuffle } from "./hooks";
import "./styles.css";

const colors = ["red", "blue", "black", "green", "yellow", "pink"];
const totalColors = colors.length;
const getRandonIndex = () => {
  return Math.floor(Math.random() * totalColors);
};

export const Shuffle = () => {
  const { reorderedColors, onShuffle } = useShuffle();
  return (
    <>
      <div className="shuffle-c">
        {reorderedColors.map((c, idx) => {
          return (
            <div
              className="bx"
              key={c}
              style={{
                background: c
              }}
            ></div>
          );
        })}

        {[{ name: "Shuffle", onClick: onShuffle }].map(({ name, onClick }) => (
          <button key={name} onClick={onClick}>
            {name}
          </button>
        ))}
      </div>
      <Reverse pColors={reorderedColors} />
    </>
  );
};

export const Reverse = ({ pColors }) => {
  const [reversableColors, setReversableColors] = useState(pColors);
  useEffect(() => {
    setReversableColors(pColors);
  }, [pColors]);
  const handleReverse = () => {
    setReversableColors((prev) => [...prev].reverse());
  };
  return (
    <>
      <div className="shuffle-c">
        {reversableColors.map((c) => (
          <div
            className="bx"
            key={c}
            style={{
              background: c
            }}
          ></div>
        ))}
        {[{ name: "Reverse", onClick: handleReverse }].map(
          ({ name, onClick }) => (
            <button key={name} onClick={onClick}>
              {name}
            </button>
          )
        )}
      </div>
    </>
  );
};
export default function App() {
  return (
    <div>
      <Shuffle />
    </div>
  );
}
