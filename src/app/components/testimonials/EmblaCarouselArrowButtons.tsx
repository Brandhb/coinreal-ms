import { useCallback, useEffect, useState } from "react";

interface PrevButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const PrevButton: React.FC<PrevButtonProps> = ({ onClick, disabled }) => (
  <button
    className={`rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white ${
      disabled ? "opacity-50 cursor-not-allowed" : ""
    }`}
    onClick={onClick}
    disabled={disabled}
    aria-label="Previous slide"
  >
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

interface NextButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const NextButton: React.FC<NextButtonProps> = ({ onClick, disabled }) => (
  <button
    className={`rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white ${
      disabled ? "opacity-50 cursor-not-allowed" : ""
    }`}
    onClick={onClick}
    disabled={disabled}
    aria-label="Next slide"
  >
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

export const usePrevNextButtons = (emblaApi: any) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick };
};
