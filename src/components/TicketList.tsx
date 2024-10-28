import React from 'react';
import TicketItem from './TicketItem'; 
import { Ticket } from '../types/Ticket';

interface TicketListProps {
    tickets: Ticket[];
}

const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
    return (
        <div className="ticket-list">
            {tickets.length === 0 ? (
                <p>Нет доступных билетов.</p>
            ) : (
                tickets.map((ticket) => <TicketItem key={ticket.id} ticket={ticket} />)
            )}
        </div>
    );
};

export default TicketList;
