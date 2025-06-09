// pages/SelectSkip.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SelectSkip from "../pages/SelectSkip";

import "@testing-library/jest-dom";

// Mock Ant Design's Drawer as it might cause issues with `act` warnings
// if not properly handled within tests, especially with its animations.

vi.mock("antd", async (importOriginal) => {
  const actual: any = await importOriginal();
  return {
    ...actual,
    // Mocking Drawer to immediately render its children without animation delays
    Drawer: ({ children, open, onClose }: any) =>
      open ? (
        <div data-testid="mock-drawer">
          <button onClick={onClose}>Close Drawer</button>
          {children}
        </div>
      ) : null,
  };
});

describe("SelectSkip", () => {
  // Test 1: Renders the main title and paragraph
  test("renders the main title and introductory paragraph", () => {
    render(<SelectSkip />);

    expect(
      screen.getByRole("heading", { level: 1, name: /Choose your Skip Size/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Select the skip size that best suits your needs/i)
    ).toBeInTheDocument();
  });

  // Test 2: Renders all SkipCard components based on the skips data
  test("renders all SkipCard components from the data", () => {
    render(<SelectSkip />);

    // Verify content of a specific skip card
    expect(screen.getByText("4 Yard Skip")).toBeInTheDocument();
    expect(screen.getByText("£278")).toBeInTheDocument();
  });

  // Test 3: Drawer is initially closed
  test("drawer is initially closed", () => {
    render(<SelectSkip />);
    expect(screen.queryByTestId("mock-drawer")).not.toBeInTheDocument();
  });

  // Test 4: Selecting a SkipCard opens the drawer and displays correct details
  test("selecting a SkipCard opens the drawer and displays correct details", async () => {
    render(<SelectSkip />);

    // Click on the first SkipCard (e.g., 4 Yard Skip)
    const firstSkipCardTitle = screen.getByText("4 Yard Skip");
    fireEvent.click(firstSkipCardTitle);

    // Expect the mock drawer to be visible
    const drawer = await screen.findByTestId("mock-drawer");
    expect(drawer).toBeInTheDocument();

    // Check if the selected skip details are displayed in the drawer
    expect(
      screen.getByRole("heading", { level: 3, name: /4 Yard Skip/i })
    ).toBeInTheDocument();

    // Check for "Back" and "Continue" buttons
    expect(screen.getByRole("button", { name: /Back/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Continue/i })
    ).toBeInTheDocument();
  });

  // Test 5: Clicking "Back" button closes the drawer
  test("clicking 'Back' button closes the drawer", async () => {
    render(<SelectSkip />);

    // Select a card to open the drawer
    fireEvent.click(screen.getByText("4 Yard Skip"));

    // Ensure drawer is open
    expect(await screen.findByTestId("mock-drawer")).toBeInTheDocument();

    // Click the "Back" button
    fireEvent.click(screen.getByRole("button", { name: /Back/i }));

    // Wait for the drawer to close (become null in our mock)
    await waitFor(() => {
      expect(screen.queryByTestId("mock-drawer")).not.toBeInTheDocument();
    });
  });

  // Test 6: Clicking "Continue" button closes the drawer and logs the selected skip (mock console.log)
  test("clicking 'Continue' button closes the drawer and logs the selected skip", async () => {
    // Mock console.log to spy on its calls
    const consoleSpy = vi.spyOn(console, "log");

    render(<SelectSkip />);

    // Select a card to open the drawer
    fireEvent.click(screen.getByText("4 Yard Skip"));

    // Ensure drawer is open
    expect(await screen.findByTestId("mock-drawer")).toBeInTheDocument();

    // Click the "Continue" button
    fireEvent.click(screen.getByRole("button", { name: /Continue/i }));

    // Wait for the drawer to close
    await waitFor(() => {
      expect(screen.queryByTestId("mock-drawer")).not.toBeInTheDocument();
    });

    // Verify console.log was called with the correct selected skip ID
    expect(consoleSpy).toHaveBeenCalledWith("Continue with skip:", 17933);

    // Restore the original console.log after the test
    consoleSpy.mockRestore();
  });

  // Test 7: Clicking an already selected card should deselect it and close the drawer
  test("clicking an already selected card should deselect it and close the drawer", async () => {
    render(<SelectSkip />);

    // Select the first card
    const firstSkipCardTitle = screen.getByText("4 Yard Skip");
    fireEvent.click(firstSkipCardTitle);

    // Ensure drawer is open
    expect(await screen.findByTestId("mock-drawer")).toBeInTheDocument();

    // Click the same card again
    fireEvent.click(firstSkipCardTitle);

    // Wait for the drawer to close
    await waitFor(() => {
      expect(screen.queryByTestId("mock-drawer")).not.toBeInTheDocument();
    });
  });
});
