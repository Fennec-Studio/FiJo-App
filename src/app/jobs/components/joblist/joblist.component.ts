import { Component } from '@angular/core';
import { JobsInfo } from 'src/app/shared/interfaces/JobsInfo';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './joblist.component.html'
})
export class JoblistComponent {
  JobLists: JobsInfo[] = [{
      JID: 1,
      JOBTITLE: "Desarrollador Frontend",
      JOBDESCRIPTION: "Bsarrollo web.",
      LOCATION: "Ciudad emplo",
      REQUERIMENTS: "Requisit efectiva.",
      BENEFITS: "Beneficios: Salares de capacitación, ambiente de trabajo colaborativo.",
      STARTDATE: "25-09-2002",
      EMPLOYMENTTYPE: "Tiempleto",
      SALARY: "$50,000-$60,000 anuales",
      APPLICATION: "21-08-2025",
      CONTACT: "Para consulta(123) 456-7890",
      STATUS: 1,
      EID_FK: 1,
      CREATION_DATE: "25-09-2002"
    },
    {
      JID: 1,
      JOBTITLE: "Desarrollador Backend",
      JOBDESCRIPTION: "Bsarrollo web.",
      LOCATION: "Ciudad emplo",
      REQUERIMENTS: "Requisit efectiva.",
      BENEFITS: "Beneficios: Salares de capacitación, ambiente de trabajo colaborativo.",
      STARTDATE: "25-09-2002",
      EMPLOYMENTTYPE: "Tiempleto",
      SALARY: "$50,000-$60,000 anuales",
      APPLICATION: "21-08-2025",
      CONTACT: "Para consulta(123) 456-7890",
      STATUS: 1,
      EID_FK: 1,
      CREATION_DATE: "25-09-2002"
    },
    {
      JID: 1,
      JOBTITLE: "Analista de datos",
      JOBDESCRIPTION: "Bsarrollo web.",
      LOCATION: "Ciudad emplo",
      REQUERIMENTS: "Requisit efectiva.",
      BENEFITS: "Beneficios: Salares de capacitación, ambiente de trabajo colaborativo.",
      STARTDATE: "25-09-2002",
      EMPLOYMENTTYPE: "Tiempleto",
      SALARY: "$50,000-$60,000 anuales",
      APPLICATION: "21-08-2025",
      CONTACT: "Para consulta(123) 456-7890",
      STATUS: 1,
      EID_FK: 1,
      CREATION_DATE: "25-09-2002"
    },
    {
      JID: 1,
      JOBTITLE: "Nombre de empleo largo para probar el front",
      JOBDESCRIPTION: "Bsarrollo web.",
      LOCATION: "Ciudad emplo",
      REQUERIMENTS: "Requisit efectiva.",
      BENEFITS: "Beneficios: Salares de capacitación, ambiente de trabajo colaborativo.",
      STARTDATE: "25-09-2002",
      EMPLOYMENTTYPE: "Tiempleto",
      SALARY: "$50,000-$60,000 anuales",
      APPLICATION: "21-08-2025",
      CONTACT: "Para consulta(123) 456-7890",
      STATUS: 1,
      EID_FK: 1,
      CREATION_DATE: "25-09-2002"
    },
    {
      JID: 1,
      JOBTITLE: "Nombre del empleo largo",
      JOBDESCRIPTION: "Bsarrollo web.",
      LOCATION: "Ciudad emplo",
      REQUERIMENTS: "Requisit efectiva.",
      BENEFITS: "Beneficios: Salares de capacitación, ambiente de trabajo colaborativo.",
      STARTDATE: "25-09-2002",
      EMPLOYMENTTYPE: "Tiempleto",
      SALARY: "$50,000-$60,000 anuales",
      APPLICATION: "21-08-2025",
      CONTACT: "Para consulta(123) 456-7890",
      STATUS: 1,
      EID_FK: 1,
      CREATION_DATE: "25-09-2002"
    },
    {
      JID: 1,
      JOBTITLE: "Prueba de la longitud del empleo",
      JOBDESCRIPTION: "Bsarrollo web.",
      LOCATION: "Ciudad emplo",
      REQUERIMENTS: "Requisit efectiva.",
      BENEFITS: "Beneficios: Salares de capacitación, ambiente de trabajo colaborativo.",
      STARTDATE: "25-09-2002",
      EMPLOYMENTTYPE: "Tiempleto",
      SALARY: "$50,000-$60,000 anuales",
      APPLICATION: "21-08-2025",
      CONTACT: "Para consulta(123) 456-7890",
      STATUS: 1,
      EID_FK: 1,
      CREATION_DATE: "25-09-2002"
    }
  ]
}
