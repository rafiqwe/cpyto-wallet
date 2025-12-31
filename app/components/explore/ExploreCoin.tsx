import Bitcoin from "@/public/images/10.1 Bitcoin 1.png";
import { ExploreCoinCard } from "./ExploreCoinCard";

const ExploreCoin = () => {
  const coinsCardDetails = [
    {
      coinsIcons: [Bitcoin, Bitcoin],
      title: "Mint and Secure SRC-20 Tokens",
    },
    {
      coinsIcons: [Bitcoin, Bitcoin, Bitcoin],
      title: "Trade,Collect, and Iscribe Ordinals",
    },
    {
      coinsIcons: [Bitcoin, Bitcoin],
      title: "Purchase STX tokens to power L2 apps on Stacks",
    },
  ];
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 mt-10  p-3  ">
      {coinsCardDetails.map((item, index) => {
        return <ExploreCoinCard key={index} idx={index} item={item} />;
      })}
    </div>
  );
};

export default ExploreCoin;
