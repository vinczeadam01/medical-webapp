import { Timestamp } from "@angular/fire/firestore";

export interface Message {
    id: string
    from: string;
    fromName: string;
    to: string;
    toName: string;
    date: Timestamp;
    message: string;
  }