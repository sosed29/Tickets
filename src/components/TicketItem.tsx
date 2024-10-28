import React from 'react';
import { Ticket } from '../types/Ticket';

interface TicketItemProps {
    ticket: Ticket;
}


const getTransferText = (count: number) => {
    if (count === 0) return 'Без пересадок';
    if (count === 1) return '1 пересадка';
    if (count > 1 && count < 5) return `${count} пересадки`;
    return `${count} пересадок`;
};

const TicketItem: React.FC<TicketItemProps> = ({ ticket }) => {
    return (
        <div className="ticket">
            <div className="ticket-header">
                <div className="ticket-price-route-time">
                    <div className="ticket-price">{ticket.price} Р</div>
                    <div className="ticket-route-time">
                        <div className="ticket-route">{ticket.from} - {ticket.to}</div>
                        <div className="ticket-time">{ticket.time.startTime} - {ticket.time.endTime}</div>
                    </div>
                </div>
            </div>
            <div className="ticket-duration">
                <div className="duration">В пути</div>
                <div className="duration-time">{Math.floor(ticket.duration / 60)} ч {ticket.duration % 60} мин</div>
            </div>
            <div className="ticket-logo-transfers">
                <img src={ticket.logoUrl} alt={ticket.company} className="ticket-logo" />
                <div className="ticket-transfers-info">
                    <div className="ticket-transfers">
                        <div className="transfers-title">Пересадки</div>
                        <div className="transfers-amount">{getTransferText(ticket.connectionAmount || 0)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketItem;
