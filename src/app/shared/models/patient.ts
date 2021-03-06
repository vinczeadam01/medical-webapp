import { BloodPressure } from "./bloodPressure";

export class Patient {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    taj: string;

    constructor(id: string, firstname: string, lastname: string, email: string, taj: string) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.taj = taj;
    }

}