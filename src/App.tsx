import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";

// Lazy loading de las páginas para mejorar performance inicial
const Home = lazy(() => import("./pages/Home"));
const CharacterDetail = lazy(() => import("./pages/CharacterDetail"));

function App() {
  return (
    <BrowserRouter>
     {/* Suspense muestra un fallback mientras las páginas se cargan */}
     <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
