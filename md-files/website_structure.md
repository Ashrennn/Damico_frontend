# Damico Energy Website Flow Structure

## User Journey Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    WEBSITE ENTRY POINT                        │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                        LOADER SCREEN                          │
│                    (Welcome Animation)                         │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                    HEADER STRIP (FIXED)                       │
│  ┌─────────────┬─────────────────────────┬─────────────────┐  │
│  │ Social Icons│   Center Menu Options   │Language Selector│  │
│  │ (3 icons)   │   (3 equally spaced)   │  (Arabic)       │  │
│  │             │   └─ Dropdown Menus     │                 │  │
│  └─────────────┴─────────────────────────┴─────────────────┘  │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                   HEADER BAR (SCROLLABLE)                     │
│  ┌─────────────┬─────────────────────────┬─────────────────┐  │
│  │ Left Menus  │    Circular Logo        │ Right Menus     │  │
│  │ (3 items)   │                        │ (3 items)       │  │
│  │ └─ Dropdowns│                        │ └─ Dropdowns     │  │
│  └─────────────┴─────────────────────────┴─────────────────┘  │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                    ROUTER OUTLET                               │
│                    (Page Content)                              │
└─────────────────────┬───────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                   FOOTER BAR (FIXED)                          │
│                    (Footer Content)                            │
└─────────────────────────────────────────────────────────────────┘
```

## Page Navigation Flow

```
                    LANDING PAGE (/)
                    ┌─────────────────┐
                    │   Section One   │
                    │  (Hero/Intro)   │
                    └─────────────────┘
                    ┌─────────────────┐
                    │  Section Two    │
                    │ (Services)      │
                    └─────────────────┘
                    ┌─────────────────┐
                    │ Section Three   │
                    │ (Highlights)    │
                    └─────────────────┘
                    ┌─────────────────┐
                    │ Section Four    │
                    │ (Call to Action)│
                    └─────────────────┘
```

## Menu Navigation Flow

```
                    HEADER BAR MENUS
                    ┌─────────────────┐
                    │   Left Menus    │
                    │  (3 items)      │
                    │  └─ Dropdowns   │
                    └─────────────────┘
                    ┌─────────────────┐
                    │  Center Logo    │
                    │   (Circular)    │
                    └─────────────────┘
                    ┌─────────────────┐
                    │  Right Menus    │
                    │  (3 items)      │
                    │  └─ Dropdowns   │
                    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │  Menu Pages     │
                    │  ┌─────────────┐│
                    │  │   About     ││
                    │  │  Products   ││
                    │  │  Services   ││
                    │  │  Contact    ││
                    │  └─────────────┘│
                    └─────────────────┘
```

## Component Interaction Flow

```
                    USER INTERACTION
                    ┌─────────────────┐
                    │   Loader        │
                    │   (3-5 sec)     │
                    └─────────────────┘
                    ┌─────────────────┐
                    │ Header Strip    │
                    │ ┌─────────────┐ │
                    │ │Social Icons │ │
                    │ │Language Btn │ │
                    │ │Center Menu  │ │
                    │ └─────────────┘ │
                    └─────────────────┘
                    ┌─────────────────┐
                    │  Header Bar     │
                    │ ┌─────────────┐ │
                    │ │Left Menus   │ │
                    │ │Circular Logo│ │
                    │ │Right Menus  │ │
                    │ └─────────────┘ │
                    └─────────────────┘
                    ┌─────────────────┐
                    │ Page Content   │
                    │ (Router Outlet) │
                    └─────────────────┘
                    ┌─────────────────┐
                    │  Footer Bar     │
                    │ (Fixed Bottom)  │
                    └─────────────────┘
```

## Technical Flow - Detailed Angular Routing

### **App-Level Router Structure**
```
                    ANGULAR ROUTING ARCHITECTURE
                    ┌─────────────────────────────────────────┐
                    │           APP COMPONENT               │
                    │        (app.component.html)           │
                    └─────────────────┬───────────────────────┘
                                      │
                    ┌─────────────────┼───────────────────────┐
                    │                 │                       │
                    ▼                 ▼                       ▼
            ┌─────────────┐  ┌─────────────┐        ┌─────────────┐
            │Header Strip │  │Header Bar   │        │Footer Bar   │
            │(Fixed Top)  │  │(Scrollable) │        │(Fixed Bottom)│
            │             │  │             │        │             │
            │Social Icons │  │Left Menus   │        │Footer Links │
            │Language Btn │  │Circular Logo│        │Contact Info │
            │Center Menu  │  │Right Menus  │        │Social Links │
            └─────────────┘  └─────────────┘        └─────────────┘
                                      │
                                      ▼
                            ┌─────────────────┐
                            │  ROUTER OUTLET  │
                            │ (Page Content)  │
                            └─────────────────┘
