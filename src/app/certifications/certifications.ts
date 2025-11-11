import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  imports: [],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {
  certificationList=[
    {
      image:"assets/images/image 39.svg",
      name:"ISO 27001:2022",
      description:"Information Security Management for AI and data systems"
    },
    {
      image:"assets/images/image 40.svg",
      name:"ISO 9001:2015",
      description:"Quality Management for software and innovation delivery"
    },
    {
      image:"assets/images/image 42.svg",
      name:"UAE Artificial Intelligence Accreditation (MOAI)",
      description:"Alignment with UAE’s National AI Strategy 2031"
    },
    {
      image:"assets/images/image 43.svg",
      name:"GDPR & UAE Data Residency Compliance",
      description:"Full adherence to privacy and ethical AI practices"
    },
    {
      image:"assets/images/image 44.svg",
      name:"AWS & Azure AI Partner Certification",
      description:"Authorized deployment on major cloud infrastructures"
    },
    {
      image:"assets/images/image 45.svg",
      name:"Responsible AI Framework Certification",
      description:"Ensuring transparency, bias control, and ethical governance"
    },
  ]
}
