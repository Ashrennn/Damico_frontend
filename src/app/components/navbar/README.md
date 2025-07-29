# Navbar Component

**Component ID:** DMC-CMP-4000

## Description
A responsive navigation bar for the DAMICO site, featuring social/media icons, main navigation links, and a centered logo that overlaps the navigation bar. Follows DAMICO standards for structure, naming, and documentation.

## Usage Example
```html
<dmc-navbar [deviceType]="deviceType"></dmc-navbar>
```

## Inputs
| Name       | Type   | Description                                 |
|------------|--------|---------------------------------------------|
| deviceType | string | Sets the device type for responsive styling. |

## Outputs
| Name | Type | Description |
|------|------|-------------|
| —    | —    | —           |

## Supported Device Types
- mobile-small  (≤320px)
- mobile-large (321-480px)
- tablet-small (481-768px)
- tablet-large (769-992px)
- laptop-small (993-1200px)
- laptop-large (1201-1440px)
- desktop-small (1441-1920px)
- desktop-large (>1920px)

## Dependencies
- Angular core modules only

## Special Notes
- Replace placeholder icons and logo with actual assets as needed.
- Ensure the component is registered in FILE_TRACKING_TEAMMATE.md.
- Follows all DAMICO component standards for structure, naming, and documentation. 
