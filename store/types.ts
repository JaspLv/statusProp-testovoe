import {TicketType} from "~/types/ticket"
import {ProfileType} from "~/types/profile"

export type TicketState = {
    tickets: TicketType[]
    currentTicket: TicketType
}

export type ProfileState = {
    profile: ProfileType
    auth: boolean
}
