import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, DocumentData, DocumentSnapshot, updateDoc, getDoc, DocumentReference } from '@angular/fire/firestore';
import { worksConfig } from '../components/card-work/card-work.config';
import { map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private workRef = collection(this.firestore, 'works');

  constructor(private firestore: Firestore) { }

  addWork(work: worksConfig): Promise<DocumentReference<DocumentData>> {
    return addDoc(this.workRef, work);
  }
  
  getWork(): Observable<worksConfig[]> {
    return collectionData(this.workRef, { idField: 'id' }) as Observable<worksConfig[]>;
  }

  deleteWork(work: worksConfig): Promise<void> {
    const workDocRef = doc(this.firestore, `works/${work.id}`);
    return deleteDoc(workDocRef);
  }

  async editWork(work: worksConfig): Promise<boolean> {
    try {
      if (work.id) {
        const workDocRef = doc(this.firestore, `works/${work.id}`);
        const workWithoutId = { ...work };
        delete workWithoutId.id;  // Elimina la propiedad id antes de actualizar
        await updateDoc(workDocRef, workWithoutId as DocumentData);
        return true;
      } else {
        console.error('ID de trabajo no válido:', work.id);
        return false;
      }
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
      return false;
    }
  }

  getWorkById(id: string): Observable<worksConfig | undefined> {
    const workRef = doc(this.workRef, id);
    return from(getDoc(workRef)).pipe(
      map((snapshot: DocumentSnapshot<DocumentData>) => {
        if (snapshot.exists()) {
          const data = snapshot.data() as worksConfig;
          return { id: snapshot.id, ...data };
        } else {
          return undefined;
        }
      })
    );
  }
}
