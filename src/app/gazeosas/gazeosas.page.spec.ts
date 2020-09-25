import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GazeosasPage } from './gazeosas.page';

describe('GazeosasPage', () => {
  let component: GazeosasPage;
  let fixture: ComponentFixture<GazeosasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GazeosasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GazeosasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
