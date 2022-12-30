import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ItemService } from '../services/item.service';
import { Item } from '../interfaces/IItem';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ItemResolverService implements Resolve<Item> {
  constructor(private itemService: ItemService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params['id'];

    if (id) {
      return this.itemService.pesquisarPorId(id);
    }
    return of({} as Item);
  }
}
