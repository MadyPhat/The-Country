import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nativeName'
})
export class NativeNamePipe implements PipeTransform {
  transform(nativeName: { [key: string]: { official: string, common: string } } | undefined): string {
    if (nativeName) {
      const nativeNames = Object.entries(nativeName)
        .map(([language, nameObj]) => `${language}: ${nameObj.official || nameObj.common}`)
        .join(', ');
      return nativeNames;
    }
    return '';
  }
}