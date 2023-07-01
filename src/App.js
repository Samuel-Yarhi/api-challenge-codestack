import React, { useState, useEffect } from "react";
import "./App.css";
import PeopleTable from "./components/PeopleTable";
import ReactLoading from "react-loading";

function App() {
  const api_url = "https://gorest.co.in/public/v2/users";
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api_url);
      const jsonData = await response.json();
      const filteredData = jsonData.filter(
        (person) => person.status !== "inactive"
      );
      setData(filteredData);
    }

    fetchData();
  }, []);

  return data ? (
    <PeopleTable json={data} />
  ) : (
    <div className="loading">
      <ReactLoading type="spin" color="#496EEA" />
    </div>
  );
}

export default App;
