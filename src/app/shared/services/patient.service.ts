import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  collectionName = 'Patients';

  constructor(private afs: AngularFirestore) { }

  create(patient: Patient) {
    return this.afs.collection<Patient>(this.collectionName).doc(patient.id).set(patient);
  }

  getAll() {
    return this.afs.collection<Patient>(this.collectionName).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<Patient>(this.collectionName).doc(id).valueChanges();
  }

  update(patient: Patient) {
    return this.afs.collection<Patient>(this.collectionName).doc(patient.id).set(patient);
  }

  delete(id: string) {
    return this.afs.collection<Patient>(this.collectionName).doc(id).delete();
  }
}
