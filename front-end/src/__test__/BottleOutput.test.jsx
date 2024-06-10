import { render, screen } from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import BottleOutput from '../components/BottleOutput';
import purelife from "../assets/purelife.png"

const mockImage = purelife
const mockQuantity = 1.25;
const mockClassName = 'w-32 h-auto'

describe('BottleOutput Component', () => {
    test('renders without crashing with required props', () => {
      render(<BottleOutput image={mockImage} quantity={mockQuantity} />);
      const imageElement = screen.getByAltText('Bottle');
      expect(imageElement).toBeInTheDocument();
    });
  
    test('applies the given className to the image', () => {
      render(<BottleOutput image={mockImage} quantity={mockQuantity} className={mockClassName} />);
      const imageElement = screen.getByAltText('Bottle');
      expect(imageElement).toHaveClass(mockClassName);
    });
  
    test('displays the correct quantity', () => {
      render(<BottleOutput image={mockImage} quantity={mockQuantity} />);
      const quantityElement = screen.getByText(mockQuantity.toString());
      expect(quantityElement).toBeInTheDocument();
    });
  
    test('image source is correct', () => {
      render(<BottleOutput image={mockImage} quantity={mockQuantity} />);
      const imageElement = screen.getByAltText('Bottle');
      expect(imageElement).toHaveAttribute('src', mockImage);
    });
  });