# DMC Components

A comprehensive Angular component library for the DAMICO Corporate Site, featuring reusable, standalone components built with modern Angular practices and DAMICO design standards.

## 🚀 Project Overview

This project contains a collection of standalone Angular components designed for the DAMICO corporate website. Each component follows strict DAMICO development standards and is built to be easily integrated into the main application.

### Key Features

- **Standalone Components**: All components are built as standalone Angular components
- **Responsive Design**: Components adapt to all device types (mobile, tablet, laptop, desktop)
- **DAMICO Standards**: Follows strict naming conventions and documentation requirements
- **Accessibility**: Built with accessibility best practices
- **Modern Angular**: Uses Angular 17+ features and best practices

## 📦 Available Components

### HeaderBar Component (DMC-CMP-4001)
- **Purpose**: Top header bar with social icons, center links, and Arabic text
- **Usage**: `<dmc-headerbar></dmc-headerbar>`
- **Features**: 
  - Social media icons (Blogger, YouTube, LinkedIn)
  - Center navigation links
  - Right-aligned Arabic text
  - Responsive design

### Navbar Component (DMC-CMP-4000)
- **Purpose**: Main navigation bar with pill-shaped design and centered logo
- **Usage**: `<dmc-navbar></dmc-navbar>`
- **Features**:
  - Pill-shaped navigation bar
  - Centered logo as navigation item
  - Left and right navigation links
  - Responsive design

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- Angular CLI (v17+)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd dmc-components
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   ng serve
   ```

4. **Navigate to the application**
   ```
   http://localhost:4200
   ```

## 🏗️ Development

### Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── headerbar/          # HeaderBar component
│   │   │   ├── headerbar.component.ts
│   │   │   ├── headerbar.component.html
│   │   │   ├── headerbar.component.css
│   │   │   └── README.md
│   │   └── navbar/             # Navbar component
│   │       ├── navbar.component.ts
│   │       ├── navbar.component.html
│   │       ├── navbar.component.css
│   │       └── README.md
│   ├── assets/                 # Static assets
│   └── app.component.*         # Main app component
├── guidelines/                 # Development guidelines
└── README.md                  # This file
```

### Component Development Standards

All components must follow DAMICO standards:

1. **File Naming**: `[component-name].component.[extension]`
2. **Class Naming**: PascalCase ending with "Component"
3. **Selector Prefix**: All selectors use `dmc-` prefix
4. **Component ID**: Unique ID following `DMC-CMP-XXXX` format
5. **Documentation**: Comprehensive documentation in all files

### Adding New Components

1. **Generate component**
   ```bash
   ng generate component components/[component-name]
   ```

2. **Follow DAMICO standards**:
   - Update component ID in FILE_TRACKING_TEAMMATE.md
   - Add comprehensive documentation
   - Follow naming conventions
   - Implement responsive design

3. **Register component** in the main app imports

## 📋 Usage Examples

### Basic Implementation
```html
<!-- Header and Navbar together -->
<dmc-headerbar></dmc-headerbar>
<dmc-navbar></dmc-navbar>
```

### Component Configuration
```typescript
// In your component
import { HeaderbarComponent } from './components/headerbar/headerbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  imports: [HeaderbarComponent, NavbarComponent],
  // ... other configuration
})
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#06254b`
- **Secondary Blue**: `#4A90E2`
- **Light Blue**: `#f3f6fd`
- **Green**: `#4CAF50`
- **Orange**: `#FF9800`

### Typography
- **Primary Font**: 'Segoe UI', 'Tajawal', 'Cairo', Arial, sans-serif
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Responsive Breakpoints
- **Mobile Small**: ≤320px
- **Mobile Large**: 321-480px
- **Tablet Small**: 481-768px
- **Tablet Large**: 769-992px
- **Laptop Small**: 993-1200px
- **Laptop Large**: 1201-1440px
- **Desktop Small**: 1441-1920px
- **Desktop Large**: >1920px

## 🧪 Testing

### Unit Tests
```bash
ng test
```

### End-to-End Tests
```bash
ng e2e
```

## 📦 Build

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --configuration production
```

## 📚 Documentation

### Component Documentation
Each component includes:
- Comprehensive TypeScript documentation
- HTML template with section comments
- CSS with organized sections
- README.md with usage examples

### Development Guidelines
- **DMC_STANDARDS_TEAMMATE.md**: Main development standards
- **CURSOR_AI_RULES.md**: AI development guidelines
- **FILE_TRACKING_TEAMMATE.md**: Component ID tracking
- **ANGULAR_SETUP_INSTRUCTIONS.md**: Setup instructions

## 🤝 Contributing

1. Follow DAMICO development standards
2. Ensure all components are responsive
3. Add comprehensive documentation
4. Test across all device types
5. Register component IDs properly

## 📄 License

This project is proprietary to DAMICO and follows internal development standards.

## 🆘 Support

For questions or issues:
1. Check the guidelines folder for development standards
2. Review component documentation
3. Ensure all DAMICO standards are followed

---

**Built with Angular 17+ and DAMICO Design Standards**
