import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./FetchData.module.css";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/films");

      const responseData = await response.json();

      const dataList = responseData.results.map((d) => {
        return <li key={Math.random().toString()}>{d.title}</li>;
      });

      setData(dataList);
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
    setIsLoading(false);
  };

  return (
    <>
      <Button className={classes.fetchBtn} onClick={fetchDataHandler}>
        Fetch Data
      </Button>
      <Card className={classes.fetch}>
        {!isLoading && data.length > 0 && <ul>{data}</ul>}
        {!isLoading && data.length === 0 && (
          <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>
            No found data... Try Again!
          </p>
        )}
        {isLoading && (
          <p style={{ fontSize: "1.5rem", fontWeight: "700" }}> Loading... </p>
        )}
      </Card>
    </>
  );
};

export default FetchData;
