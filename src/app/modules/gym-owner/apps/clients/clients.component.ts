import { Component, inject } from '@angular/core';
import {  GymClient, IndexedDbService } from 'app/shared/services/indexed-db.service';
import Dexie from 'dexie';
@Component({
  selector: 'app-clients',
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
clients: GymClient[] = [];

  constructor(private db: IndexedDbService) {}

  async ngOnInit() {
    // await this.db.addClient({ name: 'osama', email: 'osama@gmail.com' });

    this.clients = await this.db.getClients();
    console.log('Clients:', this.clients);
  }
}
