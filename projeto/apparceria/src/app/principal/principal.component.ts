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
  }
  // public myInterval: number = 1500;
  // private _activeSlideIndex: number;

  // get activeSlideIndex(): number {
  //   return this._activeSlideIndex;
  // };

  // set activeSlideIndex(newIndex: number) {
  //   if (this._activeSlideIndex !== newIndex) {
  //     console.log('Active slider index would be changed!');
  //     // here's the place for your "slide.bs.carousel" logic
  //   }
  //   this._activeSlideIndex = newIndex;
  // };
}
