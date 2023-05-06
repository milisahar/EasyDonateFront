import { FundDonation } from "./fund-donation";
import { PendingStatus } from "./pending-status";
import { User } from "./user";

export class Fundraiser {
    fundraiser_id: number=0;
    goal: string="";
    title: string="";
    description: string="";
    archived: boolean = false;
    pendingStatus: PendingStatus;
    deadline = new Date();
    progressStatus: number=0;
    target!: number
    organizer: User
    fundDonations: FundDonation[]
}
