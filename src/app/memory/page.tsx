"use client";

import { useEffect, useState, useCallback } from "react";
import { Square } from "../../components/Square";
import { cards } from "../../data/cards";
import { shuffle } from "../../functions/functions";
import { SquareMemory } from "../../interfaces/interfaces";

export default function Page() {
  const [history, setHistory] = useState<SquareMemory[]>(shuffle([]));
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [currentSelected, setCurrentSelected] = useState<number | null>(null);

  useEffect(() => {
    setHistory(shuffle([...cards, ...cards]));
  }, []);

  const handleIndex = useCallback(
    (index: number) => {
      if (currentIndex != null) {
        if (
          history[index].id === history[currentIndex].id &&
          index !== currentIndex
        ) {
          setHistory((prevHistory) =>
            foundMemory(prevHistory, index, currentIndex)
          );
        }
        setCurrentSelected(null);
        setCurrentIndex(null);
      } else {
        setCurrentIndex(index);
        setCurrentSelected(index);
      }
    },
    [currentIndex, history]
  );

  return (
    <div className="bg-slate-800 flex flex-col items-center justify-center w-screen h-screen">
      <div className="grid grid-cols-3 grid-rows-2 justify-center items-center gap-12">
        {history.map(
          (card, index) =>
            !card.selected && (
              <Square
                key={index}
                index={index}
                currentSelected={currentSelected}
                square={card}
                handleIndex={() => handleIndex(index)}
              />
            )
        )}
      </div>
    </div>
  );
}

const foundMemory = (
  memories: SquareMemory[],
  index: number,
  pair: number
): SquareMemory[] => {
  return memories.map((memory, i) => ({
    ...memory,
    selected: i === index || i === pair ? true : memory.selected,
  }));
};
