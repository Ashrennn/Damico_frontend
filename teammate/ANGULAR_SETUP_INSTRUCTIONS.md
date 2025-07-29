# ANGULAR SETUP INSTRUCTIONS FOR COMPONENT DEVELOPMENT
**Version 1.0.0 | Last Updated: March 2024**

> **⚠️ IMPORTANT: FOLLOW THESE INSTRUCTIONS PRECISELY ⚠️**
> 
> This document provides step-by-step instructions for setting up an Angular development environment
> for creating standalone components that will be integrated into the DAMICO Corporate Site.

## Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (v18.x or later)
- **npm** (v9.x or later)
- **Git** (v2.x or later)
- **Visual Studio Code** (recommended)
- **Angular CLI** (v17.x)

## 1. Setting Up the Development Environment

### 1.1 Install Node.js and npm

Download and install from [nodejs.org](https://nodejs.org/)

Verify installation:
```bash
node --version
npm --version
```

### 1.2 Install Angular CLI

```bash
npm install -g @angular/cli@17
```

Verify installation:
```bash
ng version
```

### 1.3 Install Recommended VS Code Extensions

- Angular Language Service
- ESLint
- Prettier
- Angular Snippets

## 2. Creating a New Angular Project

### 2.1 Generate a New Angular Project

```bash
ng new dmc-components --standalone --routing=false --style=css
cd dmc-components
```

### 2.2 Configure the Project

Update `angular.json` to use the following settings:

```json
{
  "projects": {
    "dmc-components": {
      "architect": {
        "build": {
          "options": {
            "outputPath": "dist/dmc-components",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": ["zone.js"],
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "css",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.css"],
            "scripts": []
          }
        }
      }
    }
  }
}
```

### 2.3 Set Up Basic Styles

Create a basic styles file at `src/styles.css`:

```css
/* Global styles */
:root {
  --primary-color: #001B3F;
  --secondary-color: #D7E3FF;
  --text-color: #333333;
  --background-color: #FFFFFF;
  --border-color: #EEEEEE;
  --spacing-unit: 8px;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: var(--text-color);
  background-color: var(--background-color);
}

* {
  box-sizing: border-box;
}
```

## 3. Creating Standalone Components

### 3.1 Generate a New Component

```bash
ng generate component components/[component-name] --standalone
```

### 3.2 Structure the Component Files

Modify the generated files to follow DAMICO standards:

1. Update the component class in `[component-name].component.ts`
2. Structure the HTML template in `[component-name].component.html`
3. Organize the CSS in `[component-name].component.css`
4. Create a README.md file for the component

### 3.3 Make the Component Responsive

Implement device-specific styles and behavior:

```typescript
// In component.ts
@Input() set deviceType(value: string) {
  this.deviceClass = `dmc-[component-name]--${value}`;
}

@HostBinding('class') deviceClass: string = 'dmc-[component-name]--laptop-small';
```

```css
/* In component.css */
:host(.dmc-[component-name]--mobile-small) {
  /* Mobile styles */
}

:host(.dmc-[component-name]--tablet-large) {
  /* Tablet styles */
}

:host(.dmc-[component-name]--desktop-large) {
  /* Desktop styles */
}
```

## 4. Testing Components

### 4.1 Create a Test Harness

Create a simple test harness in `src/app/app.component.html`:

```html
<div class="device-selector">
  <label for="device-type">Device Type:</label>
  <select id="device-type" [(ngModel)]="selectedDeviceType">
    <option value="mobile-small">Mobile Small (≤320px)</option>
    <option value="mobile-large">Mobile Large (321-480px)</option>
    <option value="tablet-small">Tablet Small (481-768px)</option>
    <option value="tablet-large">Tablet Large (769-992px)</option>
    <option value="laptop-small">Laptop Small (993-1200px)</option>
    <option value="laptop-large">Laptop Large (1201-1440px)</option>
    <option value="desktop-small">Desktop Small (1441-1920px)</option>
    <option value="desktop-large">Desktop Large (>1920px)</option>
  </select>
</div>

<div class="component-container" [ngClass]="'device-' + selectedDeviceType">
  <!-- Add your component here -->
  <dmc-[component-name] [deviceType]="selectedDeviceType"></dmc-[component-name]>
</div>
```

Update `src/app/app.component.ts`:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { YourComponentComponent } from './components/[component-name]/[component-name].component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, YourComponentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedDeviceType = 'laptop-small';
}
```

### 4.2 Run the Development Server

```bash
ng serve
```

Visit `http://localhost:4200` to test your component.

## 5. Packaging Components for Delivery

### 5.1 Prepare the Component Package

For each component, create a folder with the following structure:

```
[component-name]/
├── [component-name].component.ts
├── [component-name].component.html
├── [component-name].component.css
└── README.md
```

### 5.2 Document the Component

Ensure the README.md includes:

1. Component name and ID
2. Brief description
3. Usage examples
4. Available inputs and outputs
5. Supported device types
6. Dependencies (if any)
7. Special notes or considerations

### 5.3 Register the Component

Add your component to the `FILE_TRACKING_TEAMMATE.md` file.

## 6. Common Issues and Solutions

### 6.1 Angular Version Compatibility

Ensure you're using Angular 17.x for all components.

### 6.2 CSS Encapsulation

Use `:host` selectors to ensure styles don't leak outside the component.

### 6.3 Device Type Handling

Make sure your component properly handles all device types.

### 6.4 Dependencies

Keep dependencies to a minimum. Use only Angular core modules when possible.

## 7. Best Practices

1. **Follow the Standards**: Always adhere to DAMICO standards for naming, structure, and documentation
2. **Test All Device Types**: Ensure your component works correctly on all device types
3. **Minimize Dependencies**: Avoid external libraries when possible
4. **Document Everything**: Provide comprehensive documentation for your component
5. **Clean Code**: Write clean, maintainable code with proper comments
6. **Responsive Design**: Design components to be fully responsive
7. **Accessibility**: Ensure components are accessible (WCAG 2.1 AA)
8. **Performance**: Optimize components for performance

---

**Remember: Components should be self-contained with minimal dependencies to ensure easy integration into the main application.** 