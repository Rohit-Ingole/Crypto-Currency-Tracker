import { useState } from "react";
import Coin from "../components/Coin";

const Home = ({ data }) => {
  const [searchCurrency, setSearchCurrency] = useState("");

  const filteredCoins = data.filter((coin) =>
    coin.name.toLowerCase().includes(searchCurrency.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center bg-[#1a1a1c] pt-16 text-white">
      <div className="max-w-[900px]">
        <div className="mb-10 md:mb-16 flex flex-col items-center justify-center">
          <h1 className="mb-4 h-16 items-center text-4xl md:text-[3rem] font-bold text-gradient bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500">
            Search a currency
          </h1>
          <form action="">
            <input
              type="text"
              placeholder="Search"
              value={searchCurrency}
              onChange={(e) => {
                setSearchCurrency(e.target.value);
              }}
              className="pl-4 w-[300px] h-[50px] rounded border-none text-gray-300 placeholder-gray-300 bg-gradient-to-r from-[#ac32e4] via-[#7918f2] to-[#4801ff] font-semibold"
            />
          </form>
        </div>
        <div className="flex items-center justify-around text-md md:text-lg font-semibold border-2 py-3 rounded-md border-gray-500">
          <div className="flex items-center justify-around flex-[0.32] md:flex-[0.4] lg:flex[0.32]">
            <p className="ml-10 md:ml-0">Name</p>
            <p className="hidden md:block">Symbol</p>
          </div>
          <div className="flex items-center justify-between md:justify-around flex-[0.68] md:flex-[0.6] lg:flex-[0.68] ml-[90px] md:ml-0">
            <p>Price</p>
            <p className="hidden md:block">Volume</p>
            <p className="text-center mr-2 md:mr-0">
              Price
              <br />
              Changed
            </p>
            <p className="hidden lg:block">Market Cap</p>
          </div>
        </div>
        <div>
          {filteredCoins?.map(
            ({
              id,
              image,
              name,
              symbol,
              current_price,
              market_cap,
              total_volume,
              price_change_percentage_24h,
            }) => (
              <Coin
                image={image}
                name={name}
                symbol={symbol}
                current_price={current_price}
                market_cap={market_cap}
                total_volume={total_volume}
                key={id}
                price_change_percentage_24h={price_change_percentage_24h}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=250&page=1&sparkline=false"
  );
  const data = await res.json();

  return { props: { data } };
}
