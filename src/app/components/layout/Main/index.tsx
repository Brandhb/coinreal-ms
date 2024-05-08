import Image from 'next/image';
import React from 'react';

const Main: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Our Website</h2>
              <p className="text-lg text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum ex, nec blandit magna. Phasellus lacinia magna eu turpis blandit, in malesuada purus placerat. Sed id metus ligula.</p>
              <p className="text-lg text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum ex, nec blandit magna. Phasellus lacinia magna eu turpis blandit, in malesuada purus placerat. Sed id metus ligula.</p>
              <p className="text-lg text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum ex, nec blandit magna. Phasellus lacinia magna eu turpis blandit, in malesuada purus placerat. Sed id metus ligula.</p>
              <p className="text-lg text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum ex, nec blandit magna. Phasellus lacinia magna eu turpis blandit, in malesuada purus placerat. Sed id metus ligula.</p>
              {/* Add more paragraphs as needed */}
            </div>

            {/* Right Content */}
            <div>
              <Image fill src="/images/main-image.jpg" alt="Main Image" className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
