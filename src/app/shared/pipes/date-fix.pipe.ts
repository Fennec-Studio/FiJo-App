import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFix'
})
export class DateFixPipe implements PipeTransform {

  transform(dateToFix: Date): string {
    //Ejemplo esperado: Enero, 2023.
    let date = new Date(dateToFix)
    let month = date.getMonth()
    let year = date.getFullYear()
    let monthString = ''

    switch(month) {
      case 0:
        monthString = 'Enero'
        break
      case 1:
        monthString = 'Febrero'
        break
      case 2:
        monthString = 'Marzo'
        break
      case 3:
        monthString = 'Abril'
        break
      case 4:
        monthString = 'Mayo'
        break
      case 5:
        monthString = 'Junio'
        break
      case 6:
        monthString = 'Julio'
        break
      case 7:
        monthString = 'Agosto'
        break
      case 8:
        monthString = 'Septiembre'
        break
      case 9:
        monthString = 'Octubre'
        break
      case 10:
        monthString = 'Noviembre'
        break
      case 11:
        monthString = 'Diciembre'
        break
    }

    return `${monthString}, ${year}`
  }

}
