import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Cacheable } from 'ngx-cacheable';
import { Subject } from 'rxjs/Subject';

const productNotifier = new Subject();

@Injectable()
export class TestService {

  private index:number = 0;

  constructor() {
  }

  @Cacheable({
    cacheBusterObserver: productNotifier
  })
  public getNothing(): Observable<any> {
    return Observable.of('Test Service ' + this.index++);
  }

  public clearCache() {
    productNotifier.next();
  }

}
