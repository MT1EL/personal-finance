import { Navigate, Route, Routes } from "react-router-dom";
import Overview from "../../pages/authenticated/Overview";
import Budgets from "../../pages/authenticated/Budgets";
import Pots from "../../pages/authenticated/Pots";
import Recuiringbills from "../../pages/authenticated/Recuiringbills";
import Transactions from "../../pages/authenticated/Transactions";
import PageNotFound from "../../pages/404";
import AuthenticatedLayout from "@/components/layouts/AuthenticatedLayout";

const AuthenticatedRoutes = () => {
  return (
    <AuthenticatedLayout>
      <Routes>
        {/* Main Overview route */}
        <Route path="/overview" element={<Overview />} />

        {/* Budgets route */}
        <Route path="/budgets" element={<Budgets />} />

        {/* Pots route */}
        <Route path="/pots" element={<Pots />} />

        {/* Recurring Bills route */}
        <Route path="/recurring-bills" element={<Recuiringbills />} />

        {/* Transactions route */}
        <Route path="/transactions" element={<Transactions />} />

        {/* Redirect root path to Overview as default */}
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route path="/login" element={<Navigate to="/overview" replace />} />
        <Route path="/register" element={<Navigate to="/overview" replace />} />

        {/* 404 route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthenticatedLayout>
  );
};

export default AuthenticatedRoutes;
