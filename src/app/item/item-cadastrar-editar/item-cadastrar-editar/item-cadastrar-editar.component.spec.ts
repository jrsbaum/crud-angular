import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCadastrarEditarComponent } from './item-cadastrar-editar.component';

describe('ItemCadastrarEditarComponent', () => {
  let component: ItemCadastrarEditarComponent;
  let fixture: ComponentFixture<ItemCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCadastrarEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
