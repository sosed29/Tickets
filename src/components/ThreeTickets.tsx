import React from 'react';
import { useSelector } from 'react-redux';
import TicketItem from './TicketItem';
import { RootState } from '../store/store';

const ThreeTickets: React.FC = () => {
    const filteredTickets = useSelector((state: RootState) => state.tickets.filteredTickets);

    return (
        <div className="three-tickets">
            {filteredTickets.length === 0 ? (
                <p>Нет доступных билетов.</p>
            ) : (
                filteredTickets.map((ticket) => (
                    <TicketItem key={ticket.id} ticket={ticket} />
                ))
            )}
        </div>
    );
};

export default ThreeTickets;
