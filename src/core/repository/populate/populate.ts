import { Document } from 'mongoose';
import { from, map, Observable } from 'rxjs';
import { IPopulate } from './populate.interface';

export abstract class Populate implements IPopulate {
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
