import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VinosPage } from './vinos.page';

describe('VinosPage', () => {
  let component: VinosPage;
  let fixture: ComponentFixture<VinosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VinosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
