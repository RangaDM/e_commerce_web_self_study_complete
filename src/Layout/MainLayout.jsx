import React, { useRef } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import "tailwindcss/tailwind.css";
import PaymentModal from "../Modals/PaymentModal";

const MainLayout = () => {
  const paymentModalRef = useRef();

  return (
    <div className="overflow-hidden w-screen h-screen">
      <PaymentModal ref={paymentModalRef} />
      <Header paymentModalRef={paymentModalRef} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
