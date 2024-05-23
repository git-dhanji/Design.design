export default function Button({
  text = "Button",
  variant = "normal",
  className = "",
  type = "button",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-[5px]  text-sm font-medium font-['NeueMontreal']";

  const variantClasses = {
    normal: "bg-blue-600 text-white rounded-sm",
    border: "bg-transparent dark:border-slate-100 border-[1.5px] rounded-full",
    borderken:
      "border-[#212121] border-[1.5px]  rounded-full",
    clutchy: "bg-transparent dark:border-slate-100 border-[1.5px] rounded-none",
    // if neeed , i can add more...
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button className={`${finalClasses}`} type={type} {...props}>
      {text}
    </button>
  );
}
