import { ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";
import { Button, Card, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";
import { cardStyles } from "./SkipCardStyles";

interface SkipCardProps {
  id?: number;
  title?: string;
  description?: string;
  imageUrl?: string;
  tag?: string;
  isSelected?: boolean;
  price?: number | string;
  onSelect?: (id?: number) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({
  id = 1,
  title = "4 Yard Skip",
  description = "14 day hire period",
  imageUrl = "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg",
  tag = "Popular",
  price = "£150",
  isSelected = false,
  onSelect,
}) => {
  const [internalSelected, setInternalSelected] = useState(false);
  const selected = isSelected || internalSelected;

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(id);
    } else {
      setInternalSelected(!selected);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when button is clicked
    handleCardClick();
  };

  return (
    <Card
      style={{
        ...cardStyles.card,
        ...(selected ? cardStyles.cardSelected : {}),
      }}
      className={`skip-card ${selected ? "selected" : ""}`}
      onClick={handleCardClick}
      cover={
        <div style={cardStyles.imageContainer}>
          <img style={cardStyles.image} alt={title} src={imageUrl} />
          <Tag color={selected ? "green" : "#1890ff"} style={cardStyles.tag}>
            {tag}
          </Tag>
        </div>
      }
      hoverable
    >
      <Meta
        title={
          <div style={cardStyles.titleContainer}>
            <span>{title}</span>
            {selected && <CheckOutlined style={cardStyles.checkIcon} />}
          </div>
        }
        description={
          <div>
            <div>{description}</div>
            <div style={cardStyles.price}>{price}</div>
          </div>
        }
      />
      <div style={cardStyles.buttonContainer}>
        <Button
          size="large"
          type={selected ? "default" : "primary"}
          onClick={handleButtonClick}
          style={{
            ...cardStyles.button,
            ...(selected ? cardStyles.buttonSelected : {}),
          }}
        >
          {selected ? (
            <>
              Selected <CheckOutlined />
            </>
          ) : (
            <>
              Select this Skip <ArrowRightOutlined />
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default SkipCard;
