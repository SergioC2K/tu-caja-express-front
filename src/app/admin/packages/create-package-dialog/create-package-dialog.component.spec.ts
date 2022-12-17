import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePackageDialogComponent } from './create-package-dialog.component';

describe('CreatePackageDialogComponent', () => {
  let component: CreatePackageDialogComponent;
  let fixture: ComponentFixture<CreatePackageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePackageDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePackageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
