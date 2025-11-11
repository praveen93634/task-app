import { Component } from '@angular/core';
import { Cards } from "../shared/components/cards/cards";

@Component({
  selector: 'app-hfeature',
  imports: [Cards],
  templateUrl: './hfeature.html',
  styleUrl: './hfeature.css',
})
export class Hfeature {
  featureList=[
    {
      title:"Ai EnabledSoftware Services",
      icon:'assets/images/Mask group.svg',
      description:"Autonomous AI delivers end-to-end solutions—from AI strategy and consulting to full-scaledeployment. We help organizations integrate computer vision, NLP, and automation into their workflows while ensuring compliance and responsible AI governance"
    },
    {
      title:"AI Infrastructure  & Data Services",
      icon:'assets/images/Mask group.svg',
      description:"Autonomous AI delivers end-to-end solutions—from AI strategy and consulting to full-scaledeployment. We help organizations integrate computer vision, NLP, and automation into their workflows while ensuring compliance and responsible AI governance"
    },
    {
      title:"AI-Powered Business Evolution",
      icon:'assets/images/Mask group (1).svg',
      description:"Autonomous AI delivers end-to-end solutions—from AI strategy and consulting to full-scaledeployment. We help organizations integrate computer vision, NLP, and automation into their workflows while ensuring compliance and responsible AI governance"
    },
    {
      title:"Emerging Innovation",
      icon:'assets/images/Mask group (2).svg',
      description:"Autonomous AI delivers end-to-end solutions—from AI strategy and consulting to full-scaledeployment. We help organizations integrate computer vision, NLP, and automation into their workflows while ensuring compliance and responsible AI governance"
    },
  ]
}
