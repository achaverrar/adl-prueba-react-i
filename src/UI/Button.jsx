import "./Button.css";

const Button = ({ children, className, variant }) => {
  const extraClassName = variant
    ? `button--${variant} ${className}`
    : className;

  return <button className={`button ${extraClassName}`}>{children}</button>;
};

export default Button;
