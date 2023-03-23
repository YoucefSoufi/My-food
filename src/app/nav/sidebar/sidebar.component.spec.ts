import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let breakpointObserverSpy: jasmine.SpyObj<BreakpointObserver>;
  let sidenavSpy: jasmine.SpyObj<MatSidenav>;

  beforeEach(() => {
    const state: BreakpointState = {
      matches: true,
      breakpoints: {
        xs: false,
        sm: false,
        md: false,
        lg: false,
        xl: false
      }
    };
    const breakpointObserverSpyObj = jasmine.createSpyObj('BreakpointObserver', ['observe']);
    breakpointObserverSpyObj.observe.and.returnValue(of(state));
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SidebarComponent],
      schemas: [NO_ERRORS_SCHEMA], // ignore unknown elements and attributes
      providers: [
        { provide: BreakpointObserver, useValue: breakpointObserverSpyObj },
      ],
    })

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const sidenavSpyObj = jasmine.createSpyObj('MatSidenav', ['toggle']);

    breakpointObserverSpy = TestBed.inject(BreakpointObserver) as jasmine.SpyObj<BreakpointObserver>;
    sidenavSpy = sidenavSpyObj as jasmine.SpyObj<MatSidenav>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
