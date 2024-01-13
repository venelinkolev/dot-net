import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appNumberFormat]'
})
export class NumberFormatDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    // Validate and format the input value
    const formattedValue = this.formatInput(value);
    // Update the model value
    this.ngControl.valueAccessor!.writeValue(formattedValue);
  }

  private formatInput(value: string): string {
    // Implement your formatting logic here
    // Example: Ensure that the value is in "0.00" format
    const floatValue = parseFloat(value.replace(/[^\d.]/g, ''));
    return isNaN(floatValue) ? '0.00' : floatValue.toFixed(2);
  }
}
