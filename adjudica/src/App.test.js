import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Adjudica Landing Page', () => {
  test('renders hero section with title and CTA', () => {
    render(<App />);

    const titleElement = screen.getByText(/AI-Assisted Dispute Layer/i);
    expect(titleElement).toBeInTheDocument();

    const ctaButton = screen.getByRole('button', { name: /Get early access/i });
    expect(ctaButton).toBeInTheDocument();
  });

  test('renders the footer with links', () => {
    render(<App />);

    const footerText = screen.getByText(/©.*Adjudica Technologies/i);
    expect(footerText).toBeInTheDocument();

    const termsLink = screen.getByText(/Terms of Service/i);
    const privacyLink = screen.getByText(/Privacy Policy/i);
    expect(termsLink).toBeInTheDocument();
    expect(privacyLink).toBeInTheDocument();
  });

  test('renders feature pills correctly', () => {
    render(<App />);

    const featureSentinel = screen.getByText(/Autonomous Dispute Engine/i);
    const featureJuror = screen.getByText(/Human–AI Collective Intelligence/i);
    const featureUDV = screen.getByText(/Single Capital Pool/i);

    expect(featureSentinel).toBeInTheDocument();
    expect(featureJuror).toBeInTheDocument();
    expect(featureUDV).toBeInTheDocument();
  });

  test('button click prompts login/signup', () => {
    render(<App />);

    const ctaButton = screen.getByRole('button', { name: /Get early access/i });
    fireEvent.click(ctaButton);

    expect(window.alert).toHaveBeenCalledWith("Please log in or sign up to continue.");
  });

  test('login/signup button click prompts login/signup', () => {
    render(<App />);

    const loginButton = screen.getByRole('button', { name: /Log in \/ Sign up/i });
    fireEvent.click(loginButton);

    expect(window.alert).toHaveBeenCalledWith("Please log in or sign up to continue.");
  });
});
