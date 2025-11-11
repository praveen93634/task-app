import { Component } from '@angular/core';
import { Header } from "../shared/components/header/header";
import { Hero } from "../hero/hero";
import { Quickabout } from "../quickabout/quickabout";
import { Hfeature } from "../hfeature/hfeature";
import { Numberspeaks } from "../numberspeaks/numberspeaks";
import { Certifications } from "../certifications/certifications";
import { Softlight } from "../softlight/softlight";
import { Footer } from "../shared/components/footer/footer";

@Component({
  selector: 'app-home-layout',
  imports: [Hero, Header, Quickabout, Hfeature, Numberspeaks, Certifications, Softlight, Footer],
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.css',
})
export class HomeLayout {

}
