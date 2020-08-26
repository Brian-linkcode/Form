import { Component, OnInit } from '@angular/core';
import { SpecialistService, Doctor } from './services/specialist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  EspecialistaSelect:any =[];

  specialist : Doctor[];

  data = {
    name: "",
    day: "",
    month: "",
    year: "",
    hour: "", 
    link: "https://www.maestrolonganiza.co"
  }

      
  constructor( public _specialistService:SpecialistService ){}
  
  ngOnInit(){ 
    this.specialist = this._specialistService.getSpecialist();
    }

    Enviar( doctor:any ){
      //console.log(this.data)
      console.log(this.EspecialistaSelect);
    }
    
    onSelect( doctor:any ){
      //console.log(doctor.name);
      
    }


}
