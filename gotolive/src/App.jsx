import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

// Lazy imports (Pages only load when visited)
const Home = lazy(() => import("./Pages/Home"));
const Detail = lazy(() => import("./Pages/Detail"));
const Watchfree = lazy(() => import("./Pages/Watchfree"));

// ✅ LayoutWrapper handles conditional rendering of Header/Footer
function LayoutWrapper({ children }) {
  const location = useLocation(); // get current route path
  const hideLayout = ["/watchfree"]; // pages where Header/Footer should be hidden

  return (
    <>
      {!hideLayout.includes(location.pathname) && <Header />}
      {children}
      {!hideLayout.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <LayoutWrapper>
        <Suspense fallback={<div className="text-center p-5">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Detail />} />
            <Route path="/watchfree" element={<Watchfree />} />
          </Routes>
        </Suspense>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
