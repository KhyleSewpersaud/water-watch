import { render, fireEvent, screen } from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import App from '../App.jsx'

describe("Checking Check Button", () => {
  it("Scrolls down to Questions component", () => {
    render(<App />);

    // Mock the scrollIntoView function
    const scrollIntoViewMock = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoViewMock;
    window.scrollTo = vi.fn()

    const checkButton = screen.getByText("Check");

    // Simulate clicking the "Check" button
    fireEvent.click(checkButton);

    // Ensure the mock function was called
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });

    // Optionally, you can check how many times it was called
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
  });
});

