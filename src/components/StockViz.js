import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
import News from "./News";

const StockViz = () => {
  const Plotly = window.Plotly;
  let { search } = useParams();

  const [data, setData] = useState();

  const [x, setX] = useState();
  const [high, setHigh] = useState();
  const [low, setLow] = useState();
  const [y, setY] = useState();
  const viz = useRef();

  const avKey = process.env.REACT_APP_AV_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${search}&apikey=${avKey}`
        );
        const body = await result.json();
        setData(body);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [search, avKey]);

  useEffect(() => {
    if (data) {
      let dataArray = data["Weekly Adjusted Time Series"];
      setX(Object.keys(dataArray));
      setY(
        Object.keys(dataArray).map(
          (y) => dataArray[`${y}`]["5. adjusted close"]
        )
      );
      setLow(Object.keys(dataArray).map((y) => dataArray[`${y}`]["3. low"]));
      setHigh(Object.keys(dataArray).map((y) => dataArray[`${y}`]["2. high"]));
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    const data = {
      x: x,
      y: y,
      type: "scatter",
      mode: "lines",
      name: `${search} Adjusted Close`,
      line: { color: "#387EE0" },
    };
    const data2 = {
      x: x,
      y: high,
      type: "scatter",
      mode: "lines",
      name: `${search} High`,
      line: { color: "#E05F4F" },
    };

    const data3 = {
      x: x,
      y: low,
      type: "scatter",
      mode: "lines",
      name: `${search} Low`,
      line: { color: "#C6E065" },
    };

    const allData = [data, data2, data3];
    const layout = {
      title: "Weekly Adjusted Prices",
      autosize: true,
      margin: {
        l: 50,
        r: 50,
        b: 50,
        t: 50,
        pad: 4,
      },
      yaxis: {
        title: "Price Per Share",
        automargin: true,
        titlefont: { size: 20 },
      },
      xaxis: {
        title: "Date",
        automargin: true,
        titlefont: { size: 20 },
      },
    };
    const config = { responsive: true };
    Plotly.newPlot(viz.current, allData, layout, config);
  }, [Plotly, x, y, high, low, search]);
  return (
    <div className="vizMain">
      <h1>{search}</h1>
      <div ref={viz}></div>
      <Divider light sx={{ marginTop: "6rem" }} />
      <h1>Recent {search} News</h1>
      <News search={search} />
    </div>
  );
};

export default StockViz;