```

### **Deep Nested Routing Structure**

#### **Level 1: App Router (app-routing.module.ts)**
```typescript
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/landing/landing.module')
          .then(m => m.LandingModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./pages/about/about.module')
          .then(m => m.AboutModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./pages/products/products.module')
          .then(m => m.ProductsModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./pages/services/services.module')
          .then(m => m.ServicesModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module')
          .then(m => m.ContactModule)
      }
    ]
  }
];
```

#### **Level 2: Landing Module Router (landing-routing.module.ts)**
```typescript
const landingRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'page-1',
    component: PageOneComponent
  },
  {
    path: 'page-2',
    component: PageTwoComponent
  },
  {
    path: 'page-3',
    component: PageThreeComponent
  }
];
```

#### **Level 3: Dynamic Sections Within Pages**
```
                    DEEP NESTED FOLDER STRUCTURE
                    ┌─────────────────────────────────────────┐
                    │              APP LEVEL                 │
                    │        app-routing.module.ts           │
                    └─────────────────┬───────────────────────┘
                                      │
                    ┌─────────────────┼───────────────────────┐
                    │                 │                       │
                    ▼                 ▼                       ▼
            ┌─────────────┐  ┌─────────────┐        ┌─────────────┐
            │Header Strip │  │Header Bar   │        │Footer Bar   │
            │Component    │  │Component    │        │Component    │
            └─────────────┘  └─────────────┘        └─────────────┘
                                      │
                                      ▼
                            ┌─────────────────┐
                            │  ROUTER OUTLET  │
                            │ (Page Content)  │
                            └─────────────────┘
                                      │
                                      ▼
                    ┌─────────────────────────────────────────┐
                    │            LANDING MODULE              │
                    │      landing-routing.module.ts         │
                    └─────────────────┬───────────────────────┘
                                      │
                    ┌─────────────────┼───────────────────────┐
                    │                 │                       │
                    ▼                 ▼                       ▼
            ┌─────────────┐  ┌─────────────┐        ┌─────────────┐
            │  Home Page  │  │  Page One   │        │  Page Two   │
            │ (4 Sections)│  │ (4 Sections)│        │ (4 Sections)│
            └─────────────┘  └─────────────┘        └─────────────┘
                                      │
                                      ▼
                            ┌─────────────────┐
                            │  Page Three     │
                            │ (4 Sections)    │
                            └─────────────────┘
```

### **Component Communication Flow**

#### **Header Bar → Page Content Communication**
```typescript
// Header Bar Component
export class HeaderBarComponent {
  @Output() menuSelected = new EventEmitter<string>();
  
  onMenuClick(menuItem: string) {
    this.menuSelected.emit(menuItem);
    // Navigate to deep nested route
    this.router.navigate(['/', menuItem]);
  }
}
```

#### **Deep Nested Route Navigation**
```typescript
// Navigation from Header Bar to Deep Nested Routes
const deepRoutes = {
  'about': '/about/company/history',
  'products': '/products/crude-oil/details',
  'services': '/services/bunker-fuel/info',
  'contact': '/contact/offices/dubai'
};
```

### **Lazy Loading Implementation**

#### **Module Structure for Deep Nesting with Dynamic Sections**
```
pages/
├── landing/
│   ├── landing.module.ts
│   ├── landing-routing.module.ts
│   ├── home/
│   │   ├── home.component.ts
│   │   └── sections/
│   │       ├── section-one/
│   │       ├── section-two/
│   │       ├── section-three/
│   │       └── section-four/
│   ├── page-one/
│   │   ├── page-one.component.ts
│   │   └── sections/
│   │       ├── section-one/
│   │       ├── section-two/
│   │       ├── section-three/
│   │       └── section-four/
│   ├── page-two/
│   │   ├── page-two.component.ts
│   │   └── sections/
│   │       ├── section-one/
│   │       ├── section-two/
│   │       ├── section-three/
│   │       └── section-four/
│   └── shared-sections/
│       ├── section-one/
│       ├── section-two/
│       ├── section-three/
│       └── section-four/
├── about/
│   ├── about.module.ts
│   ├── about-routing.module.ts
│   └── pages/
│       ├── company/
│       │   ├── company.component.ts
│       │   └── sections/
│       │       ├── section-one/
│       │       ├── section-two/
│       │       ├── section-three/
│       │       └── section-four/
│       ├── history/
│       │   ├── history.component.ts
│       │   └── sections/
│       │       ├── section-one/
│       │       ├── section-two/
│       │       ├── section-three/
│       │       └── section-four/
│       └── team/
│           ├── team.component.ts
│           └── sections/
│               ├── section-one/
│               ├── section-two/
│               ├── section-three/
│               └── section-four/
├── products/
│   ├── products.module.ts
│   ├── products-routing.module.ts
│   └── categories/
│       ├── crude-oil/
│       │   ├── crude-oil.component.ts
│       │   └── sections/
│       │       ├── section-one/
│       │       ├── section-two/
│       │       ├── section-three/
│       │       └── section-four/
│       ├── bunker-fuel/
│       │   ├── bunker-fuel.component.ts
│       │   └── sections/
│       │       ├── section-one/
│       │       ├── section-two/
│       │       ├── section-three/
│       │       └── section-four/
│       └── gas-oil/
│           ├── gas-oil.component.ts
│           └── sections/
│               ├── section-one/
│               ├── section-two/
│               ├── section-three/
│               └── section-four/
└── services/
    ├── services.module.ts
    ├── services-routing.module.ts
    └── offerings/
        ├── refining/
        │   ├── refining.component.ts
        │   └── sections/
        │       ├── section-one/
        │       ├── section-two/
        │       ├── section-three/
        │       └── section-four/
        ├── blending/
        │   ├── blending.component.ts
        │   └── sections/
        │       ├── section-one/
        │       ├── section-two/
        │       ├── section-three/
        │       └── section-four/
        └── distribution/
            ├── distribution.component.ts
            └── sections/
                ├── section-one/
                ├── section-two/
                ├── section-three/
                └── section-four/
