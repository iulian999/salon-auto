import { Injectable } from '@nestjs/common';

export interface Configurare {
  id: number;
  model: string;
  pret: number;
  culoare?: string;
}

@Injectable()
export class AppService {
  private configurari: Configurare[] = [
    { id: 1, model: 'Audi A3', pret: 25000, culoare: 'Negru' },
    { id: 2, model: 'BMW X5', pret: 45000, culoare: 'Alb' },
    { id: 3, model: 'Mercedes C200', pret: 35000, culoare: 'Gri' },
    { id: 4, model: 'Volkswagen Golf', pret: 20000, culoare: 'Rosu' },
    { id: 5, model: 'Toyota Corolla', pret: 22000, culoare: 'Albastru' },
    { id: 6, model: 'Ford Focus', pret: 21000, culoare: 'Negru' },
    { id: 7, model: 'Honda Civic', pret: 23000, culoare: 'Alb' },
    { id: 8, model: 'Nissan Qashqai', pret: 27000, culoare: 'Gri' },
    { id: 9, model: 'Kia Sportage', pret: 25000, culoare: 'Rosu' },
    { id: 10, model: 'Hyundai Tucson', pret: 26000, culoare: 'Albastru' },
  ];

  // Nivel 5: returnează toate configurările
  findAll(): Configurare[] {
    return this.configurari;
  }

  // Nivel 6: returnează configurarea după id sau undefined
  findById(id: number): Configurare | undefined {
    return this.configurari.find(c => c.id === id);
  }
}
