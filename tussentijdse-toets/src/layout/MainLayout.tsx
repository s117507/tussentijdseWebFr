import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
    return(
        <>
            <Header />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}