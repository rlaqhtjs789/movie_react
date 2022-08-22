import { useEffect, useState } from "react";

function App() {
  const [loading, setLading] = useState(true);
  const [coins, setCoins] = useState([]);
  // useEffect << 즉시실행함수
  useEffect(() =>{
    // fetch << api가져올수있음
    // then << api로 불러온 json자료를 담을수 있음
    fetch("https://api.coinpaprika.com/v1/tickers").then(response => 
      response.json()
    ).then(json => {
      // setCoins값에 json데이터 할당
      setCoins(json);
      // setLoading값에 false값을 할당
      setLading(false);
      // api 고유값 확인방법 << 개발자환경에서 network 에서 preview를 누르면 고유 json값 변수를 확인가능
    });
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
