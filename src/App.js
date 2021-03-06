import { BrowserRouter, Routes, Route } from "react-router-dom";

import FileUpload from "./pages/FileUpload";
import DisplayUpload from "./pages/DisplayUpload";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    // <div className="container flex items-center justify-center h-screen">
    //   <FileUpload/>

    // </div>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage/>}/>
        <Route path="/normal-upload" element={<FileUpload />} />
        <Route path="/display-upload" element={<DisplayUpload />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
