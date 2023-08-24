import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

chapito = (param:string, param1?:number) => {
  console.log("hola")
  console.log(param, param1)
}

}
