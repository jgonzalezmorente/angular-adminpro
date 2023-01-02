import { Component } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {
  
  
  constructor() {
    
    
    const obs$ = new Observable( observer => {
      
      let i = -1;
      const intervalo = setInterval( () => {

        i++;
        console.log(i);
        observer.next( i );        

        if( i == 4 ) {
          clearInterval( intervalo );
          observer.complete();
        }

        if ( i == 2 ) {
          console.log('i = 2.... error!');
          clearInterval( intervalo );
          observer.error('i llegó al valor de 2');          
        }

      }, 1000 );

    });

    obs$.pipe(
      retry( 1 )
    ).subscribe({
      next: valor => console.log('Subs:', valor ),
      error: error => console.warn('Error', error),
      complete: () => console.log('Obs terminado') 
    });

  }

}
