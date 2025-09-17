import { AdminSidebar } from "../../components/admin/AdminSidebar";
import { AdminNavbar } from "../../components/admin/AdminNavbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    // 🧠 Logic

    return (
        <>
            <AdminNavbar />
            <div className="flex">
                <AdminSidebar />
                <div className="flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </>
    );
};