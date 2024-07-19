import { UserPlus, CreditCard, BadgeDollarSign } from "lucide-react";

export const HowItWorks = () => {
  return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
         
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center px-6 md:px-0">
              <div className="flex flex-col justify-center items-center p-8 w-full transition-transform hover:scale-105">
                <UserPlus className="text-teal-500 mb-4" size={48} />
                <h3 className="text-2xl font-semibold mb-4">Create an Account</h3>
                <p className="text-gray-600">
                  Sign up and confirm your identity to get started. It&apos;s quick and easy!
                </p>
              </div>
            </div>
  
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center px-6 md:px-0">
              <div className="flex flex-col justify-center items-center p-8 w-full transition-transform hover:scale-105">
                <CreditCard className="text-teal-500 mb-4" size={48} />
                <h3 className="text-2xl font-semibold mb-4">Add Funds</h3>
                <p className="text-gray-600">
                  Deposit money into your wallet using a convenient method. We support various payment options.
                </p>
              </div>
            </div>
  
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center px-6 md:px-0">
              <div className="flex flex-col justify-center items-center p-8 w-full transition-transform hover:scale-105">
                <BadgeDollarSign className="text-teal-500 mb-4" size={48} />
                <h3 className="text-2xl font-semibold mb-4">Begin Trading</h3>
                <p className="text-gray-600">
                  Start buying, selling, and managing cryptocurrencies effortlessly. Our intuitive platform makes it simple for you.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
