import { Injectable } from '@angular/core';

@Injectable()
export class SpecialistService {


    private specialist:Doctor[] = [
        {
          id: 1,
          name: "Juan Carlos Peña",
          img: "assets/img/doc.png",
          description: "Te presentamos al doctor Juan Carlos Peña, especialista Otorrinolaringólogo, Cirujano maxilofacial con más de 10 años de experiencia mejorando la calidad de vida de las personas en El Centro de los Sentidos"
        },
        {
            id: 2,
            name: "Ramon Valdez",
            img: "assets/img/person_1.jpg",
            description: "Te presentamos al doctor Ramon Valdez, especialista Otorrinolaringólogo, Cirujano maxilofacial con más de 10 años de experiencia mejorando la calidad de vida de las personas en El Centro de los Sentidos"
        },
        {
            id: 3,
            name: "Carlos Forero",
            img: "assets/img/person_2.jpg",
            description: "Te presentamos al doctor Carlos Forero, especialista Otorrinolaringólogo, Cirujano maxilofacial con más de 10 años de experiencia mejorando la calidad de vida de las personas en El Centro de los Sentidos"
        },
        {
            id: 4,
            name: "Garret Reinolds",
            img: "assets/img/person_3.jpg",
            description: "Te presentamos al doctor Garret Reinolds, especialista Otorrinolaringólogo, Cirujano maxilofacial con más de 10 años de experiencia mejorando la calidad de vida de las personas en El Centro de los Sentidos"
        },

    ];

    getSpecialist(){
        return this.specialist;
    }
}

export interface Doctor{
    id: number;
    name: string;
    img: string;
    description: string;
  }
  