import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import QuoteCard from "./components/QuoteCard";

function App() {
  const [aapl, setAapl] = useState();
  const [msft, setMsft] = useState();
  const [voo, setVoo] = useState();
  const finhubKey = process.env.REACT_APP_FH_KEY;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=AAPL&token=${finhubKey}`
        );
        const body = await result.json();
        setAapl(body);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [finhubKey]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=MSFT&token=${finhubKey}`
        );
        const body = await result.json();
        setMsft(body);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [finhubKey]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=VOO&token=${finhubKey}`
        );
        const body = await result.json();
        setVoo(body);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [finhubKey]);

  return (
    <div className="App">
      <div className="Main">
        <div className="stockGrid">
          {aapl ? (
            <QuoteCard
              symbol={"AAPL"}
              price={aapl.c}
              change={aapl.d}
              percentChange={aapl.dp}
              high={aapl.h}
              low={aapl.l}
              open={aapl.o}
              prevClose={aapl.pc}
            />
          ) : null}
          {msft ? (
            <QuoteCard
              symbol={"MSFT"}
              price={msft.c}
              change={msft.d}
              percentChange={msft.dp}
              high={msft.h}
              low={msft.l}
              open={msft.o}
              prevClose={msft.pc}
            />
          ) : null}
          {voo ? (
            <QuoteCard
              symbol={"VOO"}
              price={voo.c}
              change={voo.d}
              percentChange={voo.dp}
              high={voo.h}
              low={voo.l}
              open={voo.o}
              prevClose={voo.pc}
            />
          ) : null}
        </div>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
