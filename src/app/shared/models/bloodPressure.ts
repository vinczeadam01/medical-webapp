import { Timestamp } from "@angular/fire/firestore";

export interface BloodPressure {
    id: string;
    uid: string;
    sys: number;
    dia: number;
    pulse: number;
    date: Timestamp;
    rate: number
}