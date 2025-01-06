import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { toast, NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'app-root',
  imports: [NgxSonnerToaster],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vite-angular-tuto';

  constructor(private toastr: ToastrService) {}

  openAlert() {
    Swal.fire(
      'I am SweetAlert',
      'Here i am using sweetalert for popup',
      'success'
    );
  }

  openToastr() {
    this.toastr.success('We got it!');
  }

  openSonner() {
    toast.success('We got it Again!');
  }
}