```

### **Router Configuration Details**

#### **App-Level Router (app-routing.module.ts)**
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/landing/landing.module')
          .then(m => m.LandingModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./pages/about/about.module')
          .then(m => m.AboutModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./pages/products/products.module')
          .then(m => m.ProductsModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./pages/services/services.module')
          .then(m => m.ServicesModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module')
          .then(m => m.ContactModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

#### **Landing Module Router (landing-routing.module.ts)**
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: SectionOneComponent
      },
      {
        path: 'section-two',
        component: SectionTwoComponent
      },
      {
        path: 'section-three',
        component: SectionThreeComponent
      },
      {
        path: 'section-four',
        component: SectionFourComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
```

### **Component Template Structure**

#### **App Component Template (app.component.html)**
```html
<!-- Fixed Header Strip -->
<app-header-strip></app-header-strip>

<!-- Scrollable Header Bar -->
<app-header-bar></app-header-bar>

<!-- Main Router Outlet for Page Content -->
<router-outlet></router-outlet>

<!-- Fixed Footer Bar -->
<app-footer-bar></app-footer-bar>
```

#### **Home Component Template (home.component.html)**
```html
<!-- Landing Page with Dynamic Sections -->
<section class="section-one">
  <app-section-one></app-section-one>
</section>

<section class="section-two">
  <app-section-two></app-section-two>
</section>

<section class="section-three">
  <app-section-three></app-section-three>
</section>

<section class="section-four">
  <app-section-four></app-section-four>
</section>
```

#### **Page One Component Template (page-one.component.html)**
```html
<!-- Page One with Dynamic Sections -->
<section class="section-one">
  <app-section-one></app-section-one>
</section>

<section class="section-two">
  <app-section-two></app-section-two>
</section>

<section class="section-three">
  <app-section-three></app-section-three>
</section>

<section class="section-four">
  <app-section-four></app-section-four>
</section>
```

#### **Dynamic Section Components**
```typescript
// Section components are reusable across different pages
export class SectionOneComponent {
  @Input() content: any; // Dynamic content
  @Input() config: any;  // Dynamic configuration
}

export class SectionTwoComponent {
  @Input() content: any; // Dynamic content
  @Input() config: any;  // Dynamic configuration
}

export class SectionThreeComponent {
  @Input() content: any; // Dynamic content
  @Input() config: any;  // Dynamic configuration
}

export class SectionFourComponent {
  @Input() content: any; // Dynamic content
  @Input() config: any;  // Dynamic configuration
}
```

### **Navigation Flow Summary**

1. **User enters website** → Loader screen
2. **Loader completes** → Header strip appears (fixed)
3. **Header bar loads** → Menu items available
4. **User clicks menu** → Router navigates to deep nested route
5. **Page content loads** → Specific component renders in router outlet
6. **Footer remains** → Fixed at bottom across all pages

### **Key Technical Points**

- **App Router**: Never touched, only handles main layout
- **Deep Nesting**: All page content in separate modules
- **Lazy Loading**: Each module loads independently
- **Component Isolation**: Header/Footer never change
- **Router Outlet**: Only page content changes
- **Dynamic Sections**: Reusable section components across pages
- **Performance**: Modules load on demand
- **Scalability**: Easy to add new sections/pages
- **Dynamic Content**: Placeholders for dynamic content injection
- **Modular Sections**: Each page has 4 dynamic sections

## Key Features Flow

```
                    RESPONSIVE DESIGN
                    ┌─────────────────┐
                    │   Mobile First  │
                    │  └─ Touch       │
                    │  └─ Swipe       │
                    │  └─ Gestures    │
                    └─────────────────┘
                    ┌─────────────────┐
                    │   Tablet        │
                    │  └─ Touch       │
                    │  └─ Hover       │
                    └─────────────────┘
                    ┌─────────────────┐
                    │   Desktop       │
                    │  └─ Hover       │
                    │  └─ Click       │
                    │  └─ Keyboard    │
                    └─────────────────┘
```