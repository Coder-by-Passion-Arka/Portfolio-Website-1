import React from "react";
import LandingPage from "../LandingPage";

// LandingPage.test.tsx
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// LandingPage.test.tsx
// Mocks for nested components
jest.mock("@/components/ui/button", () => ({
  Button: ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  ),
}));
jest.mock("@/components/ui/card", () => ({
  Card: ({ children, ...props }: any) => (
    <div data-testid="mock-card" {...props}>
      {children}
    </div>
  ),
  CardContent: ({ children, ...props }: any) => (
    <div data-testid="mock-card-content" {...props}>
      {children}
    </div>
  ),
}));
jest.mock("react-router-dom", () => ({
  Link: ({ children, ...props }: any) => <a {...props}>{children}</a>,
}));
jest.mock("lucide-react", () => ({
  ArrowRight: (props: any) => <svg data-testid="arrow-right" {...props} />,
}));
jest.mock("@/assets/my_img_1.jpg", () => ({
  My_img_1: "mocked-image-path.jpg",
}));

describe("LandingPage() LandingPage method", () => {
  // Happy Path Tests
  describe("Happy paths", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.runOnlyPendingTimers();
      jest.useRealTimers();
    });

    it("renders the hero section with animated name and blinking cursor", () => {
      // This test checks the typing animation and cursor
      // The nameText is "Hello, Jayanta Paul"
      render(<LandingPage />);
      // Initially, only the cursor should be visible
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("|");

      // Simulate the typing animation
      for (let i = 0; i < "Hello, Jayanta Paul".length; i++) {
        act(() => {
          jest.advanceTimersByTime(100);
        });
        // The text should incrementally appear
        const expectedText = "Hello, Jayanta Paul".slice(0, i + 1) + "|";
        expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
          expectedText
        );
      }
    });

    it("renders the hero section with correct description and buttons", () => {
      // This test checks the presence of hero description and both buttons
      render(<LandingPage />);
      expect(
        screen.getByText(
          /A passionate professional with expertise in your field/i
        )
      ).toBeInTheDocument();

      // Buttons
      expect(
        screen.getByRole("button", { name: /View My Achievements/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /My Academic Journey/i })
      ).toBeInTheDocument();

      // Links inside buttons
      expect(
        screen.getByText(/View My Achievements/i).closest("a")
      ).toHaveAttribute("href", "/achievements");
      expect(
        screen.getByText(/My Academic Journey/i).closest("a")
      ).toHaveAttribute("href", "/timeline");
    });

    it("renders the profile image placeholder with initials", () => {
      // This test checks the presence of the profile image placeholder
      render(<LandingPage />);
      // The initials "YN" should be present
      expect(screen.getByText("YN")).toBeInTheDocument();
    });

    it("renders the About section with correct headings and content", () => {
      // This test checks the About section's headings and content
      render(<LandingPage />);
      expect(
        screen.getByRole("heading", { name: /About Me/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: /Professional Summary/i })
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /A dedicated professional with X years of experience in your field/i
        )
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          /My approach combines analytical thinking with creative problem-solving/i
        )
      ).toBeInTheDocument();
    });

    it("renders all key skills in the About section", () => {
      // This test checks that all 6 skills are rendered
      render(<LandingPage />);
      [
        "Skill 1",
        "Skill 2",
        "Skill 3",
        "Skill 4",
        "Skill 5",
        "Skill 6",
      ].forEach((skill) => {
        expect(screen.getByText(skill)).toBeInTheDocument();
      });
    });

    it("renders the Featured Projects section with 3 project cards", () => {
      // This test checks the Featured Projects section and its cards
      render(<LandingPage />);
      expect(
        screen.getByRole("heading", { name: /Featured Projects/i })
      ).toBeInTheDocument();

      // There should be 3 project cards
      const cards = screen.getAllByTestId("mock-card");
      expect(cards).toHaveLength(3);

      // Each card should have Project 1, 2, 3
      [1, 2, 3].forEach((num) => {
        expect(screen.getByText(`Project ${num}`)).toBeInTheDocument();
      });

      // Each card should have a "Learn More" button
      const learnMoreButtons = screen.getAllByRole("button", {
        name: /Learn More/i,
      });
      expect(learnMoreButtons).toHaveLength(3);
    });

    it("renders ArrowRight icons in all appropriate places", () => {
      // This test checks that ArrowRight icons are rendered in buttons and project cards
      render(<LandingPage />);
      // There should be 5 ArrowRight icons: 2 in hero buttons, 3 in project cards
      const icons = screen.getAllByTestId("arrow-right");
      expect(icons).toHaveLength(5);
    });
  });

  // Edge Case Tests
  describe("Edge cases", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.runOnlyPendingTimers();
      jest.useRealTimers();
    });

    it("typing animation stops at the end of the nameText", () => {
      // This test ensures the typing animation does not go past the end
      render(<LandingPage />);
      // Simulate the full typing animation
      for (let i = 0; i < "Hello, Jayanta Paul".length; i++) {
        act(() => {
          jest.advanceTimersByTime(100);
        });
      }
      // Advance extra time to ensure no more characters are added
      act(() => {
        jest.advanceTimersByTime(500);
      });
      // The text should not change anymore
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        "Hello, Jayanta Paul|"
      );
    });

    it("renders correctly when the window is resized (responsive layout)", () => {
      // This test simulates a window resize to check for responsive classes
      render(<LandingPage />);
      // Simulate a small screen
      global.innerWidth = 375;
      global.dispatchEvent(new Event("resize"));
      // The hero section should still be present
      expect(
        screen.getByRole("heading", { name: /Hello, Jayanta Paul/i })
      ).toBeInTheDocument();
      // Simulate a large screen
      global.innerWidth = 1200;
      global.dispatchEvent(new Event("resize"));
      // The About and Projects sections should still be present
      expect(
        screen.getByRole("heading", { name: /About Me/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: /Featured Projects/i })
      ).toBeInTheDocument();
    });

    it("renders all sections even if the animation is interrupted early", () => {
      // This test checks that all sections render even if the typing animation is not complete
      render(<LandingPage />);
      // Do not advance timers (animation not complete)
      expect(
        screen.getByRole("heading", { name: /About Me/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: /Featured Projects/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: /Professional Summary/i })
      ).toBeInTheDocument();
    });
  });
});
