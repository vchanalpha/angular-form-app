import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
interface CheckoutForm {
  [key: string]: FormControl<string | number | null>;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.less',
})
export class CheckoutComponent implements OnInit {
  checkoutForm = new FormGroup<CheckoutForm>({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
  });
  public firstName: string = '';
  public lastName: string = '';
  public contactNumber: string = '';
  public filter = ['gluten-free', 'Seasonal', 'Bestseller', 'vegan'];
  public iceCream = [
    {
      flavour: 'Chocolate Lava Cake Pint',
      feature: 'gluten-free',
    },
    {
      flavour: 'Lemon Curd Blueberry Pint',
      feature: 'Seasonal',
    },
    {
      flavour: 'Sea Salt & Goat Milk Caramel Pint',
      feature: 'gluten-free',
    },
    {
      flavour: 'Ace Coffee & Cocoa Nib Pint (YEG)',
      feature: 'Bestseller',
    },
    {
      flavour: 'Vegan Field Notes Amaro & Root Beer Pint',
      feature: 'Vegan',
    },
    {
      flavour: 'Marcona Almond & Ganache Pint',
      feature: 'Bestseller',
    },
    {
      flavour: 'Malted Chocolate Honeycomb Pint',
      feature: 'gluten-free',
    },
    {
      flavour: 'Sea Change Prairie Fairy Sorbet Pint',
      feature: 'Seasonal',
    },
  ];

  ngOnInit() {
    this.iceCream.forEach(({ flavour }) => {
      this.checkoutForm.addControl(
        flavour,
        new FormControl('', [Validators.max(12), Validators.min(0)])
      );
    });
  }

  ngOnChanges() {
    console.log('error', this.checkoutForm.errors);
  }
}
