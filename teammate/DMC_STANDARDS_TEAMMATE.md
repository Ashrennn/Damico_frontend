# DAMICO COMPONENT DEVELOPMENT STANDARDS
**Version 1.0.0 | Last Updated: March 2024**

> **⚠️ IMPORTANT: FOLLOW THESE STANDARDS PRECISELY ⚠️**
> 
> This document outlines the DAMICO development standards for creating standalone components.
> All components must adhere to these standards to ensure seamless integration with the main application.

## 1. Component Structure Overview

Each component package should be delivered as a standalone folder with the following structure:

```
component-name/
├── component-name.component.ts     # Component logic
├── component-name.component.html   # Template
├── component-name.component.css    # Styles
└── README.md                       # Component documentation
```

## 2. File Naming Conventions

### 2.1 Component Files

- All filenames must be lowercase with hyphens separating words
- Component files must follow the pattern: `[component-name].component.[extension]`
- Example: `product-card.component.ts`, `product-card.component.html`, `product-card.component.css`

### 2.2 Component Class Names

- Component class names must be in PascalCase and end with "Component"
- Example: `ProductCardComponent`

### 2.3 Component Selectors

- All component selectors must use the `dmc-` prefix
- Selectors should be kebab-case (lowercase with hyphens)
- Example: `dmc-product-card`

## 3. Component ID System

### 3.1 ID Format

Every component must have a unique ID following this format:
`[DMC]-[TYPE]-[NUMBER]`

### 3.2 Type Codes

- **CMP**: Component
- **DIR**: Directive
- **SVC**: Service
- **INT**: Interface
- **MOD**: Module
- **PIP**: Pipe
- **UTL**: Utility
- **CFG**: Configuration

### 3.3 Numbering System

- **1000-1999**: Layout components
- **2000-2999**: Form components
- **3000-3999**: Data display components
- **4000-4999**: Navigation components
- **5000-5999**: Feedback components
- **6000-6999**: Media components
- **7000-7999**: Utility components
- **8000-8999**: Custom components
- **9000-9999**: Reserved for future use

### 3.4 ID Assignment

- Check the FILE_TRACKING_TEAMMATE.md file for existing IDs
- Choose the next available number in the appropriate range
- Add your component ID to the tracking file

## 4. Component Documentation

### 4.1 Component File Header

Every TypeScript component file must include this header:

```typescript
/**
 * ==========================================
 * [COMPONENT NAME]
 * Component ID: [DMC-CMP-XXXX]
 * 
 * [Brief description of the component's purpose]
 * ==========================================
 * 
 * @description
 * [Detailed description of what the component does,
 * its features, and use cases]
 * 
 * @usage
 * ```html
 * <dmc-component-name [input]="value"></dmc-component-name>
 * ```
 * 
 * @deviceTypes
 * - mobile-small  (≤320px)
 * - mobile-large (321-480px)
 * - tablet-small (481-768px)
 * - tablet-large (769-992px)
 * - laptop-small (993-1200px)
 * - laptop-large (1201-1440px)
 * - desktop-small (1441-1920px)
 * - desktop-large (>1920px)
 * 
 * @lastModified [YYYY-MM-DD]
 */
```

### 4.2 Method Documentation

All public methods must be documented:

```typescript
/**
 * @method methodName
 * @description What this method does and why
 * 
 * @param {Type} paramName - Description of the parameter
 * @returns {Type} Description of the return value
 */
methodName(param: Type): ReturnType {
  // Implementation
}
```

### 4.3 Input/Output Documentation

All @Input and @Output properties must be documented:

```typescript
/**
 * @input propertyName
 * @description Purpose of this input property
 */
@Input() propertyName: Type;

/**
 * @output eventName
 * @description When this event is emitted and what data it contains
 */
@Output() eventName = new EventEmitter<Type>();
```

## 5. HTML Template Structure

### 5.1 Main Component Template

```html
<!-- ==========================================
     COMPONENT NAME
     Component ID: [DMC-CMP-XXXX]
     
     Brief description of the component's purpose
     ========================================== -->

<!-- ==========================================
     SECTION NAME
     Description of this section's purpose
     ========================================== -->
<div class="dmc-[component]-section">
  <!-- ========== SUBSECTION NAME ========== -->
  <div class="dmc-[component]-subsection">
    <!-- Content -->
  </div>
</div>
```

### 5.2 Conditional Content

```html
<!-- ========== CONDITIONAL: ADMIN ONLY ========== -->
<div *ngIf="isAdmin" class="dmc-[component]-admin">
  <!-- Admin-specific content -->
</div>
```

