"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SpecialistService = void 0;
var core_1 = require("@angular/core");
var SpecialistService = /** @class */ (function () {
    function SpecialistService() {
        this.specialist = [
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
    }
    SpecialistService.prototype.getSpecialist = function () {
        return this.specialist;
    };
    SpecialistService = __decorate([
        core_1.Injectable()
    ], SpecialistService);
    return SpecialistService;
}());
exports.SpecialistService = SpecialistService;
