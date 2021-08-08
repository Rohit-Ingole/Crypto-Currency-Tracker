import Image from "next/image";

const Coin = ({
  image,
  name,
  symbol,
  current_price,
  market_cap,
  price_change_percentage_24h,
  total_volume,
}) => {
  return (
    <div className="flex justify-center min-w-[310px]">
      <div className="flex flex-row justify-start items-center h-20 border-b-[1px] border-[#d7d7d7] max-w-[900px] min-w-[310px]">
        <div className="flex items-center pr-6 w-auto md:min-w-[300px]">
          <div className="relative h-8 w-8 mr-3">
            <Image src={image} alt="Crypto" layout="fill" />
          </div>
          <h1 className="w-[90px] md:w-[150px] text-base">{name}</h1>
          <p className="uppercase hidden md:block">{symbol}</p>
        </div>
        <div className="flex text-right justify-between w-auto">
          <p className="w-[76px] md:w-[110px] text-left mr-3 md:mr-0">
            ₹{current_price?.toLocaleString("en-IN")}
          </p>
          <p className="hidden md:block">
            ₹{total_volume?.toLocaleString("en-IN")}
          </p>
          <p
            className={`${
              price_change_percentage_24h < 0
                ? "text-red-600"
                : "text-green-600"
            } w-auto md:w-[100px]`}
          >
            {price_change_percentage_24h > 0 && "+"}
            {price_change_percentage_24h.toFixed(2)} %
          </p>
          <p className="hidden lg:block lg:min-w-[230px]">
            ₹{market_cap?.toLocaleString("en-IN")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
