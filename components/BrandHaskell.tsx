import { JSX } from "preact";

type Props = JSX.SVGAttributes<SVGSVGElement> & {
  size?: number;
  color?: string;
  stroke?: number;
};

export default function BrandHaskell({
  size = 24,
  color = "currentColor",
  ...props
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Haskell logo"
      class="icon icon-brand-haskell"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...props}
    >
      <title>Haskell</title>
      <path d="M0 3.535 5.647 12 0 20.465h4.235L9.883 12 4.235 3.535zm5.647 0L11.294 12l-5.647 8.465h4.235l3.53-5.29 3.53 5.29h4.234L9.883 3.535zm8.941 4.938 1.883 2.822H24V8.473zm2.824 4.232 1.882 2.822H24v-2.822z" />
    </svg>
  );
}
