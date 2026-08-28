import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import VirtualStemDetailsPage from '../components/VirtualStemDetailsPage';

describe('VirtualStemDetailsPage Render Test', () => {
  it('renders VirtualStemDetailsPage without crashing', () => {
    const { container } = render(<VirtualStemDetailsPage onBackToHome={() => {}} />);
    expect(container).toBeDefined();
    expect(container.textContent).toContain('Virtual-STEM Bolivia');
  });
});
