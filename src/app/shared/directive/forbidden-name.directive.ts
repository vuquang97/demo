import { Directive } from '@angular/core';
import { AbstractControl } from "@angular/forms";

export function forBiddenNameValidator(value: RegExp) {
	return (control: AbstractControl): { [key: string] : any } | null => {
		const forbidden = value.test(control.value);
		return forbidden ? { 'forbiddenName' : {value: control.value} } : null;
	}
}

@Directive({
  selector: '[appForbiddenName]'
})
export class ForbiddenNameDirective {

  constructor() { }

}
