import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Ticket } from '../types/Ticket';

const PobedaLogo = '../src/img/pobeda.png';
const RedWingsLogo = '../src/img/red-wings.png';
const S7Logo = '../src/img/s7.png';

const initialState = {
    tickets: [] as Ticket[],
    filteredTickets: [] as Ticket[],
    filters: {
        connectionAmount: [] as number[],  
        company: [] as string[],
    },
};

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async () => {
    const tickets: Ticket[] = [
        {
            id: 1,
            from: "SVO",
            to: "LED",
            company: "Победа",
            price: 12680,
            currency: "RUB",
            time: {
                startTime: "12:00",
                endTime: "16:30"
            },
            duration: 270,
            date: "2024-10-14",
            connectionAmount: 1,
            logoUrl: PobedaLogo
        },
        {
            id: 2,
            from: "SVO",
            to: "LED",
            company: "Red Wings",
            price: 21500,
            currency: "RUB",
            time: {
                startTime: "14:00",
                endTime: "16:00"
            },
            duration: 120,
            date: "2024-10-14",
            connectionAmount: 0,
            logoUrl: RedWingsLogo
        },
        {
            id: 3,
            from: "SVO",
            to: "LED",
            company: "S7 Airlines",
            price: 23995,
            currency: "RUB",
            time: {
                startTime: "04:50",
                endTime: "13:30"
            },
            duration: 520,
            date: "2024-10-14",
            connectionAmount: 2, // 2 пересадки
            logoUrl: S7Logo
        }
    ];
    return tickets;
});

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        setFilters(state, action) {
            const { connectionAmount, company } = action.payload;

            // cохраняем новые фильтры
            state.filters.connectionAmount = connectionAmount;
            state.filters.company = company;

            // фильтрация билетов
            state.filteredTickets = state.tickets.filter(ticket => {
                const matchesConnectionAmount = 
                    connectionAmount.length === 0 || 
                    connectionAmount.includes(ticket.connectionAmount);
                
                const matchesCompany = company.length === 0 || company.includes(ticket.company);
                return matchesConnectionAmount && matchesCompany;
            });
        },
        setSortBy(state, action) {
            const sortType = action.payload;
            state.filteredTickets.sort((a, b) => {
                if (sortType === 'cheapest') {
                    return a.price - b.price;
                } else if (sortType === 'fastest') {
                    return a.duration - b.duration;
                } else {
                    return 0; 
                }
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTickets.fulfilled, (state, action) => {
            state.tickets = action.payload;
            state.filteredTickets = action.payload; //  отображаем все билеты
        });
    },
});

export const { setFilters, setSortBy } = ticketsSlice.actions;
export default ticketsSlice.reducer;
