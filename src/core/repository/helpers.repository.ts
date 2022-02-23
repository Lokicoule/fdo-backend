import { Document } from 'mongoose';
import { from, map, Observable } from 'rxjs';

export abstract class HelpersRepository {
  populate<RT>(
    document: Document,
    path: string,
    model: string,
    cb: (any) => RT,
  ): Observable<RT> {
    return from(
      document.populate({
        path,
        model,
      }),
    ).pipe(map(cb));
  }
}
