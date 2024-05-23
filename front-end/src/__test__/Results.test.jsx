import { render, screen } from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import Results from '../components/Results';


vi.mock('../components/BottleOutput', () => ({
    default: ({ image, quantity, className }) => (
      <div data-testid="bottle-output">
        <img src={image} alt="bottle" className={className} />
        <span>{quantity}</span>
      </div>
    ),
  }))

  
describe('Results Component', () => {
    it('should generate 3 solutions for finalResults when lots of bottles used', () => {
        const mockProps = {
        hours: "08",
        minute: "30",
        period: "AM",
        gender: "male",
        weight: "70",
        climate: "neutral",
        exerciseMinutes: 60,
        bottles: Array(18).fill(0.25), // 1 of each bottle type
        weightUnit: "kg",
        directInputUnit: "ml",
        directInput: 500,
        };

        render(<Results {...mockProps} />);

        // Check for the rendered mock BottleOutput components
        const bottleOutputs = screen.getAllByTestId('bottle-output');
        expect(bottleOutputs.length).toBeGreaterThanOrEqual(3);

        // Optional: Check if each solution has the expected quantity
        bottleOutputs.forEach((output) => {
        const quantity = parseFloat(output.querySelector('span').textContent);
        expect(quantity).toBeGreaterThan(0);
        });
    });
});