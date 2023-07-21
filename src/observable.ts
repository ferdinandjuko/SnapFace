import { Observable, interval, of, concat } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

// L'Observable messages$ qui émet les chaînes 'first', 'second' et 'third' à une seconde d'écart
const messages$ = interval(1000).pipe(
  take(3), // Limiter à 3 émissions
  concat(of('third')), // Ajouter la complétion après les émissions
);

// La fonction processMessage$ qui retourne un Observable émettant le message avec le mot 'processed'
function processMessage$(message: string): Observable<string> {
  return of(message).pipe(
    concat(of(message + ' processed')), // Ajouter le mot 'processed'
  );
}

// Utilisation de messages$ et processMessage$
messages$.pipe(
  mergeMap(message => processMessage$(message))
).subscribe((message: string) => console.log(message));
