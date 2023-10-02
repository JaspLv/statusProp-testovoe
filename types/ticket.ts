export type MessageType = {
    text: string,
    id: number
}

export type TicketType = {
    id: number
    title: string
    messages: MessageType[]
}
