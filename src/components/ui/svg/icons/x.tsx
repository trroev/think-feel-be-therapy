import { forwardRef, memo, type Ref, type SVGProps } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    aria-label="Close"
    fill="none"
    height={15}
    ref={ref}
    role="img"
    viewBox="0 0 15 15"
    width={15}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M12.854 2.854a.5.5 0 0 0-.708-.708L7.5 6.793 2.854 2.146a.5.5 0 1 0-.708.708L6.793 7.5l-4.647 4.646a.5.5 0 0 0 .708.708L7.5 8.207l4.646 4.647a.5.5 0 0 0 .708-.708L8.207 7.5l4.647-4.646Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export { Memo as X }
