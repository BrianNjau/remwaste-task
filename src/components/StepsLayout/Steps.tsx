import {
  CalendarOutlined,
  CreditCardOutlined,
  EnvironmentOutlined,
  SecurityScanOutlined,
  SolutionOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import type { StepProps } from "antd";
import Timelines from "../Timeline/Timelines";

// This file defines the steps used in a stepper component for a user interface.

export const stepsConfig: StepProps[] = [
  {
    title: "Postcode",
    icon: <EnvironmentOutlined />,
    description: <Timelines />,
  },
  {
    title: "Waste Type",
    icon: <SolutionOutlined />,
    description: <Timelines />,
  },
  {
    title: "Select Skip",
    icon: <TruckOutlined />,
    //we can add a description timeline here after the skip selection is made
  },
  {
    title: "Permit Check",
    icon: <SecurityScanOutlined />,
    //we can add a description here if needed
  },
  {
    title: "Choose Date",
    icon: <CalendarOutlined />,
    //we can add a description here if needed
  },
  {
    title: "Payment",
    icon: <CreditCardOutlined />,
    //we can add a description here if needed
  },
];
