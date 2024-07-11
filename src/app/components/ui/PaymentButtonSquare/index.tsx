import React, { useEffect } from "react";
import Image from "next/image";

const PaymentButton: React.FC = () => {
  useEffect(() => {
    const showCheckoutWindow = (e: Event) => {
      e.preventDefault();

      const url = document
        .getElementById("embedded-checkout-modal-checkout-button")!
        .getAttribute("data-url")!;
      const title = "Square Payment Links";

      // Some platforms embed in an iframe, so we want to top window to calculate sizes correctly
      const topWindow = window.top ? window.top : window;

      // Fixes dual-screen position
      const dualScreenLeft =
        topWindow.screenLeft !== undefined
          ? topWindow.screenLeft
          : topWindow.screenX;
      const dualScreenTop =
        topWindow.screenTop !== undefined
          ? topWindow.screenTop
          : topWindow.screenY;

      const width = topWindow.innerWidth
        ? topWindow.innerWidth
        : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : screen.width;
      const height = topWindow.innerHeight
        ? topWindow.innerHeight
        : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : screen.height;

      const h = height * 0.75;
      const w = 500;

      const systemZoom = width / topWindow.screen.availWidth;
      const left = (width - w) / 2 / systemZoom + dualScreenLeft;
      const top = (height - h) / 2 / systemZoom + dualScreenTop;
      const newWindow = window.open(
        url,
        title,
        `scrollbars=yes,width=${w / systemZoom},height=${
          h / systemZoom
        },top=${top},left=${left}`
      );

      if (newWindow && newWindow.focus) {
        newWindow.focus();
      }
    };

    const button = document.getElementById(
      "embedded-checkout-modal-checkout-button"
    );
    button!.addEventListener("click", showCheckoutWindow);

    return () => {
      button!.removeEventListener("click", showCheckoutWindow);
    };
  }, []);

  return (
    <div className="mx-auto flex justify-center items-center w-[60%] min-w-[259px] bg-white border border-black/10 shadow-[2px_10px_5px_rgba(0,0,0,0)] rounded-lg font-sans">
      <div className="overflow-auto flex flex-col justify-end items-center w-259
       bg-white border border-black/10 shadow-[2px_10px_5px_rgba(0,0,0,0)] rounded-lg font-sans">
        <Image
          src="https://items-images-production.s3.us-west-2.amazonaws.com/files/38dd2310e066cde27856a66e8a34c50efe4a15a6/original.png"
          alt="Ways2Coin"
          width={259}
          height={140}
          layout="responsive"
          objectFit="cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="p-5">
          <a
            id="embedded-checkout-modal-checkout-button"
            target="_blank"
            rel="noopener noreferrer"
            data-url="https://signnow.com/s/jCGC7eDD?blank_redirect=https%3A%2F%2Fcheckout.square.site%2Fmerchant%2FML7780Q7P7D1W%2Fcheckout%2FZHHHKUOZ5O6AXFOD2JRRONTH%3Fsrc%3Dembd"
            href="https://signnow.com/s/jCGC7eDD?blank_redirect=https%3A%2F%2Fcheckout.square.site%2Fmerchant%2FML7780Q7P7D1W%2Fcheckout%2FZHHHKUOZ5O6AXFOD2JRRONTH%3Fsrc%3Dembd"
            className="inline-flex items-center justify-center text-lg h-12 text-white min-w-[212px] bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600 transition-colors duration-300 ease-in-out rounded-md shadow-lg"
          >
            Pay now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentButton;
