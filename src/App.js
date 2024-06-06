import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ContextProvider from "./context/Context";
import FormPage from "./pages/FormPage";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            {/* <StudentsPage /> */}
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<FormPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
