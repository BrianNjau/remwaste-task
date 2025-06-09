import { skips } from "../data/skips"; // real app would fetch this data from an API
import SkipCard from "../components/SkipCard/SkipCard";
import { useState } from "react";
import { Button, Col, Divider, Drawer, Row, Space, Typography } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const SelectSkip = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleCardSelect = (cardId?: number) => {
    const newSelection = selectedCard === cardId ? null : cardId || null;
    setSelectedCard(newSelection);
    setDrawerVisible(newSelection !== null);
  };

  const handleBack = () => {
    setSelectedCard(null);
    setDrawerVisible(false);
  };

  const handleContinue = () => {
    // Add your continue logic here
    console.log("Continue with skip:", selectedCard);
    setDrawerVisible(false);
  };
  const selectedSkip = skips.find((skip) => skip.id === selectedCard);
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <Title
          level={1}
          style={{
            marginBottom: "16px",
            fontSize: "2.5rem",
            fontWeight: "500",
            color: "#1a1a1a",
          }}
        >
          Choose your Skip Size
        </Title>
        <Paragraph
          style={{
            fontSize: "18px",
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Select the skip size that best suits your needs
        </Paragraph>
      </div>
      <Row gutter={[24, 32]}>
        {skips.map((skip) => (
          <Col key={skip.id}>
            <SkipCard
              key={skip.id}
              id={skip.id}
              title={skip.size + " Yard Skip"}
              description={skip.hire_period_days + " day hire period"}
              tag={skip.size + " Yards"}
              price={"£" + skip.price_before_vat}
              // imageUrl={skip.imageUrl} no imageUrl in skips data
              isSelected={selectedCard === skip.id}
              onSelect={handleCardSelect}
            />
          </Col>
        ))}
      </Row>

      {/* Selected Card Info (Optional) */}
      {/* Selection Drawer */}
      <Drawer
        title={null}
        placement="bottom"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        height="auto"
        style={{
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
        }}
        bodyStyle={{
          padding: "24px",
          background: "#fff",
        }}
      >
        {selectedSkip && (
          <div>
            {/* Skip Details */}
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <Title
                level={3}
                style={{ marginBottom: "8px", color: "#1a1a1a" }}
              >
                {selectedSkip.size} Yard Skip
              </Title>
              <Text type="secondary" style={{ fontSize: "16px" }}>
                {selectedSkip.hire_period_days} day hire period
              </Text>
            </div>

            {/* Price */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "24px",
                padding: "16px",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                border: "1px solid #e9ecef",
              }}
            >
              <Text style={{ fontSize: "14px", color: "#666" }}>
                Total Price
              </Text>
              <div>
                <Text
                  style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#1890ff",
                  }}
                >
                  £{selectedSkip.price_before_vat || 150}
                </Text>
              </div>
              <Text type="secondary" style={{ fontSize: "12px" }}>
                Including delivery and collection
              </Text>
            </div>

            <Divider />

            {/* Disclaimer */}
            <div style={{ marginBottom: "24px" }}>
              <Paragraph
                style={{
                  fontSize: "13px",
                  color: "#8c8c8c",
                  lineHeight: "1.5",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                <strong>Please note:</strong> Imagery and information shown
                throughout this website may not reflect the exact shape or size
                specification, colours may vary, options and or accessories may
                be featured at additional cost.
              </Paragraph>
            </div>

            {/* Action Buttons */}
            <Space
              size="middle"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Button
                size="large"
                icon={<ArrowLeftOutlined />}
                onClick={handleBack}
                style={{
                  minWidth: "120px",
                  height: "48px",
                  fontWeight: "500",
                }}
              >
                Back
              </Button>
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                onClick={handleContinue}
                style={{
                  minWidth: "160px",
                  height: "48px",
                  fontWeight: "500",
                  backgroundColor: "#1890ff",
                }}
              >
                Continue
              </Button>
            </Space>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default SelectSkip;
