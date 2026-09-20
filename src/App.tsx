import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Listings = lazy(() => import("./pages/Listings"));
const Areas = lazy(() => import("./pages/Areas"));
const Contact = lazy(() => import("./pages/Contact"));
const HomeValuation = lazy(() => import("./pages/HomeValuation"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <BrowserRouter>
      <Toaster richColors position="top-center" />
        <Navbar />
        <Suspense fallback={<main className="min-h-screen pt-20" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home-valuation" element={<HomeValuation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
  </BrowserRouter>
);

export default App;
