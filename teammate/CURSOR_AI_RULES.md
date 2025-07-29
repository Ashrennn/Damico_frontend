# CURSOR AI RULES FOR DAMICO COMPONENT DEVELOPMENT
**Version 1.0.0 | Last Updated: March 2024**

> **⚠️ IMPORTANT: SHARE THESE RULES WITH CURSOR AI ⚠️**
> 
> This document outlines the rules and guidelines for using Cursor AI when developing
> components for the DAMICO Corporate Site. These rules ensure that components meet
> DAMICO standards and can be seamlessly integrated into the main application.

## 1. General Rules for Cursor AI

### 1.1 Strict Adherence to Requirements

- **ONLY implement what is explicitly requested** in wireframes, layouts, sketches, or instructions
- **DO NOT add extra features** or functionality not specified in the requirements
- **DO NOT suggest alternative approaches** unless specifically asked for feedback
- **AVOID hallucinations** or making assumptions about requirements

### 1.2 Follow DAMICO Standards

- **ALWAYS follow DAMICO naming conventions** for files, classes, and CSS
- **ALWAYS use the component ID system** as specified in FILE_TRACKING_TEAMMATE.md
- **ALWAYS structure HTML, CSS, and TypeScript** according to DAMICO standards
- **ALWAYS include proper documentation** in all files

### 1.3 Focus on Deliverables

- **PRIORITIZE creating working components** over suggesting improvements
- **DELIVER exactly what was requested** without unnecessary additions
- **MAINTAIN consistency** with existing DAMICO components and styles

## 2. Component Development Rules

### 2.1 File Structure and Naming

- **CREATE files with the correct naming pattern**: `[component-name].component.[extension]`
- **USE kebab-case for filenames**: All lowercase with hyphens separating words
- **USE PascalCase for class names**: `ComponentNameComponent`
- **USE the `dmc-` prefix for selectors**: `dmc-component-name`

### 2.2 Component Implementation

- **IMPLEMENT components as standalone Angular components**
- **AVOID external dependencies** beyond Angular core modules
- **ENSURE components are responsive** across all device types
- **FOLLOW the device type system** as specified in the standards

### 2.3 Documentation Requirements

- **ADD comprehensive documentation** to all files
- **INCLUDE component headers** with ID, description, and usage information
- **DOCUMENT all methods, inputs, and outputs**
- **CREATE a README.md** for each component

## 3. CSS and Styling Rules

### 3.1 CSS Organization

- **ORGANIZE CSS** according to DAMICO standards
- **USE CSS variables** for configurable properties
- **STRUCTURE CSS** to match the HTML hierarchy
- **ADD proper section comments** to CSS files

### 3.2 CSS Naming Conventions

- **USE the `dmc-` prefix for all classes**
- **FOLLOW the pattern**: `dmc-[component-name]-[element]--[modifier]`
- **USE double hyphens** for modifiers and states
- **ENSURE device-specific classes** follow the pattern: `dmc-[component-name]--[device-type]`

### 3.3 Responsive Design

- **IMPLEMENT styles for all device types**:
  - mobile-small (≤320px)
  - mobile-large (321-480px)
  - tablet-small (481-768px)
  - tablet-large (769-992px)
  - laptop-small (993-1200px)
  - laptop-large (1201-1440px)
  - desktop-small (1441-1920px)
  - desktop-large (>1920px)

## 4. HTML Structure Rules

### 4.1 HTML Organization

- **STRUCTURE HTML** with clear section comments
- **USE semantic HTML elements** appropriately
- **FOLLOW the hierarchical structure** specified in DAMICO standards
- **ADD proper section and subsection comments**

### 4.2 Accessibility

- **ENSURE components are accessible**
- **USE proper ARIA attributes** where needed
- **MAINTAIN keyboard navigation** support
- **PROVIDE appropriate text alternatives** for non-text content

## 5. TypeScript Implementation Rules

### 5.1 Component Class Structure

- **IMPLEMENT components as standalone** Angular components
- **ORGANIZE methods logically**
- **DOCUMENT all public methods, inputs, and outputs**
- **HANDLE device type changes** properly

### 5.2 Input/Output Handling

- **DOCUMENT all @Input and @Output properties**
- **PROVIDE default values** for optional inputs
- **USE appropriate types** for all properties
- **EMIT events with proper types**

### 5.3 Subscription Management

- **CLEAN UP all subscriptions** in ngOnDestroy
- **USE the takeUntil pattern** for subscription management
- **AVOID memory leaks** by properly handling subscriptions

## 6. Specific Instructions for Cursor AI

### 6.1 When Receiving Wireframes or Layouts

- **IMPLEMENT exactly what is shown** in the wireframe or layout
- **DO NOT add extra features** not shown in the wireframe
- **MATCH the visual design** as closely as possible
- **ASK for clarification** if the wireframe is ambiguous

### 6.2 When Receiving Text Instructions

- **IMPLEMENT only what is explicitly requested**
- **DO NOT add extra functionality** not mentioned in the instructions
- **ASK for clarification** if instructions are ambiguous
- **FOLLOW DAMICO standards** for implementation

### 6.3 When Receiving Voice Instructions

- **CONFIRM understanding** of the instructions
- **IMPLEMENT only what was requested** in the voice instructions
- **DO NOT add extra features** not mentioned
- **ASK for clarification** if instructions are unclear

### 6.4 When Receiving Handwritten Notes

- **IMPLEMENT exactly what is described** in the notes
- **DO NOT add extra functionality** not mentioned in the notes
- **ASK for clarification** if notes are illegible or ambiguous
- **FOLLOW DAMICO standards** for implementation

## 7. Delivery Requirements

### 7.1 Component Package

- **DELIVER components as standalone folders** with the following structure:
  ```
  [component-name]/
  ├── [component-name].component.ts
  ├── [component-name].component.html
  ├── [component-name].component.css
  └── README.md
  ```

### 7.2 Documentation

- **ENSURE README.md includes**:
  1. Component name and ID
  2. Brief description
  3. Usage examples
  4. Available inputs and outputs
  5. Supported device types
  6. Dependencies (if any)
  7. Special notes or considerations

### 7.3 Registration

- **REGISTER the component** in FILE_TRACKING_TEAMMATE.md
- **USE the next available ID** in the appropriate range
- **INCLUDE all required information** in the registration entry

## 8. Quality Checklist

Before delivering a component, ensure:

1. [ ] Component has a unique ID registered in FILE_TRACKING_TEAMMATE.md
2. [ ] All files follow naming conventions
3. [ ] Component is properly documented
4. [ ] HTML template has proper section comments
5. [ ] CSS is organized according to standards
6. [ ] Component is responsive across all device types
7. [ ] No external dependencies beyond Angular core
8. [ ] All subscriptions are properly managed
9. [ ] README.md is complete and accurate
10. [ ] Component implements exactly what was requested, no more and no less

---

**Remember: Cursor AI should only implement what is explicitly requested and should always follow DAMICO standards.** 