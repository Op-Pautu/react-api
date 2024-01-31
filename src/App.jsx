import React, { useEffect, useState } from "react";
import "./App.css";

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
    <div className="h-full flex items-center justify-center">
      <h1 className="text-5xl text-sky-600 flex items-center">QuadB Tech</h1>

      <main>
        <div>
          {items?.map((item) => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
