import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import AddNgoForm from "./pages/NgoRegForm/AddNgoForm";
import Certificate from "./pages/CertificateGenerator/src/view/Certificate";
import CertificateGenerator from "./pages/CertificateGenerator/src/pages/CertificateGenerator";
function App() {
  
  return (
    <Router>
      <SideBar>
   
        <Routes>
          <Route path="/" element={<AddNgoForm/>} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={ <CertificateGenerator/>} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
    
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
