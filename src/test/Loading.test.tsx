import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Loading from '../components/Loading';

describe('Loading component', () => {
  it('renders the container', () => {
    render(<Loading duration={1500} />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('renders the progress bar', () => {
    render(<Loading duration={1500} />);
    expect(screen.getByTestId('progress')).toBeInTheDocument();
  });
});
