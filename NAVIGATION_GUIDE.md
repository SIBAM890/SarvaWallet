# 🧭 Sri Sri University Virtual Wallet - Navigation Guide

This document provides a complete overview of all clickable links and navigation flows in the prototype.

## 📱 Screen Map & Navigation Flow

### 1. **Login Screen** (`/`)
**Clickable Elements:**
- **"Access My Wallet" Button** → Navigates to Student Dashboard (`/student/dashboard`)
- **"Demo: Vendor Dashboard" Link** → Navigates to Vishwa Vendor Dashboard (`/vendor/Vishwa`)
- **"Demo: Admin Dashboard" Link** → Navigates to Finance Admin Dashboard (`/admin/dashboard`)

---

### 2. **Student Dashboard** (`/student/dashboard`)
**Clickable Elements:**
- **Back Arrow (←)** → Returns to Login (`/`)
- **Quick Actions:**
  - **"Pay at Vendor"** → Navigates to QR Pay screen (`/student/qr-pay`)
  - **"Transaction History"** → Navigates to Transaction History (`/student/history`)
  - **"Download Statement"** → No action (placeholder)
  - **"Support"** → No action (placeholder)
- **"View All" Link** (under Recent Transactions) → Navigates to Transaction History (`/student/history`)
- **Individual Transaction Rows** → Navigates to respective Vendor Dashboard (e.g., `/vendor/Vishwa`)

---

### 3. **QR Pay Screen** (`/student/qr-pay`)
**Clickable Elements:**
- **Back Arrow (←)** → Returns to Student Dashboard (`/student/dashboard`)
- **Vendor Badges:**
  - **Vishwa Badge** → Navigates to Vishwa Vendor Dashboard (`/vendor/Vishwa`)
  - **Murmuren Badge** → Navigates to Murmuren Vendor Dashboard (`/vendor/Murmuren`)
  - **Kaivalya Badge** → Navigates to Kaivalya Vendor Dashboard (`/vendor/Kaivalya`)
- **"Cancel" Button** → Returns to Student Dashboard (`/student/dashboard`)

---

### 4. **Transaction History** (`/student/history`)
**Clickable Elements:**
- **Back Arrow (←)** → Returns to Student Dashboard (`/student/dashboard`)
- **Filter Tabs:**
  - **All** → Shows all transactions
  - **Vishwa** → Filters Vishwa transactions only
  - **Murmuren** → Filters Murmuren transactions only
  - **Kaivalya** → Filters Kaivalya transactions only
- **Individual Transaction Rows** → Navigates to respective Vendor Dashboard (e.g., `/vendor/Murmuren`)

---

### 5. **Vendor Dashboard** (`/vendor/:vendorName`)
Accessible for: Vishwa, Murmuren, Kaivalya

**Clickable Elements:**
- **Back Arrow (←)** → Returns to Login (`/`)
- **"Scan Student Wallet" Button** → No action (placeholder for QR scanner)
- **Recent Payment Rows** → Each student payment navigates to Deduction Confirmation screen (`/admin/deduction/:studentId`)
  - Example: Clicking "Arjun Sharma" → `/admin/deduction/SSU-2024-0742`

---

### 6. **Finance Admin Dashboard** (`/admin/dashboard`)
**Clickable Elements:**
- **Sidebar Navigation:**
  - **Overview** → Active (current page)
  - **Students** → No action (placeholder)
  - **Vendors** → No action (placeholder)
  - **Reports** → No action (placeholder)
  - **Settings** → No action (placeholder)
  - **"Back to Login"** → Returns to Login (`/`)
- **Pending Deduction Approvals Table:**
  - **"Approve" Button** → Navigates to Deduction Confirmation (`/admin/deduction/:studentId`)
  - **"Hold" Button** → No action (placeholder)

---

### 7. **Deduction Confirmation** (`/admin/deduction/:studentId`)
**Clickable Elements:**
- **"Back to Dashboard" Link (top)** → Returns to Finance Admin Dashboard (`/admin/dashboard`)
- **Vendor Badges in Table:**
  - **Vishwa** → Navigates to Vishwa Vendor Dashboard (`/vendor/Vishwa`)
  - **Murmuren** → Navigates to Murmuren Vendor Dashboard (`/vendor/Murmuren`)
  - **Kaivalya** → Navigates to Kaivalya Vendor Dashboard (`/vendor/Kaivalya`)
- **Action Buttons (when pending):**
  - **"Approve Deduction"** → Changes state to "Approved" and shows success message
  - **"Flag for Review"** → Changes state to "Flagged" and shows warning message
- **"Back to Dashboard" Button (after approval/flagging)** → Returns to Finance Admin Dashboard (`/admin/dashboard`)

---

### 8. **404 Not Found** (`/*` - any invalid route)
**Clickable Elements:**
- **"Back to Login" Button** → Returns to Login (`/`)
- **"Go to Student Dashboard" Button** → Navigates to Student Dashboard (`/student/dashboard`)

---

## 🔗 Complete Route Structure

```
/ ........................... Login Screen
/student/dashboard .......... Student Dashboard
/student/qr-pay ............. QR Payment Screen
/student/history ............ Transaction History
/vendor/Vishwa .............. Vishwa Vendor Dashboard
/vendor/Murmuren ............ Murmuren Vendor Dashboard
/vendor/Kaivalya ............ Kaivalya Vendor Dashboard
/admin/dashboard ............ Finance Admin Dashboard
/admin/deduction/:studentId . Monthly Deduction Review
* ........................... 404 Not Found Page
```

---

## 🎯 Component-Level Clickable Features

### **VendorBadge Component**
- When `clickable={true}` prop is passed, clicking navigates to vendor dashboard
- Used in: QR Pay, Deduction Confirmation

### **TransactionRow Component**
- When `clickable={true}` prop is passed, clicking navigates to vendor dashboard
- Used in: Student Dashboard, Transaction History

### **ActionButton Component**
- Accepts `onClick` handler for navigation
- Used throughout the app for primary actions

---

## 🧪 Testing the Navigation Flow

### **Student Journey:**
1. Login → Student Dashboard → QR Pay → Click Vendor Badge → Vendor Dashboard
2. Login → Student Dashboard → View Transaction → Transaction Detail (Vendor Dashboard)
3. Login → Student Dashboard → Transaction History → Filter by Vendor → Click Transaction

### **Vendor Journey:**
1. Login → Demo: Vendor Dashboard → Click Student Payment → Deduction Confirmation
2. QR Pay → Click Vendor Badge → Vendor Dashboard

### **Admin Journey:**
1. Login → Demo: Admin Dashboard → Click Approve → Deduction Confirmation
2. Deduction Confirmation → Click Vendor Badge → Vendor Dashboard
3. Deduction Confirmation → Approve/Flag → Back to Dashboard

---

## 💡 Notes

- All navigation uses React Router's `useNavigate()` hook
- Dynamic routes (`:vendorName`, `:studentId`) are properly handled
- Back buttons maintain proper navigation hierarchy
- 404 page catches all undefined routes
- All demo data is interconnected for a realistic prototype experience

---

**Last Updated:** February 26, 2026
