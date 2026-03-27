"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/buttons/button.module.css";
import type {
  ButtonAsButtonProps,
  ButtonProps,
} from "@/components/buttons/button.types";
import { getLocaleFromPathname, localizeHref } from "@/lib/i18n/config";

function getButtonClassName(className?: string) {
  return [styles.button, className].filter(Boolean).join(" ");
}

export default function Button(props: ButtonProps) {
  const { children, className } = props;
  const buttonClassName = getButtonClassName(className);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    const localizedHref = typeof href === "string" ? localizeHref(href, locale) : href;

    return (
      <Link href={localizedHref} className={buttonClassName} {...linkProps}>
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
