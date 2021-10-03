import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RecentlyAddedComponent } from './recently-added.component';
import { TranslateService } from '../../services/translate/translate.service';

describe('RecentlyAddedComponent', () => {
  let component: RecentlyAddedComponent;

  let fixture: ComponentFixture<RecentlyAddedComponent>;

  beforeEach(async () => {
    const TranslateServiceSpy = jasmine.createSpyObj('TranslateService', [
      'Service',
    ]);

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [RecentlyAddedComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [FormsModule, { provide: TranslateService, useValue: TranslateServiceSpy }],
    });

    fixture = TestBed.createComponent(RecentlyAddedComponent);

    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
