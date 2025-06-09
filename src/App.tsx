import { BrowserRouter, Route, Routes } from "react-router-dom";
import StepsLayout from "./components/StepsLayout/StepsLayout";
import { ConfigProvider } from "antd";
import SelectSkip from "./pages/SelectSkip";
import PostCode from "./pages/PostCode";
import WasteType from "./pages/WasteType";
import PermitCheck from "./pages/PermitCheck";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1890ff",
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          {/* Routes with steps layout */}
          <Route path="/" element={<StepsLayout />}>
            <Route index element={<SelectSkip />} />
            <Route path="post-code" element={<PostCode />} />
            <Route path="waste-type" element={<WasteType />} />
            <Route path="permit-check" element={<PermitCheck />} />
            {/* 404 page */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
