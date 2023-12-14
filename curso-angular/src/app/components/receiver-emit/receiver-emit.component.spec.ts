import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverEmitComponent } from './receiver-emit.component';

describe('ReceiverEmitComponent', () => {
  let component: ReceiverEmitComponent;
  let fixture: ComponentFixture<ReceiverEmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiverEmitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceiverEmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
