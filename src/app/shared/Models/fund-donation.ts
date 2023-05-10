import { Fundraiser } from "./fundraiser"
import { User } from "./user"

export class FundDonation {
    id!: number
    fundraiserRef: Fundraiser
    sum!: number
    userRef: User ={
        id:1,
        firstName:"sahar",
        lastName:"mili"
    }
}
