import { User } from "./user";
export class Task {
    id !: number;
    title : string="";
    description : string = "";
    urgency : string = "";
    startingDate !: Date;
    endingingDate !: Date;
    progress : any;
    assignedTo : User;

}