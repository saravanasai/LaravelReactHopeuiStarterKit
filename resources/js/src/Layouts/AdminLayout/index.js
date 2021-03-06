import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../Components/NavigationBar";
import TopNavigationBar from "../../Components/TopNavigationBar";


const AdminLayout = () => {
    const [navBarStatus, setNavBarStatus] = useState(true);

    const handleNavBarToggle = () => {

        setNavBarStatus(!navBarStatus);
    };

    return (
        <>
        <Toaster />
            <NavigationBar
                handleNavigationToggle={handleNavBarToggle}
                toggleStatus={navBarStatus}
            />
            <main className="main-content">
                <div className="position-relative">
                    <TopNavigationBar
                        handleNavigationToggle={handleNavBarToggle}
                        toggleStatus={navBarStatus}
                    />
                </div>
                <div className="conatiner-fluid content-inner mt-5 py-0">

                    <Outlet />
                </div>
            </main>
        </>
    );
};

export default AdminLayout;
