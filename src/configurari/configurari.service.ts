import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigurariService {
  private configurari = [
    { id: 1, model: 'Audi A4', optiuni: ['Navigatie', 'Piele'], pret: 30000 },
    { id: 2, model: 'BMW X3', optiuni: ['Bluetooth', 'Trapa'], pret: 40000 },
    { id: 3, model: 'Mercedes C-Class', optiuni: ['Clima', 'ABS'], pret: 35000 },
    { id: 4, model: 'Skoda Octavia', optiuni: ['Piele', 'Camera'], pret: 25000 },
    { id: 5, model: 'VW Golf', optiuni: ['Navigatie'], pret: 20000 },
    { id: 6, model: 'Ford Focus', optiuni: ['Bluetooth'], pret: 18000 },
    { id: 7, model: 'Tesla Model 3', optiuni: ['Autopilot'], pret: 45000 },
    { id: 8, model: 'Hyundai Tucson', optiuni: ['Camera', 'Piele'], pret: 28000 },
    { id: 9, model: 'Kia Sportage', optiuni: ['Bluetooth'], pret: 27000 },
    { id: 10, model: 'Toyota Corolla', optiuni: ['Clima'], pret: 22000 },
  ];

  findAll() {
    return this.configurari;
  }
}
