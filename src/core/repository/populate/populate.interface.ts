import { Document } from 'mongoose';
import { Observable } from 'rxjs';

export interface IPopulate {
  populate<RT>(
    document: Document,
    path: string,
    model: string,
    cb: (any) => RT,
  ): Observable<RT>;
}
