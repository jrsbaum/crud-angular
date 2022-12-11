import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemListarComponent } from './item-listar.component';

describe('ItemListarComponent', () => {
  let component: ItemListarComponent;
  let fixture: ComponentFixture<ItemListarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
