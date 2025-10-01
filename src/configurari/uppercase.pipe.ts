import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Before UppercasePipe:', value); // arată valoarea inițială
    if (typeof value === 'string') {
      const upper = value.toUpperCase();
      console.log('After UppercasePipe:', upper); // arată valoarea după transformare
      return upper;
    }
    return value;
  }
}
