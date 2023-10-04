import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSimplesComponent } from './list-simples.component';

describe('ListSimplesComponent', () => {
  let component: ListSimplesComponent;
  let fixture: ComponentFixture<ListSimplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSimplesComponent]
    });
    fixture = TestBed.createComponent(ListSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
