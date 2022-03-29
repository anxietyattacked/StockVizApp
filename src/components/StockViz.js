import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

const Plotly = window.Plotly;

const StockViz = () => {
  let { search } = useParams();

  console.log(search);
  const key = "c9116l2ad3i84i3i2e5g";
  const data = fetch(
    `https://finnhub.io/api/v1/stock/metric?symbol=${search}&metric=all&token=${key}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  return (
    <>
      <head>
        <script src="https://cdn.plot.ly/plotly-2.9.0.min.js"></script>
      </head>
      <div></div>;
    </>
  );
};

export default StockViz;
