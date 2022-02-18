import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  personArr: Person[] = [
    new Person('/assets/dean_joubert.jpg', 'Dean', 'Joubert', '067 385 9688', 'dean@awesomelegend.co.za', '36 Onyx', '35 Lemonwood Street', 'Centurion', 'Gauteng', '1610', 'Myself', 7),
    new Person('/assets/rebecca_smith.jpg', 'Rebecca', 'Smith', '083 245 9618', 'rebecca@g-iplanning.co.za', '36 Onyx', '35 Lemonwood Street', 'Centurion', 'Gauteng', '1610', 'Best Friend', 9),
    new Person('/assets/Placeholder_Person.jpg', 'Dean', 'Joubert', '067 385 9688', 'dean@awesomelegend.co.za', '36 Onyx', '35 Lemonwood Street', 'Centurion', 'Gauteng', '1610', 'Myself', 7),
    new Person('/assets/Placeholder_Person.jpg', 'Dean', 'Joubert', '067 385 9688', 'dean@awesomelegend.co.za', '36 Onyx', '35 Lemonwood Street', 'Centurion', 'Gauteng', '1610', 'Myself', 7),
    new Person('/assets/Placeholder_Person.jpg', 'Dean', 'Joubert', '067 385 9688', 'dean@awesomelegend.co.za', '36 Onyx', '35 Lemonwood Street', 'Centurion', 'Gauteng', '1610', 'Myself', 7),
    new Person('/assets/Placeholder_Person.jpg', 'Dean', 'Joubert', '067 385 9688', 'dean@awesomelegend.co.za', '36 Onyx', '35 Lemonwood Street', 'Centurion', 'Gauteng', '1610', 'Myself', 7)
  ];

  constructor() {

  }

  ngOnInit(): void {
  }

}
