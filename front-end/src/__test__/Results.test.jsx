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
    it('should generate a solution', () => {
        const mockProps = {
        hours: "08",
        minute: "30",
        period: "AM",
        gender: "male",
        weight: "70",
        climate: "neutral",
        exerciseMinutes: 60,
        bottles: [0.5, 0.5, ...Array(16).fill(0)], // 1 of each bottle type
        weightUnit: "kg",
        directInputUnit: "ml",
        directInput: 500,
        };

        render(<Results {...mockProps} />);

    });
});