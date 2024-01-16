// ResponseBubble.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResponseBubble from './ResponseBubble';

describe('ResponseBubble component', () => {
  test('renders with default values', () => {
    render(<ResponseBubble />);
    
    // You can add more specific assertions based on your component's structure
    expect(screen.getByText("Foodchat Assistant")).toBeInTheDocument();
    expect(screen.getByText(/Welcome to the world/)).toBeInTheDocument();
  });

  test('handles dropdown click', () => {
    render(<ResponseBubble />);
    
    // Simulate a click on the dropdown
    fireEvent.click(screen.getByTestId('dropdown-button'));

    // Add assertions based on the expected behavior when the dropdown is clicked
    expect(screen.getByText('Save')).toBeInTheDocument();
    // Add more assertions as needed
  });

  // Add more tests for other functionalities like copying and saving
});
