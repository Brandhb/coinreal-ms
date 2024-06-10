import { FC, useCallback, useEffect, useState } from "react";

interface DotButtonProps {
  selected: boolean;
  onClick: () => void;
}

export const DotButton: FC<DotButtonProps> = ({ selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-3 h-3 bg-gray-400 rounded-full ${
      selected ? "bg-black" : ""
    }`}
    aria-label="Select slide"
  />
);

export const useDotButton = (emblaApi: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const onDotButtonClick = (index: number) => emblaApi.scrollTo(index);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
};
