import Link from "next/link";
import { useRouter } from "next/router";
import React, { Children } from "react";
interface Props {
  activeClassName: string;
  activeStyle: StyleSheet;
  children: JSX.Element;
  href: string;
  as: string;
}
export const ActiveLink = ({
  children,
  activeClassName,
  activeStyle,
  ...props
}: Partial<Props>) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child?.props.className || "";
  const childStyle: StyleSheet = child?.props.style || {};
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;
  return child ? (
    <Link href="/" {...props}>
      {React.cloneElement(child, {
        className: className || null,
        style: { ...childStyle, ...activeStyle },
      })}
    </Link>
  ) : null;
};
