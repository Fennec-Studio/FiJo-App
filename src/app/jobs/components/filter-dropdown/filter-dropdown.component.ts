import { Component, Input, NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, CommonModule],
})
export class FilterDropdownComponent {
  @Input()
  public labelMenu: string = '';

  @Input()
  public filterOptions: string[] = [''];

}
