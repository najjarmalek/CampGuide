import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string
  full?:boolean
};

function Button({type, title, icon, variant,full}:ButtonProps) {
  return (
    <button
    className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'} `}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="cursor-pointer bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
}

export default Button;
