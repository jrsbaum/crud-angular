import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemCadastrarEditarRoutingModule } from './item-cadastrar-editar-routing.module';
import { ItemCadastrarEditarComponent } from './item-cadastrar-editar/item-cadastrar-editar.component';

@NgModule({
  declarations: [ItemCadastrarEditarComponent],
  imports: [CommonModule, ItemCadastrarEditarRoutingModule],
})
export class ItemCadastrarEditarModule {}
