import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioUsuariosCadastradosComponent } from './relatorio-usuarios-cadastrados.component';

describe('RelatorioUsuariosCadastradosComponent', () => {
  let component: RelatorioUsuariosCadastradosComponent;
  let fixture: ComponentFixture<RelatorioUsuariosCadastradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioUsuariosCadastradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioUsuariosCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
