import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('only text', () => {
    render(
      <Button>
        Test
      </Button>,
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  test('clear theme', () => {
    render(
      <Button theme={ThemeButton.CLEAR}>
        Test
      </Button>,
    );
    expect(screen.getByText('Test')).toHaveClass(ThemeButton.CLEAR);
  });
});
