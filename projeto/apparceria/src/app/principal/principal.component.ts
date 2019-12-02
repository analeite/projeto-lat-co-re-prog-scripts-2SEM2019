import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  constructor(private servico: ServicoService) { }

  ngOnInit() {
    // $('#carouselSite').on('slide.bs.carousel', function () {
    //   // Faça algo...
    // })

  }
}
