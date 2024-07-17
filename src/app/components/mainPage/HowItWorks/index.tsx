export const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl space-y-4">
          <h1 className="text-3xl px-4 font-bold tracking-tight text-gray-900 sm:text-3xl leading-24">
            How It Works
          </h1>
          <h3 className="text-lg mb-8 text-gray-500">
            Learn about the simple steps to start using CoinRealMs
          </h3>
        </div>

        <div className="flex flex-col items-center space-y-10 md:space-y-10 my-16">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center px-6 md:px-0">
            <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-md w-full md:w-[30rem] md:h-80">
              <span className="text-4xl font-bold text-cyan-500 mb-4">01.</span>
              <h3 className="text-xl font-semibold mb-4">Create an Account</h3>
              <p className="text-gray-600">
                Sign up and confirm your identity to get started. It&apos;s
                quick and easy!
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-10 h-10 md:w-10 md:h-10 mt-4 mb-4 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <g data-name="23-User-Arrow Down">
                <path d="M10 10V8a6 6 0 0 1 12 0v2a1 1 0 0 0 1 1v2h2v-2a2 2 0 0 0-1-1.73V8A8 8 0 0 0 8 8v1.27A2 2 0 0 0 7 11v2a2 2 0 0 0 1 1.75 8.07 8.07 0 0 0 4 6.16v1.39L4.7 25c-.91.23-4.7 1.37-4.7 4v2a1 1 0 0 0 1 1h14v-2H2v-1c0-.78 1.92-1.7 3.24-2h.11l8-3a1 1 0 0 0 .65-1v-2.69a1 1 0 0 0-.57-.9A6 6 0 0 1 10 14a1 1 0 0 0-1-1v-2a1 1 0 0 0 1-1z" />
                <path d="M29 19v-2h-6a2 2 0 0 0-2 2v7.59l-1.29-1.29-1.41 1.41 3 3a1 1 0 0 0 1.41 0l3-3-1.41-1.41-1.3 1.29V19z" />
              </g>
            </svg>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center px-6 md:px-0">
            <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-md w-full md:w-[30rem] md:h-80">
              <span className="text-4xl font-bold text-cyan-500 mb-4">02.</span>
              <h3 className="text-xl font-semibold mb-4">Add Funds</h3>
              <p className="text-gray-600">
                Deposit money into your wallet using a convenient method. We
                support various payment options.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-10 h-10 md:w-10 md:h-10 mt-4 mb-4 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <g data-name="23-User-Arrow Down">
                <path d="M10 10V8a6 6 0 0 1 12 0v2a1 1 0 0 0 1 1v2h2v-2a2 2 0 0 0-1-1.73V8A8 8 0 0 0 8 8v1.27A2 2 0 0 0 7 11v2a2 2 0 0 0 1 1.75 8.07 8.07 0 0 0 4 6.16v1.39L4.7 25c-.91.23-4.7 1.37-4.7 4v2a1 1 0 0 0 1 1h14v-2H2v-1c0-.78 1.92-1.7 3.24-2h.11l8-3a1 1 0 0 0 .65-1v-2.69a1 1 0 0 0-.57-.9A6 6 0 0 1 10 14a1 1 0 0 0-1-1v-2a1 1 0 0 0 1-1z" />
                <path d="M29 19v-2h-6a2 2 0 0 0-2 2v7.59l-1.29-1.29-1.41 1.41 3 3a1 1 0 0 0 1.41 0l3-3-1.41-1.41-1.3 1.29V19z" />
              </g>
            </svg>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center px-6 md:px-0">
            <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-md w-full md:w-[30rem] md:h-80">
              <span className="text-4xl font-bold text-cyan-500 mb-4">03.</span>
              <h3 className="text-xl font-semibold mb-4">Begin Trading</h3>
              <p className="text-gray-600">
                Start buying, selling, and managing cryptocurrencies
                effortlessly. Our intuitive platform makes it simple for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
