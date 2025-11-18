/* eslint-disable @typescript-eslint/no-explicit-any */

// OPTION CLASSNAME
const optionClass = 'flex justify-center items-center ring-2 transition rounded-lg relative shadow-md p-2.5 bg-gray-100 ring-gray-200 hover:opacity-80 focus:ring-green-400'

export default function Option({
  onClick,
  className,
  children,
}:{
  onClick?: any,
  className?: string,
  children: React.ReactNode,
}) {

  // OPTION CLASSNAME
  const optionClassName = className ? `${optionClass} ${className}` : optionClass;

  return (
    <button
      type="button"
      onClick={onClick}
      className={optionClassName}
    >
      {children}
    </button>
  );
}