import Link from "next/link";
import styles from "@/components/buttons/button.module.css";
import type {
  ButtonAsButtonProps,
  ButtonProps,
} from "@/components/buttons/button.types";

function getButtonClassName(className?: string) {
  return [styles.button, className].filter(Boolean).join(" ");
}

export default function Button(props: ButtonProps) {
  const { children, className } = props;
  const buttonClassName = getButtonClassName(className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;

    return (
      <Link href={href} className={buttonClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButtonProps;

  return (
    <button type={type} className={buttonClassName} {...buttonProps}>
      {children}
    </button>
  );
}
