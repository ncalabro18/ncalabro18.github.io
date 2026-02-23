import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPage } from './about';

describe('About', () => {
  let component: AboutPage;
  let fixture: ComponentFixture<AboutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render h1', async () => {
    const fixture = TestBed.createComponent(AboutPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Nicholas J. Calabro');
  });

  it('should render h2', async () => {
    const fixture = TestBed.createComponent(AboutPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('University of Massachusetts, Lowell');
  });
});
