# Sri Sri University Virtual Wallet System - Prototype Guide

## Overview
A premium fintech-style virtual wallet system for campus-wide digital payments, replacing physical cards with a sophisticated dark-themed interface.

## Design System

### Color Palette
- **Primary Background**: #0D0814 (deep near-black purple)
- **Surface Cards**: #1A1128
- **Brand Purple**: #6C3FC5
- **Accent Violet**: #9B6DFF
- **Glow/Highlight**: #C4A8FF
- **Success Green**: #3DDC97
- **Warning Amber**: #F5A623
- **Text Primary**: #F0EAFF
- **Text Muted**: #8B7AA8
- **Border Subtle**: #2D1F4A

### Typography
- **Display/Headings**: Syne (bold, geometric)
- **Body & UI Labels**: DM Sans (clean, readable)
- **Numbers & Amounts**: JetBrains Mono (monospace)

### Visual Style
- Dark glass-morphism cards with backdrop-filter blur
- Subtle purple glow shadows on active elements
- Thin geometric border lines (1px #2D1F4A)
- Noise/grain texture overlay on backgrounds (5% opacity)
- Pill-shaped status badges

## Navigation Flow

### Starting Point
**Login Screen** (`/`)
- University branding with Virtual Wallet logo
- Student ID and Password inputs
- Access to demo dashboards via links at bottom

### Student Journey
1. **Student Dashboard** (`/student/dashboard`)
   - Wallet balance card with cycle progress
   - Quick action buttons
   - Recent transactions
   
2. **QR Pay Screen** (`/student/qr-pay`)
   - Large centered QR code
   - Wallet ID display
   - Vendor logos
   
3. **Transaction History** (`/student/history`)
   - Filterable by vendor (All, Vishwa, Murmuren, Kaivalya)
   - Grouped by month
   - Detailed transaction rows with balance

### Vendor Journey
**Vendor Dashboard** (`/vendor/Vishwa`)
- Today's revenue card
- QR scanner button
- Settlement status
- Recent incoming payments
- Works for: Vishwa, Murmuren, Kaivalya

### Finance Admin Journey
1. **Admin Dashboard** (`/admin/dashboard`)
   - Sidebar navigation
   - 4 KPI cards
   - Monthly spend chart (Recharts)
   - Pending approval table
   
2. **Deduction Confirmation** (`/admin/deduction/:studentId`)
   - Student details
   - Cycle spend summary by vendor
   - Approve/Flag actions
   - Status feedback

## Components Library

### Reusable Components
- **WalletBalanceCard**: Shows balance, cycle info, and circular progress
- **TransactionRow**: Individual transaction item with vendor badge
- **VendorBadge**: Color-coded vendor tags (Vishwa/Murmuren/Kaivalya)
- **StatusBadge**: Active/Pending/Settled/Flagged/Approved states
- **ActionButton**: Primary/Secondary/Success/Warning/Destructive variants
- **InputField**: Dark glass-style form inputs
- **AdminKPICard**: Dashboard metric cards with trend indicators

## Screen Dimensions
- **Student Screens**: 390 × 844px (iPhone 14 Pro)
- **Admin Dashboard**: 1440 × 900px (Desktop)

## Vendor Color System
- **Vishwa**: #9B6DFF (Purple)
- **Murmuren**: #3DDC97 (Green)
- **Kaivalya**: #F5A623 (Amber)

## Demo Data
- Student: Arjun Sharma (SSU-2024-0742)
- Wallet Balance: ₹9,000
- Cycle: 1 of 3 (Apr–May 2026)
- Recent vendors: Vishwa, Murmuren, Kaivalya

## Interactive Features
- Hover states on all interactive elements
- Smooth transitions and animations
- Glass-morphism effects with backdrop blur
- Responsive button states
- Table row hover effects
- Status updates on approval/flag actions