### 5.3 Iteration Blocks

```html
<!-- ========== ITERATION: ITEM LIST ========== -->
<div *ngFor="let item of items" class="dmc-[component]-item">
  <!-- Item template -->
</div>
```

## 6. CSS Organization

### 6.1 CSS File Header

```css
/* ==========================================================================
   COMPONENT NAME STYLES
   Component ID: [DMC-CMP-XXXX]
   
   Description of the styles contained in this file
   ========================================================================== */
```

### 6.2 CSS Variables

```css
/* ==========================================================================
   VARIABLES AND CONFIGURATION
   Component-specific variables and settings
   ========================================================================== */
:host {
  --dmc-[component]-primary-color: #001B3F;
  --dmc-[component]-secondary-color: #D7E3FF;
  --dmc-[component]-spacing: 16px;
  /* Other variables */
}
```

### 6.3 Section Organization

```css
/* ==========================================================================
   SECTION NAME
   Description of this section's styles
   ========================================================================== */

/* ---------- SUBSECTION NAME ---------- */
.dmc-[component]-subsection {
  /* Styles */
}
```

### 6.4 Responsive Styles

```css
/* ==========================================================================
   RESPONSIVE ADJUSTMENTS
   Device-specific style adjustments
   ========================================================================== */

/* ---------- MOBILE SMALL (≤320px) ---------- */
:host(.dmc-[component]--mobile-small) {
  /* Mobile small styles */
}

/* ---------- TABLET LARGE (769-992px) ---------- */
:host(.dmc-[component]--tablet-large) {
  /* Tablet large styles */
}
```

## 7. CSS Naming Conventions

### 7.1 Class Naming Pattern

- All classes must begin with `dmc-` prefix
- Follow with component name: `dmc-[component-name]`
- Add element name: `dmc-[component-name]-[element]`
- For modifiers, use double hyphens: `dmc-[component-name]-[element]--[modifier]`
- For states, use double hyphens: `dmc-[component-name]-[element]--[state]`

### 7.2 Examples

```css
/* Base component */
.dmc-product-card { }

/* Component element */
.dmc-product-card-image { }
.dmc-product-card-title { }

/* Element modifier */
.dmc-product-card-image--large { }
.dmc-product-card-title--centered { }

/* Element state */
.dmc-product-card-button--active { }
.dmc-product-card-input--disabled { }

/* Device-specific classes */
.dmc-product-card--mobile { }
.dmc-product-card--tablet { }
```

## 8. Device Responsiveness

### 8.1 Host Classes

Components should accept a device type input and apply the appropriate host class:

```typescript
@Input() set deviceType(value: string) {
  this.deviceClass = `dmc-[component-name]--${value}`;
}

@HostBinding('class') deviceClass: string = 'dmc-[component-name]--laptop-small';
```

### 8.2 Device-Specific Styles

```css
/* Mobile styles */
:host(.dmc-[component-name]--mobile-small) .dmc-[component-name]-title {
  font-size: 14px;
}

/* Tablet styles */
:host(.dmc-[component-name]--tablet-large) .dmc-[component-name]-title {
  font-size: 18px;
}
```

## 9. Component Implementation

### 9.1 Standalone Components

All components must be standalone:

```typescript
@Component({
  selector: 'dmc-component-name',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.css']
})
export class ComponentNameComponent {
  // Implementation
}
```

### 9.2 Subscription Management

Always clean up subscriptions:

```typescript
private destroy$ = new Subject<void>();

ngOnInit() {
  this.someService.getData()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => {
      // Handle data
    });
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
```

## 10. Component README

Each component must include a README.md file with:

1. Component name and ID
2. Brief description
3. Usage examples
4. Available inputs and outputs
5. Supported device types
6. Dependencies (if any)
7. Special notes or considerations

## 11. Quality Checklist

Before submitting a component, ensure:

1. [ ] Component has a unique ID registered in FILE_TRACKING_TEAMMATE.md
2. [ ] All files follow naming conventions
3. [ ] Component is properly documented
4. [ ] HTML template has proper section comments
5. [ ] CSS is organized according to standards
6. [ ] Component is responsive across all device types
7. [ ] No external dependencies beyond Angular core
8. [ ] All subscriptions are properly managed
9. [ ] README.md is complete and accurate
10. [ ] Component passes all tests

---

**Remember: Components should be self-contained with minimal dependencies to ensure easy integration into the main application.** 