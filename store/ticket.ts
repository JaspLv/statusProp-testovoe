import {acceptHMRUpdate, defineStore} from "pinia"
import ProfileService from '~/services'
import {TicketState} from "~/store/types"
import {MessageType, TicketType} from "~/types/ticket"

export const useTicketStore = defineStore({
    id: "ticket-store",
    state: (): TicketState => {
        return {
            tickets: [],
            currentTicket: {
                title: '',
                id: 0,
                messages: []
            },
        }
    },
    actions: {
        setCurrent(id: number) {
            this.getTickets()
            console.log('TICKETS', this.tickets)
            const ticket = this.getOne(id)
            if (!ticket) return
            console.log('TICKET', ticket)
            this.currentTicket = ticket
        },
        addMessage(message: MessageType) {
            this.currentTicket = {
                ...this.currentTicket,
                messages: [...this.currentTicket.messages, message]
            }
            const allTickets = this.tickets.map(item => {
                if (item.id === this.currentTicket.id) {
                    return {
                        ...item,
                        messages: this.currentTicket.messages
                    }
                }
                return item
            })
            ProfileService.update('tickets', allTickets)
        },
        addTicket(t: TicketType) {
            this.tickets = [...this.tickets, t]
            ProfileService.update('tickets', this.tickets)
        },
        getTickets() {
            const res = ProfileService.get('tickets')
            if (!res) return
            this.tickets = res
        }
    },
    getters: {
        getAll(state): TicketType[] {
            return state.tickets.sort((a, b) => b.id - a.id)
        },
        getOne(state) {
            return (id: number) => state.tickets.find((item: TicketType) => item.id === id)
        },
        getCurrent(state) {
            return state.currentTicket
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTicketStore, import.meta.hot))
}
