import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import {
  layoutStyle,
  footerStyle,
  getResponsiveStepsStyle,
} from "./StepsStyles";
import { Steps } from "antd";
import { stepsConfig } from "./Steps";

const { Footer, Content } = Layout;

const StepsLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentStep = () => {
    switch (location.pathname) {
      case "/post-code":
        return 0;
      case "/waste-type":
        return 1;
      case "/":
        return 2;
      case "/permit-check":
        return 3;
    }
  };
  const onChange = (value: number) => {
    // This function can be used to handle step changes,
    switch (value) {
      case 0:
        navigate("/post-code");
        break;
      case 1:
        navigate("/waste-type");
        break;
      case 2:
        navigate("/");
        break;
      case 3:
        navigate("/permit-check");
        break;
      default:
        break;
    }
  };

  const currentStep = getCurrentStep();

  return (
    <Layout style={layoutStyle}>
      <Steps
        style={getResponsiveStepsStyle()}
        current={currentStep}
        items={stepsConfig}
        size="small"
        onChange={onChange}
      />

      <Content style={getResponsiveStepsStyle()}>
        <Outlet />
      </Content>
      <Footer style={footerStyle}>
        {/* Used for footer content, such as copyright information or links. */}
      </Footer>
    </Layout>
  );
};

export default StepsLayout;
