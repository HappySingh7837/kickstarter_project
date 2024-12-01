import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Table from './Table';

describe('App Component', () => {
  test('renders the heading', () => {
    render(<App />);
    const heading = screen.getByText(/Kickstarter Projects/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders pagination buttons', async () => {
    render(<App />);
    const paginationButtons = await screen.findAllByRole('button');
    expect(paginationButtons.length).toBeGreaterThan(0);
  });
});

describe('Table Component', () => {
  const mockProjects = [
    { 'percentage.funded': 150, 'amt.pledged': 3000 },
    { 'percentage.funded': 100, 'amt.pledged': 2000 },
  ];

  test('renders the table with project data', () => {
    render(<Table projects={mockProjects} />);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(3); // 1 header + 2 data rows
  });

  test('renders correct data in the table', () => {
    render(<Table projects={mockProjects} />);
    const firstRow = screen.getByText('150');
    const secondRow = screen.getByText('3000');
    expect(firstRow).toBeInTheDocument();
    expect(secondRow).toBeInTheDocument();
  });
});
