import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  linha: string = "CF-3";
  range: string = "";
  postoPorLinha$: Observable<Object>;
  rangePorLinha$: Observable<Object>;
  postoPorLinhaRange$: Observable<Object>;
  urlbase: string = 'http://localhost:3102'; /* servidor back-end */

  constructor(private http: HttpClient) {
    this.getLinhaGroupByPosto(this.linha);
  }

  /* obtém os postos da linha com os valores de média e total */
  getLinhaGroupByPosto(linha: string): void {
    this.postoPorLinha$ = this.http.get(this.urlbase + '/group/' + linha)
      .pipe(
        /* função a ser executada no caso de algum erro*/
        catchError(this.handleError<Object>('getStatsLinha'))
      );
    /* o subscribe é disparado após a função http.get obter o resultado do servidor */
    this.postoPorLinha$.subscribe((lista) => {
      this.linha = lista[0].linha; /* seta a linha após receber a resposta */
      this.range = "";
      this.getDistinctRangeByLinha(); /* obtém os range desta linha */
    });
  }

  /* obtém os range da linha */
  getDistinctRangeByLinha(): void {
    this.rangePorLinha$ = this.http.get(this.urlbase + '/drange/' + this.linha + '')
      .pipe(
        catchError(this.handleError<Object>('getDistinctRangeByLinha'))
      );
  }

  /* obtém os postos da linha e range com os valores de média e total */
  getLinhaRangeGroupByPosto(range: string): void {
    if (range != '') {
      this.postoPorLinhaRange$ = this.http.get(this.urlbase + '/group/' + this.linha + '/' + range)
        .pipe(
          catchError(this.handleError<Object>('getLinhaRangeGroupByPosto'))
        );
      this.postoPorLinhaRange$.subscribe((lista) => {
        this.range = lista[0].range;
      });
    }
  }

  /* imprime no console a mensagem de erro */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} falhou: ${error.message}`);
      return of(result as T);
    };
  }
}
