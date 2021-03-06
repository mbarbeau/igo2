import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModule } from '../../test.module';
import { SharedModule } from '../../shared/shared.module';

import { ToolboxComponent } from './toolbox.component';
import { ToolService } from '../shared/tool.service';

// We don't want to import external tool. We'll have to think of
// different tests for this component
import { SearchToolComponent } from '../../search/search-tool/search-tool.component';
import { SearchResultComponent } from '../../search/search-result/search-result.component';

describe('ToolboxComponent', () => {
  let component: ToolboxComponent;
  let fixture: ComponentFixture<ToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestModule,
        SharedModule
      ],
      declarations: [
        ToolboxComponent,
        SearchToolComponent,
        SearchResultComponent
      ],
      providers: [
        ToolService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
