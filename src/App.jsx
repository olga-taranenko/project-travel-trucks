import "./App.css";

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("./pages/CamperPage/CamperPage"));

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/catalog/:id" element={<CamperPage />}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
