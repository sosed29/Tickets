import React from 'react';

interface SortButtonsProps {
    onSortChange: (sortType: string) => void;
    activeSort: string;
}

const SortButtons: React.FC<SortButtonsProps> = ({ onSortChange, activeSort }) => {
    return (
        <div className="sort-buttons">
            <button className={`sort-button ${activeSort === 'cheapest' ? 'active' : ''}`}
                onClick={() => onSortChange('cheapest')}
            >
                Самый дешёвый
            </button>
            <button className={`sort-button ${activeSort === 'fastest' ? 'active' : ''}`}
                onClick={() => onSortChange('fastest')}
            >
                Самый быстрый </button>
            <button className={`sort-button ${activeSort === 'optimal' ? 'active' : ''}`}
                onClick={() => onSortChange('optimal')}
            >
                Самый оптимальный </button>
        </div>
    );
};

export default SortButtons;
