const Button = ({ 
    id, 
    onClick,
    title, 
    rightIcon, 
    leftIcon, 
    containerClass = "" 
  }) => {
    return (
      <button
        id={id}
        onClick={onClick}
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
      >
        {/* Left Icon */}
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
  
        {/* Title Animation */}
        <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
          <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
            {title}
          </div>
          <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            {title}
          </div>
        </span>
  
        {/* Right Icon */}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  };
  
  export default Button;
  