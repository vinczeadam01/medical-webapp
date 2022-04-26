import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  collectionName = 'Doctors';

  constructor(private afs: AngularFirestore) { }

  create(doctor: Doctor) {
    return this.afs.collection<Doctor>(this.collectionName).doc(doctor.id).set(doctor);
  }

  getAll() {
    return this.afs.collection<Doctor>(this.collectionName).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<Doctor>(this.collectionName).doc(id).valueChanges();
  }

  update(doctor: Doctor) {
    return this.afs.collection<Doctor>(this.collectionName).doc(doctor.id).set(doctor);
  }

  delete(id: string) {
    return this.afs.collection<Doctor>(this.collectionName).doc(id).delete();
  }
}
