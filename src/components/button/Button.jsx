export default function Button({
  text = "Button",
  variant = "normal",
  className = "",
  type = "button",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-[5px]  text-sm font-medium rounded-full font-['NeueMontreal']";

  const variantClasses = {
    normal: "bg-blue-600 text-white",
    border: "bg-transparent dark:border-slate-100 border-[1.5px]",
    // if neeed , i can add more...
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  switch (variant) {
    case "border":
      return (
        <button className={`${finalClasses}`} type={type} {...props}>
          {text}
        </button>
      );

    case "normal":
      return (
        <button className={`${finalClasses}`} type={type} {...props}>
          {text}
        </button>
      );


      // Here i confused little bit , improve after alone time 

    default:
      return (
        <button className={`${className} `} type={type} {...props}>
          {text}
        </button>
      );
  }
}
