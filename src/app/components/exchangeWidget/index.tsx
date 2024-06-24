import React, { useEffect } from 'react';

const ExchangeWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      id="iframe-widget"
      src="https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=0.1&amountFiat=1500&backgroundColor=FFFFFF&darkMode=false&from=btc&fromFiat=aud&horizontal=false&isFiat&lang=en-US&link_id=c11faacdf83834&locales=true&logo=false&primaryColor=2ca4d7&to=eth&toFiat=eth&toTheMoon=true"
      style={{ height: '356px', width: '100%', border: 'none' }}
    />
  );
};

export default ExchangeWidget;
