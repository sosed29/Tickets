import React, { useEffect, useState } from "react";
import { useAppDispatch } from "./store/hooks";
import { fetchTickets, setSortBy } from "./store/ticketsSlice";
import Filters from "./components/Filters";
import SortButtons from "./components/SortButtons";
import Header from "./components/Header";
import ThreeTickets from "./components/ThreeTickets";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [activeSort, setActiveSort] = useState("cheapest");

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const handleSortChange = (sortType: string) => {
    setActiveSort(sortType);
    dispatch(setSortBy(sortType));
  };

  return (
    <div className="app">
      <Header />
      <div className="layout">
        <div className="filters-wrapper">
          <Filters />
        </div>
        <div className="sort-buttons-wrapper">
          <SortButtons
            onSortChange={handleSortChange}
            activeSort={activeSort}
          />
        </div>
        <div className="ticket-section">
          <ThreeTickets />
          <button className="load-more-button">Загрузить ещё билеты</button>
        </div>
      </div>
    </div>
  );
};

export default App;
