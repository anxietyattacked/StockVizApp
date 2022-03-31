import React, { useState, useEffect } from "react";
import MediaCard from "./MediaCard";

const News = ({ search }) => {
  const [news, setNews] = useState();

  const date = new Date();
  const curDate = date.toISOString().split("T")[0];
  const prevDate = new Date(date.setDate(date.getDate() - 7))
    .toISOString()
    .split("T")[0];

  const finhubKey = process.env.REACT_APP_FH_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://finnhub.io/api/v1/company-news?symbol=${search}&from=${prevDate}&to=${curDate}&token=${finhubKey}`
        );
        const body = await result.json();
        setNews(body);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [search, finhubKey, prevDate, curDate]);
  useEffect(() => {
    console.log(news);
  }, [news]);
  return (
    <div className="grid">
      {typeof news !== "undefined" ? (
        news
          .slice(0, 6)
          .map((news) => (
            <MediaCard
              id={news.id}
              headline={news.headline}
              source={news.source}
              image={news.image}
              summary={news.summary}
              url={news.url}
            />
          ))
      ) : (
        <div>Loading News</div>
      )}
    </div>
  );
};

export default News;
