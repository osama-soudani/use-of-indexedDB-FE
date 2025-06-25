import { Injectable } from '@angular/core';
import Dexie from 'dexie';

export interface GymClient {
  id?: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class IndexedDbService extends Dexie {
  clients: Dexie.Table<GymClient, number>;

  constructor() {
    super('GymAppDatabase');

    this.version(1).stores({
      clients: '++id, name, email'
    });

    this.clients = this.table('clients');
  }

  addClient(client: GymClient) {
    return this.clients.add(client);
  }

  getClients(): Promise<GymClient[]> {
    return this.clients.toArray();
  }

  deleteClient(id: number) {
    return this.clients.delete(id);
  }
}
