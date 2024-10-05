import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FilterButton } from './';

const mockOptions = ['Option 1', 'Option 2', 'Option 3'];

describe('FilterButton Component', () => {
  it('should display the label initially', () => {
    render(<FilterButton label="Filtrar por" options={mockOptions} />);
    expect(screen.getByText('Filtrar por')).toBeInTheDocument();
  });

  it('should open the dropdown when clicked', () => {
    render(<FilterButton label="Filtrar por" options={mockOptions} />);

    fireEvent.click(screen.getByText('Filtrar por'));

    mockOptions.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('should select an option and update the button text', () => {
    const onOptionClick = vi.fn();

    render(<FilterButton label="Filtrar por" options={mockOptions} onOptionClick={onOptionClick} />);

    fireEvent.click(screen.getByText('Filtrar por'));

    fireEvent.click(screen.getByText('Option 1'));

    expect(screen.getByText('Option 1')).toBeInTheDocument();

    expect(onOptionClick).toHaveBeenCalledWith('Option 1');
  });

  it('should close the dropdown when clicking outside', () => {
    render(<FilterButton label="Filtrar por" options={mockOptions} />);

    fireEvent.click(screen.getByText('Filtrar por'));

    fireEvent.mouseDown(document);

    mockOptions.forEach(option => {
      expect(screen.queryByText(option)).not.toBeInTheDocument();
    });
  });

  it('should reset the selection when clicking on "Resetar"', () => {
    const onOptionClick = vi.fn();

    render(<FilterButton label="Filtrar por" options={mockOptions} onOptionClick={onOptionClick} />);

    fireEvent.click(screen.getByText('Filtrar por'));
    fireEvent.click(screen.getByText('Option 2'));

    expect(screen.getByText('Option 2')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Option 2'));
    fireEvent.click(screen.getByText('Resetar'));

    expect(screen.getByText('Filtrar por')).toBeInTheDocument();

    expect(onOptionClick).toHaveBeenCalledWith('');
  });
});
