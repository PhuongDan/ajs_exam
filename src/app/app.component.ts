import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule // Import CommonModule ở đây nếu bạn sử dụng các directive như ngFor và ngIf trong AppComponent
  ]
})
export class AppComponent {
  cities = [
    { name: 'Rome', employees: [{ name: 'John Doe', position: 'Team Lead',avatar:'https://png.pngtree.com/png-clipart/20240321/original/pngtree-avatar-job-businessman-flat-portrait-of-man-png-image_14641965.png' }, { name: 'Jane Smith', position: 'Developer',avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKNwdQbVOo172aY_76IFKffFWu7h_SiuZQA&usqp=CAU' }] },
    { name: 'Paris', employees: [{ name: 'Robert King', position: 'Team Lead',avatar:'https://png.pngtree.com/png-clipart/20240321/original/pngtree-avatar-job-businessman-flat-portrait-of-man-png-image_14641965.png' }, { name: 'Michael Suyama', position: 'Developer',avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKNwdQbVOo172aY_76IFKffFWu7h_SiuZQA&usqp=CAU'  },{ name: 'Margaret Peacook', position: 'Developer',avatar:'https://banner2.cleanpng.com/20180330/yde/kisspng-computer-icons-avatar-businessperson-company-avatar-5abe8140104dd3.1211798015224343680668.jpg' }] },
    { name: 'London', employees: [{ name: 'David Brown', position: 'Team Lead',avatar:'https://png.pngtree.com/png-clipart/20240321/original/pngtree-avatar-job-businessman-flat-portrait-of-man-png-image_14641965.png' }, { name: 'Emma Johnson', position: 'Developer',avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKNwdQbVOo172aY_76IFKffFWu7h_SiuZQA&usqp=CAU'  }] }
  ];

  selectedCity: any;

  selectCity(city: any) {
    this.selectedCity = city;
  }
}
