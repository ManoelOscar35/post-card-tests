import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormComponent } from './post-form.component';

describe('PostFormComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill input title correctly', () => {
    // Simula usuário digitando
    const title = fixture.nativeElement.querySelector('input[name="title"]');
    title.value = 'Post title';
    title.dispatchEvent(new Event('input'));

    // Garante que o valor foi preenchido corretamente
    expect(component.form.controls.title.value).toBe('Post title');
  });

  it('should fill input body correctly', () => {
    // Simula usuário digitando
    const body = fixture.nativeElement.querySelector('textarea[name="body"]');
    body.value = 'Post body';
    body.dispatchEvent(new Event('input'));

    // Garante que o valor foi preenchido corretamente
    expect(component.form.controls.body.value).toBe('Post body');
  });

  it('should submit form correctly', () => {
    spyOn(component.submitForm, 'emit');

    // Simula usuário digitando
    const title = fixture.nativeElement.querySelector('input[name="title"]');
    title.value = 'Post title';
    title.dispatchEvent(new Event('input'));

    // Simula usuário digitando
    const body = fixture.nativeElement.querySelector('textarea[name="body"]');
    body.value = 'Post body';
    body.dispatchEvent(new Event('input'));
    
    // Simula usuário submetendo o formulário
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    // Garante que o evento foi emitido corretamente
    expect(component.submitForm.emit).toHaveBeenCalledWith({
      title: 'Post title',
      body: 'Post body'
    });
});
});
