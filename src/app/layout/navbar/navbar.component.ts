import { Component } from '@angular/core';
import { NoahNavbarComponent } from '@dandy1103/ui';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NoahNavbarComponent],
  template: `<noah-navbar repo="noah-payroll" fallbackLabel="薪資" />`,
})
export class NavbarComponent {}
