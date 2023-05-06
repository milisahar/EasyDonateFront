export class Event {
    id: any;
    title: any;
    eventDate:any
    description: any;
    status:any
    place:any
    capacity:any
    duration:any
    eventType:EventType
    eventComments: Comment[]

}
export class Comment{
    id:any
    content: any
    event: any
    owner: any
}
enum EventType {
    GALA, MEDIATIQUE, ENCHERES, CONCERT
}