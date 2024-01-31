import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import TopNav from "./components/TopNav";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className="bg-black flex flex-col items-center">
      <TopNav />
      <div className="max-w-7xl bg-white">
        <div className="flex flex-col items-center">
          <main className="p-10">
            <div className="border rounded-md">
              {items?.map((item) => (
                <Card key={item.show.id} show={item.show} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
