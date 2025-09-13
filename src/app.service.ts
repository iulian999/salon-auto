import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  private configurari = [
    { id: 1, model: 'Audi A4', optiuni: ['Navigatie', 'Piele'], pret: 30000 },
    { id: 2, model: 'BMW X3', optiuni: ['Bluetooth', 'Trapa'], pret: 40000 },
    { id: 3, model: 'Mercedes C200', optiuni: ['Clima', 'Senzori'], pret: 35000 },
    { id: 4, model: 'VW Golf', optiuni: ['Navigatie'], pret: 25000 },
    { id: 5, model: 'Opel Astra', optiuni: ['Bluetooth'], pret: 22000 },
    { id: 6, model: 'Ford Focus', optiuni: ['Piele'], pret: 23000 },
    { id: 7, model: 'Renault Megane', optiuni: ['Trapa'], pret: 21000 },
    { id: 8, model: 'Toyota Corolla', optiuni: ['Clima'], pret: 24000 },
    { id: 9, model: 'Honda Civic', optiuni: ['Navigatie', 'Bluetooth'], pret: 26000 },
    { id: 10, model: 'Nissan Qashqai', optiuni: ['Senzori'], pret: 28000 },
  ];

  findAll() {
    return this.configurari;
  }

  findById(id: number) {
    const configurare = this.configurari.find(c => c.id === id);
    if (!configurare) throw new NotFoundException('Element nu există');
    return configurare;
  }

  search(model?: string, min?: number, max?: number) {
    return this.configurari.filter(c =>
      (!model || c.model.toLowerCase().includes(model.toLowerCase())) &&
      (!min || c.pret >= min) &&
      (!max || c.pret <= max)
    );
  }
}
