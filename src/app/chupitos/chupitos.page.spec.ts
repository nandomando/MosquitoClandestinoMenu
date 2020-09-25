import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChupitosPage } from './chupitos.page';

describe('ChupitosPage', () => {
  let component: ChupitosPage;
  let fixture: ComponentFixture<ChupitosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChupitosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChupitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
