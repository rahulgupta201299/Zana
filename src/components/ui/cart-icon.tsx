const CartIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    {/* Shopping bag body - filled */}
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h10.5a6 6 0 0 1-1.5-4 6 6 0 0 1 6-6c.35 0 .69.03 1.03.08L21 6l-3-4H6z" />
    <path d="M9 6a3 3 0 0 1 6 0" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    {/* Plus circle badge on bottom right */}
    <circle cx="18" cy="18" r="5" fill="currentColor" />
    <line x1="18" y1="15.5" x2="18" y2="20.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="15.5" y1="18" x2="20.5" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default CartIcon;

