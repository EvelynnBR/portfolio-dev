import { classMerge } from "../utils/classMerge"

type Props = React.ComponentProps<"a"> & {
  url?: string
  legend?: string
  icon?: string
  alt?: string
  variant: "base" | "whatsapp"
}

const VARIANTS = {
  variant: {
    base: "bg-gray-600/20 text-gray-500 border border-gray-500",
    whatsapp: "bg-green-600/20 text-green-500 border border-green-500",
  },
}

export function RouterLink({
  url,
  legend,
  icon,
  alt,
  variant,
  className,
  ...rest
}: Props) {
  return (
    <div
      className={classMerge(
        "flex rounded-lg md:h-12 font-bold w-full md:w-fit hover:opacity-75 transition ease-linear",
        VARIANTS.variant[variant],
        className,
      )}
    >
      <a
        href={url}
        target="_blank"
        className="flex text-sm p-2 md:p gap-2 items-center"
        {...rest}
      >
        <img src={icon} alt={alt} className="w-6" />
        {legend}
      </a>
    </div>
  )
}
