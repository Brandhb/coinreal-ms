import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";

const WalletInfoPage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl space-y-10 px-4">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
            How to Create Your Own MetaMask Wallet
          </h1>
        </div>
      </MaxWidthWrapper>

      <div className="relative bg-transparent mt-[-40px] md:mt-[-130px] lg:mt-[-150px]">

        <svg
          style={{ marginBottom: "-20px", marginTop: "50px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(249 250 251)"
            fillOpacity="1"
            d="M0,192L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
        <div className="border-t border-gray-200 bg-gray-50">
          <MaxWidthWrapper className="py-20 px-5 md:px-10 lg:px-32">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Step 1: Install MetaMask
                </h2>
                <p className="text-gray-700">
                  MetaMask is a browser extension that allows you to manage your
                  Ethereum wallet. It is available for Chrome, Firefox, and
                  Brave browsers. To install MetaMask, follow these steps:
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-2 text-gray-700">
                  <li>
                    Go to the{" "}
                    <a
                      href="https://metamask.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      MetaMask website
                    </a>
                    .
                  </li>
                  <li>Click the &quot;Download&quot; button.</li>
                  <li>
                    Choose your browser and follow the installation
                    instructions.
                  </li>
                  <li>
                    Once installed, you will see the MetaMask icon in your
                    browser toolbar.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Step 2: Create Your Wallet
                </h2>
                <p className="text-gray-700">
                  After installing the MetaMask extension, follow these steps to
                  create your wallet:
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-2 text-gray-700">
                  <li>Click on the MetaMask icon in your browser toolbar.</li>
                  <li>Click &quot;Get Started&quot;.</li>
                  <li>Select &quot;Create a Wallet&quot;.</li>
                  <li>
                    Create a strong password and click &quot;Create&quot;.
                  </li>
                  <li>
                    Make sure to securely back up your seed phrase. This is
                    crucial for wallet recovery.
                  </li>
                  <li>
                    Confirm your seed phrase by selecting the words in the
                    correct order.
                  </li>
                  <li>Your MetaMask wallet is now created and ready to use.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Step 3: Add Funds to Your Wallet
                </h2>
                <p className="text-gray-700">
                  To add funds to your MetaMask wallet, you can receive
                  cryptocurrency from another wallet or exchange. To view your
                  wallet address:
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-2 text-gray-700">
                  <li>Click on the MetaMask icon in your browser toolbar.</li>
                  <li>
                    Click on your account name to copy your wallet address to
                    the clipboard.
                  </li>
                  <li>
                    Share this address with others to receive cryptocurrency.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Using Your MetaMask Wallet on Ways2Coin
                </h2>
                <p className="text-gray-700">
                  To buy, sell, or exchange cryptocurrency on the Ways2Coin
                  platform, you need to provide your MetaMask wallet address.
                  Follow these steps:
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-2 text-gray-700">
                  <li>
                    Ensure your MetaMask wallet is funded with cryptocurrency.
                  </li>
                  <li>
                    Navigate to the buy, sell, or exchange feature on the
                    Ways2Coin platform.
                  </li>
                  <li>
                    Enter your MetaMask wallet address in the designated field.
                  </li>
                  <li>
                    Complete the transaction. All funds will be sent to or from
                    the wallet address you provided.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Other Wallet Options
                </h2>
                <p className="text-gray-700">
                  While MetaMask is a popular choice, you can also use other
                  common digital wallets available in the market, such as Trust
                  Wallet, Coinbase Wallet, or MyEtherWallet. Simply provide the
                  address of your chosen wallet when using the buy, sell, or
                  exchange features on the Ways2Coin platform.
                </p>
              </section>

              <section className="bg-blue-50 p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-blue-700 mb-2">
                  Important Note
                </h2>
                <p className="text-gray-700">
                  Always double-check your wallet address before submitting any
                  transactions. Ways2Coin is not responsible for any lost funds
                  due to incorrect wallet addresses.
                </p>
              </section>
            </div>
          </MaxWidthWrapper>
        </div>
        <svg
          style={{ marginTop: "-20px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(249 250 251)"
            fillOpacity="1"
            d="M0,256L1440,192L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default WalletInfoPage;