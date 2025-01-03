import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vite-angular-tuto';

  openAlert() {
    Swal.fire(
      'I am SweetAlert',
      'Here i am using sweetalert for popup',
      'success'
    );
  }
}
