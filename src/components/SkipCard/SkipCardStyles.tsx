export const cardStyles: Record<string, React.CSSProperties> = {
  card: {
    width: 370,
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "1px solid #d1cdde",
    borderRadius: "8px",
    position: "relative",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },

  cardSelected: {
    border: "1px solid #1890ff",
    boxShadow: "0 4px 16px rgba(24, 144, 255, 0.2)",
    transform: "translateY(-2px)",
  },

  imageContainer: {
    position: "relative",
    padding: "10px",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover" as const,
    borderRadius: "4px",
  },

  tag: {
    position: "absolute",
    top: "20px",
    right: "20px",
    fontWeight: "bold",
    fontSize: "12px",
    border: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },

  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  checkIcon: {
    color: "#52c41a",
    fontSize: "18px",
    fontWeight: "bold",
  },

  buttonContainer: {
    marginTop: "16px",
    display: "flex",
    justifyContent: "center",
  },

  button: {
    width: "100%",
    height: "40px",
    fontWeight: "500",
    transition: "all 0.3s ease",
  },

  buttonSelected: {
    backgroundColor: "#f6ffed",
    borderColor: "#52c41a",
    color: "#52c41a",
  },

  price: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1890ff",
    marginTop: "8px",
  },
};

// CSS classes for additional hover effects (optional - can be added to your global CSS)
export const cardCSSClasses = `
    .skip-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    border-color: #2c2e6d !important;
  }
  
  .skip-card.selected:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(24, 144, 255, 0.3);
    border-color: #2c2e6d !important;
  }
  
  .skip-card .ant-card-body {
    padding: 16px;
  }
  
  .skip-card .ant-card-meta-title {
    font-size: 18px;
    font-weight: 600;
    color: #262626;
  }
  
  .skip-card .ant-card-meta-description {
    color: #8c8c8c;
    font-size: 14px;
  }
`;
