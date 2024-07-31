"use client";
import Image from "next/image";
import { SquareMemory } from "../interfaces/interfaces";

type Props = {
  square: SquareMemory;
  handleIndex: (index: number) => void;
  index: number;
  currentSelected: number | null;
};

export const Square = ({
  square,
  handleIndex,
  index,
  currentSelected,
}: Props) => {
  const isCurrentSelected = currentSelected === index;
  const isSelected = square.selected;

  return (
    <div
      className={`p-4 rounded-lg shadow-lg bg-zinc-100 w-full h-full flex justify-center transition-opacity duration-300 ${
        isCurrentSelected ? "opacity-50" : isSelected && "opacity-25"
      }`}
      onClick={() => handleIndex(index)}
    >
      <Image
        src={square.img}
        height={100}
        width={100}
        alt={square.img}
        className="object-cover rounded-lg"
      />
    </div>
  );
};
