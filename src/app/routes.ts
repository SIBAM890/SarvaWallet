import { createBrowserRouter } from "react-router";
import Login from "./screens/Login";
import StudentDashboard from "./screens/StudentDashboard";
import QRPay from "./screens/QRPay";
import TransactionHistory from "./screens/TransactionHistory";
import VendorDashboard from "./screens/VendorDashboard";
import FinanceAdminDashboard from "./screens/FinanceAdminDashboard";
import DeductionConfirmation from "./screens/DeductionConfirmation";
import NotFound from "./screens/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/student/dashboard",
    Component: StudentDashboard,
  },
  {
    path: "/student/qr-pay",
    Component: QRPay,
  },
  {
    path: "/student/history",
    Component: TransactionHistory,
  },
  {
    path: "/vendor/:vendorName",
    Component: VendorDashboard,
  },
  {
    path: "/admin/dashboard",
    Component: FinanceAdminDashboard,
  },
  {
    path: "/admin/deduction/:studentId",
    Component: DeductionConfirmation,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);