import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LifeManagerApp';
  display = false;
  filter = '';

  onFilter(el: any) {}
}
