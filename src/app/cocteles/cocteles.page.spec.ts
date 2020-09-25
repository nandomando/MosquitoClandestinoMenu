import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoctelesPage } from './cocteles.page';

describe('CoctelesPage', () => {
  let component: CoctelesPage;
  let fixture: ComponentFixture<CoctelesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoctelesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoctelesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
