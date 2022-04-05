import { BloodPressure } from "./bloodPressure";

export class Patient {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    taj: string;
    password: string;
    mesurements: BloodPressure[];

    constructor(id: number, firstname: string, lastname: string, email: string, taj: string, password: string, mesurements: BloodPressure[]) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.taj = taj;
        this.password = password;
        this.mesurements = mesurements;
    }

    addMesurement(mesurement: BloodPressure) {
        this.mesurements.push(mesurement);
    }
}