import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs?: Subscription;
  
  
  constructor() {

    // this.retornaObservable().pipe(
    //   retry( 1 )
    // ).subscribe({
    //   next: valor => console.log('Subs:', valor ),
    //   error: error => console.warn('Error', error),
    //   complete: () => console.log('Obs terminado') 
    // });

    this.intervalSubs = this.retornaIntervalo().subscribe(
      console.log
    );    

  }

  ngOnDestroy(): void {
    this.intervalSubs?.unsubscribe();
  }


  retornaIntervalo(): Observable<number> {

    return interval( 500 ).pipe(
      // take( 10 ),
      map( valor => valor + 1 ),
      filter( p => p % 2 === 0 ),      
    );

  }

  retornaObservable(): Observable<number> {
    
    return new Observable<number>( observer => {
      
      let i = -1;
      const intervalo = setInterval( () => {

        i++;
        observer.next( i );        

        if( i == 4 ) {
          clearInterval( intervalo );
          observer.complete();
        }

        if ( i == 2 ) {          
          clearInterval( intervalo );
          observer.error('i llegó al valor de 2');          
        }

      }, 1000 );

    });
    
  }

}
