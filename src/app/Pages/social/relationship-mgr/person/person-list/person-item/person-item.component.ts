import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/person.model';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.scss'],
})
export class PersonItemComponent implements OnInit {
  @Input() person: Person;
  @Input() profilePictureUrl: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() phoneNumber: string;
  @Input() emailAddress: string;
  @Input() AddressLine1: string;
  @Input() AddressLine2: string;
  @Input() AddressCity: string;
  @Input() AddressProvice: string;
  @Input() AddressPostalCode: string;
  @Input() relationship: string;
  @Input() relationshipRating: number = 5;

  constructor() {}

  ngOnInit(): void {}

  onPersonSelected() {
    alert('Here');
  }
}
