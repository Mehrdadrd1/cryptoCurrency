//CORS ERRPR
const fetchCoins = async () => {
  const jsonResponse = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en",
    {
      method: "GET",
      "Content-Type": "application/json",
      //Key
    }
  );
  const data = await jsonResponse.json();
  return data;
};

document.addEventListener("DOMContentLoaded", async () => {
  const coins = await fetchCoins();
  console.log(coins);
});
