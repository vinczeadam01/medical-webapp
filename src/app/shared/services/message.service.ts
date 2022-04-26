import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  collectionName = 'Messages';

  constructor(private afs: AngularFirestore) { }

  create(message: Message) {
    message.id = this.afs.createId();
    return this.afs.collection<Message>(this.collectionName).doc(message.id).set(message);
  }

  getAll() {
    return this.afs.collection<Message>(this.collectionName).valueChanges();
  }

  getSentByUserId(userId: string) {
    return this.afs.collection<Message>(this.collectionName, ref => ref.where('from', '==', userId).orderBy('date', 'desc')).valueChanges();
  }
  
  getReceivedByUserId(userId: string) {
    return this.afs.collection<Message>(this.collectionName, ref => ref.where('to', '==', userId).orderBy('date', 'desc')).valueChanges();
  }

  update(message: Message) {
    return this.afs.collection<Message>(this.collectionName).doc(message.id).set(message);
  }

  delete(id: string) {
    return this.afs.collection<Message>(this.collectionName).doc(id).delete();
  }
}
