import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { dataJob } from "../interface/jobs.interface";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class JobsService {

  public idJob = new BehaviorSubject<number>(0);

  public inputJobList: dataJob[] = [
    {
      jobID: 0,
      jobImg: "/assets/img/companies/FEMSA_Logo.png",
      jobTitle: "Desarrollador Frontend",
      jobPayment: 15000,
      jobFrecuencyPayment: "Quincenal",
      jobLocation: "Ciudad de México, CDMX, Por Ahí",
      jobEnterprise: "Grupo FEMSA",
      jobContractType: "Contrato por tiempo indeterminado",
      jobTime: "Tiempo completo",
      jobType: "Presencial",
      jobDescription: "Empresa 100% Mexicana. Lider en Desarrollo, solicita: Desarrollador Front End Responsabilidades: Traducir diseños a lenguaje de programación. Dominar los lenguajes de programación HTML, CSS y JavaScript para poder aplicar el diseño a la web o app que se proponga.",
      jobEnterpriseRate: 5,
      // jobTags: ["HTML", "CSS", "JavaScript", "Frontend", "Desarrollador", "FEMSA", "Grupo FEMSA", "Tiempo completo", "Presencial", "Contrato por tiempo indeterminado", "Ciudad de México", "CDMX", "Lago Zurich"]
    },
    {
      jobID: 1,
      jobImg: "/assets/img/companies/Banco_Santander_Logotipo.png",
      jobTitle: "Desarrollador Backend",
      jobPayment: 40000,
      jobFrecuencyPayment: "Mensual",
      jobLocation: "Ciudad de México, CDMX, Lago Zurich",
      jobEnterprise: "Banco Santander",
      jobContractType: "Contrato por tiempo indeterminado",
      jobTime: "Medio tiempo",
      jobType: "Remoto",
      jobDescription: "Empresa 100% Mexicana. Lider en Desarrollo, solicita: Desarrollador Back End Responsabilidades: Hacer cosas de Backend.",
      jobEnterpriseRate: 4.5,
      // jobTags: ["HTML", "CSS", "JavaScript", "
    },
  ]

  constructor( ) { }
}
