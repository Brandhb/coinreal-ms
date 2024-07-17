"use client";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCaouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

interface Testimonial {
  id: number;
  rating: number;
  title: string;
  content: string;
  author: string;
}

const Testimonials: React.FC = () => {
  const slides: Testimonial[] = [
    {
      id: 1,
      rating: 5,
      title: "Seamless Crypto Transactions",
      content:
        "CoinRealMs has made my crypto journey incredibly smooth. Buying crypto with my credit card is a breeze, and the exchange feature is lightning fast. I'm impressed by the user-friendly interface and hassle-free transactions.",
      author: "Alice Smith",
    },
    {
      id: 2,
      rating: 4,
      title: "Efficient and Reliable Platform",
      content:
        "As someone new to the world of cryptocurrencies, I found CoinRealMs to be a lifesaver. The process of purchasing crypto with a credit card is straightforward, and the exchange platform operates efficiently. I feel confident in using CoinRealMs for all my crypto needs.",
      author: "Bob Johnson",
    },
    {
      id: 3,
      rating: 5,
      title: "User-Friendly Interface",
      content:
        "CoinRealMs has an intuitive interface that makes buying and exchanging cryptocurrencies a breeze. I appreciate the simplicity and efficiency of the platform. It's my go-to choice for all crypto transactions.",
      author: "Emily Davis",
    },
    {
      id: 4,
      rating: 5,
      title: "Quick and Secure Transactions",
      content:
        "I've had a great experience using CoinRealMs. The platform ensures quick and secure transactions, whether I'm buying crypto with my credit card or exchanging different cryptocurrencies. Highly recommended!",
      author: "Michael Brown",
    },
    {
      id: 5,
      rating: 5,
      title: "Convenient Crypto Purchases",
      content:
        "CoinRealMs offers a convenient way to purchase cryptocurrencies with a credit card. The process is simple and hassle-free, and the exchange rates are competitive. I'm impressed by the speed and reliability of the platform.",
      author: "Sophia Wilson",
    },
    {
      id: 6,
      rating: 4,
      title: "Reliable Exchange Platform",
      content:
        "I rely on CoinRealMs for all my crypto transactions, and it has never let me down. The platform is easy to use, and the exchange feature works seamlessly. I appreciate the responsive customer support team as well.",
      author: "David Clark",
    },
    {
      id: 7,
      rating: 5,
      title: "Smooth Crypto Experience",
      content:
        "CoinRealMs provides a smooth and hassle-free experience for buying and exchanging cryptocurrencies. I appreciate the simplicity of the platform and the quick processing times. It's my preferred choice for crypto transactions.",
      author: "Jennifer White",
    },
    {
      id: 8,
      rating: 4,
      title: "Excellent Service",
      content:
        "I'm impressed by the excellent service offered by CoinRealMs. The platform is user-friendly, and the customer support team is responsive and helpful. Buying crypto with a credit card has never been easier!",
      author: "Daniel Lee",
    },
    {
      id: 9,
      rating: 5,
      title: "Great Platform for Crypto Enthusiasts",
      content:
        "CoinRealMs is a great platform for crypto enthusiasts like me. The process of buying and exchanging cryptocurrencies is seamless, and the platform offers competitive rates. I highly recommend CoinRealMs to anyone interested in crypto.",
      author: "Emma Harris",
    },
    {
      id: 10,
      rating: 5,
      title: "Easy-to-Use Exchange Platform",
      content:
        "CoinRealMs has simplified the process of buying and exchanging cryptocurrencies. The platform's user-friendly interface makes it easy to navigate, and the exchange feature operates smoothly. It's a reliable choice for crypto transactions.",
      author: "Matthew Taylor",
    },
  ];

  const options: EmblaOptionsType = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="relative">
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl space-y-4">
          <h1 className="text-3xl px-4 font-bold tracking-tight text-gray-900 sm:text-3xl leading-24">
            What Our Customers Say
          </h1>
          <h3 className="text-lg mb-8 text-gray-500">
            Discover why users trust CoinRealMs for their cryptocurrency needs
          </h3>
        </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((testimonial) => (
            <div className="flex-[0_0_100%] p-4" key={testimonial.id}>
              <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-cyan-500">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-gray-700 sm:text-3xl">
                      {testimonial.title}
                    </h3>
                    <p className="mt-4 text-gray-600">{testimonial.content}</p>
                  </div>
                </div>
                <footer className="mt-8 text-sm text-gray-500">
                  &mdash; {testimonial.author}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {scrollSnaps.map((_: any, index: number) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
