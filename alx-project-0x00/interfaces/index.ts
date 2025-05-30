export interface PillProps {
  title: string;
}
export interface ButtonProps {
  text: string; 
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  loadingText?: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
}
