export const stepsStyle: React.CSSProperties = {
  padding: "16px 12px",
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
};

export const contentStyle: React.CSSProperties = {
  padding: "16px 12px",
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
  flex: 1,
};

export const footerStyle: React.CSSProperties = {
  textAlign: "center",
  backgroundColor: "#ffffff",
};

export const layoutStyle = {
  minHeight: "100vh",
  backgroundColor: "#ffffff",
};

export const getResponsiveContentStyle = (): React.CSSProperties => {
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth < 1024;

  return {
    ...contentStyle,
    padding: isMobile ? "12px 8px" : isTablet ? "16px 12px" : "24px",
  };
};

export const getResponsiveStepsStyle = (): React.CSSProperties => {
  const isMobile = window.innerWidth < 768;

  return {
    ...stepsStyle,
    padding: isMobile ? "12px 8px" : "16px 12px",
  };
};
