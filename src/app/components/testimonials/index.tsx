import { FC } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Alice Johnson",
    quote: "Coin-realms made trading cryptocurrencies so easy and secure. The platform is user-friendly and the support team is always there to help.",
    rating: 5,
  },
  {
    name: "Bob Smith",
    quote: "I love the seamless transactions and the variety of cryptocurrencies available on Coin-realms. Highly recommend!",
    rating: 4,
  },
  {
    name: "Carol Davis",
    quote: "Joining Coin-realms was one of the best decisions I've made. The platform is intuitive and the trading experience is top-notch.",
    rating: 5,
  },
];

const Testimonials: FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="py-16 mx-auto text-center flex flex-col items-center max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-10">
            What Our Users Say
          </h1>
          <p className="text-lg text-gray-500">
            Hear from our satisfied customers who are thriving on Coin-realms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4">{testimonial.name}</h3>
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <div className="flex justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-gray-300" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
