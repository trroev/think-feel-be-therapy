import { forwardRef, memo, type Ref, type SVGProps } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    aria-hidden="true"
    ref={ref}
    role="presentation"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m0 160 120-16c120-16 360-48 600-37.3 240 10.3 480 64.3 600 90.6l120 26.7v96H0Z"
      fill="currentColor"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export { Memo as Curve }
