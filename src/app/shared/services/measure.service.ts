import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BloodPressure } from '../models/bloodPressure';

@Injectable({
  providedIn: 'root'
})
export class MeasureService {

  collectionName = 'Measurements';

  constructor(private afs: AngularFirestore) { }

  create(bloodPressure: BloodPressure) {
    bloodPressure.id = this.afs.createId();
    return this.afs.collection<BloodPressure>(this.collectionName).doc(bloodPressure.id).set(bloodPressure);
  }

  getAll() {
    return this.afs.collection<BloodPressure>(this.collectionName).valueChanges();
  }

  getByUserId(userId: string) {
    return this.afs.collection<BloodPressure>(this.collectionName, ref => ref.where('uid', '==', userId).orderBy('date', 'asc')).valueChanges();
  }

  update(bloodPressure: BloodPressure) {
    return this.afs.collection<BloodPressure>(this.collectionName).doc(bloodPressure.id).set(bloodPressure);
  }

  delete(id: string) {
    return this.afs.collection<BloodPressure>(this.collectionName).doc(id).delete();
  }
}
