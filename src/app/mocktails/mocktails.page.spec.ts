import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MocktailsPage } from './mocktails.page';

describe('MocktailsPage', () => {
  let component: MocktailsPage;
  let fixture: ComponentFixture<MocktailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MocktailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MocktailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
