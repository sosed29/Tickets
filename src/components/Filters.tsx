import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/ticketsSlice";
import arrowIcon from "../img/arrow .svg";

const Filters = () => {
  const dispatch = useDispatch();
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedConnections, setSelectedConnections] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false); // управление состоянием меню

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value, name } = e.target;

    if (name === "transfers") {
      const connectionAmount = parseInt(value);
      const updatedConnections = checked
        ? [...selectedConnections, connectionAmount]
        : selectedConnections.filter((amount) => amount !== connectionAmount);

      setSelectedConnections(updatedConnections);
      dispatch(
        setFilters({
          connectionAmount: updatedConnections,
          company: selectedCompanies,
        })
      );
    } else if (name === "company") {
      const updatedCompanies = checked
        ? [...selectedCompanies, value]
        : selectedCompanies.filter((company) => company !== value);

      setSelectedCompanies(updatedCompanies);
      dispatch(
        setFilters({
          connectionAmount: selectedConnections,
          company: updatedCompanies,
        })
      );
    }
  };

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filters-wrapper">
      {/* Заголовок для мобильной версии */}
      <div className="filters-header">
        <span className="header-title">
          Любая авиакомпания, любое кол-во пересадок
        </span>
        <span className="header-title-mobile">
          Любая авиакомпания, пересадок: 0, 1, 2 {}
        </span>
        <button className="toggle-button" onClick={toggleFilters}>
          <span className="toggle-button-text">Открыть настройки</span>
          <img
            src={arrowIcon}
            alt="Toggle arrow"
            className={`arrow ${isOpen ? "open" : ""}`}
          />
        </button>
      </div>

      {/* выпадающее меню фильтров для мобильных устройств */}
      <div className={`filters-dropdown ${isOpen ? "open" : ""}`}>
        <div className="filter-group">
          <h4>Количество пересадок</h4>
          <label>
            <input
              type="checkbox"
              name="transfers"
              value="0"
              onChange={handleFilterChange}
            />
            <span className="checkbox-custom"></span> Без пересадок
          </label>
          <label>
            <input
              type="checkbox"
              name="transfers"
              value="1"
              onChange={handleFilterChange}
            />
            <span className="checkbox-custom"></span> 1 пересадка
          </label>
          <label>
            <input
              type="checkbox"
              name="transfers"
              value="2"
              onChange={handleFilterChange}
            />
            <span className="checkbox-custom"></span> 2 пересадки
          </label>
          <label>
            <input
              type="checkbox"
              name="transfers"
              value="3"
              onChange={handleFilterChange}
            />
            <span className="checkbox-custom"></span> 3 пересадки
          </label>
        </div>

        <div className="filter-group">
          <h4>Компании</h4>
          <label>
            <input
              type="checkbox"
              name="company"
              value="Победа"
              onChange={handleFilterChange}
            />
            <span className="radio-custom"></span> Победа
          </label>
          <label>
            <input
              type="checkbox"
              name="company"
              value="Red Wings"
              onChange={handleFilterChange}
            />
            <span className="radio-custom"></span> Red Wings
          </label>
          <label>
            <input
              type="checkbox"
              name="company"
              value="S7 Airlines"
              onChange={handleFilterChange}
            />
            <span className="radio-custom"></span> S7 Airlines
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
