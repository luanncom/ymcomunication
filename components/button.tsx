// CONTENT CLASS
const contentClass = "flex justify-center items-center gap-2.5 w-full p-5 border-b-8 shadow-lg border-red-900 bg-red-600 hover:bg-red-500 transition rounded-xl text-white font-semibold text-center disabled:bg-green-700 disabled:opacity-50";

export default function Button({
  onClick,
  disabled,
  children,
  className,
}:{
  onClick?: () => void,
  disabled?: boolean,
  children: React.ReactNode,
  className?: string,
}) {

  // OPTION CLASSNAME
  const contentClassName = className ? `${contentClass} ${className}` : contentClass;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={contentClassName}
    >
      {children}
    </button>
  );
}