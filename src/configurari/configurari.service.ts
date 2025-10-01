import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ConfigurariService {
  private configurari = [
    { id: 1, model: 'Audi A4', pret: 30000 },
    { id: 2, model: 'BMW X3', pret: 40000 },
    { id: 3, model: 'Mercedes C-Class', pret: 35000 },
    { id: 4, model: 'VW Golf', pret: 20000 },
    { id: 5, model: 'Toyota Corolla', pret: 18000 },
    { id: 6, model: 'Honda Civic', pret: 22000 },
    { id: 7, model: 'Ford Focus', pret: 21000 },
    { id: 8, model: 'Nissan Qashqai', pret: 27000 },
    { id: 9, model: 'Kia Sportage', pret: 25000 },
    { id: 10, model: 'Renault Megane', pret: 19000 },
  ];

  // Lista completă
  findAll() {
    return this.configurari;
  }

  // Detalii după id
  findOne(id: number) {
    const configurare = this.configurari.find(c => c.id === id);
    if (!configurare) {
      throw new NotFoundException(`Configurare cu id ${id} nu a fost găsită`);
    }
    return configurare;
  }

  // Căutare după query params (model, minPrice, maxPrice)
  search(model?: string, min?: number, max?: number) {
    return this.configurari.filter(c =>
      (!model || c.model.toLowerCase().includes(model.toLowerCase())) &&
      (!min || c.pret >= min) &&
      (!max || c.pret <= max)
    );
  }

  // Căutare după nume (sarcina suplimentară)
  searchByName(name?: string) {
    return this.configurari.filter(c =>
      !name || c.model.toLowerCase().includes(name.toLowerCase())
    );
  }
}
