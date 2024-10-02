import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import GoblinProvider from "./features/goblin/GoblinProvider.tsx";

function App() {
  return (
    <>
      <GoblinProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="app" element={<AppLayout />} />
          </Routes>
        </BrowserRouter>
      </GoblinProvider>
    </>
  );
}

export default App;
