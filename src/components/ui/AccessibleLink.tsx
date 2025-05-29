interface AccessibleLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const AccessibleLink = ({ href, children, className = '', external = false }: AccessibleLinkProps) => {
  const externalProps = external ? {
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": `${typeof children === 'string' ? children : 'Link'} (opens in new tab)`
  } : {};
  
  return (
    <a 
      href={href} 
      className={className}
      {...externalProps}
    >
      {children}
    </a>
  );
};

export default AccessibleLink;