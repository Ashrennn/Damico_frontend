import { Routes } from '@angular/router';
import { SiteComponent } from './site_module/site.component';
import { ArcMenuTestComponent } from './site_module/common/Architectural menu/testing/arc-menu-test.component';
import { ArchitecturalMenuTestingComponent } from './site_module/common/Architectural menu/testing/architectural-menu-testing.component';
import { StandaloneMenuTestComponent } from './site_module/common/Architectural menu/testing/standalone-menu-test.component';
import { MenuEditorComponent } from './site_module/common/Architectural menu/testing/menu-editor.component';
import { MenuComponentEditorComponent } from './site_module/common/Architectural menu/testing/menu-component-editor.component';
import { DropdownTestComponent } from './site_module/common/Architectural menu/testing/dropdown-test.component';
import { Test2Component } from './site_module/common/Architectural menu/testing/test2.component';

export const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    title: 'Damico Energy',
    children: []
  },
  {
    path: 'arc',
    component: ArcMenuTestComponent,
    title: 'Architectural Menu Testing'
  },
  {
    path: 'arc/traditional',
    component: ArchitecturalMenuTestingComponent,
    title: 'Traditional Menu Testing'
  },
  {
    path: 'arc/standalone',
    component: StandaloneMenuTestComponent,
    title: 'Standalone Menu Testing'
  },
  {
    path: 'arc/editor',
    component: MenuEditorComponent,
    title: 'Menu Editor'
  },
  {
    path: 'arc/editor/menu-components',
    component: MenuComponentEditorComponent,
    title: 'Menu Component Editor'
  },
  {
    path: 'arc/dropdowns',
    component: DropdownTestComponent,
    title: 'Dropdown Menu Testing'
  },
  {
    path: 'arc/test2',
    component: Test2Component,
    title: 'Menu Components Test'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
