import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'; // Importe Observable
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private db: AngularFireDatabase) { }

  insert(contato: Contato): Promise<void> {
    return this.db.list<Contato>('contato').push(contato)
      .then((result) => {
        console.log(result.key);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  update(contato: Contato, key: string): Promise<void> {
    return this.db.list<Contato>('contato').update(key, contato)
      .catch((error) => {
        console.log(error);
      });
  }

  getAll(): Observable<Contato[]> {
    return this.db.list<Contato>('contato')
      .snapshotChanges()
      .pipe(
        map((changes) => {
          return changes.map((c) => {
            const data = c.payload.val() as Contato;
            const key = c.payload.key;
            return { key, ...data };
          });
        })
      );
  }

  delete(key: string): Promise<void> {
    return this.db.object(`contato/${key}`).remove();
  }
}
