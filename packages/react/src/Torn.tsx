import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconTORN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.873 8.392c.914-1.25 3.58-3.482 6.93-2.424 3.351 1.057 4.385 4.145 4.483 5.556-.204-1.05-1.243-3.248-3.765-3.645 1.367.997 3.754 3.85 2.363 7.281-1.39 3.432-4.254 4.179-5.512 4.123 1.018-.08 3.178-.928 3.681-3.68-.697.98-2.734 2.889-5.309 2.682-3.218-.26-5.622-2.44-6.03-5.473.167.962 1.14 2.962 3.7 3.272-1.03-.634-3.015-2.71-2.72-5.934.37-4.03 4.126-5.38 5.79-5.436-1.143.182-3.467 1.17-3.611 3.678M12 14.572a2.572 2.572 0 1 0 0-5.144 2.572 2.572 0 0 0 0 5.143"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#92FFBE"
            d="M7.872 8.392c.915-1.25 3.581-3.482 6.931-2.424 3.35 1.057 4.385 4.145 4.482 5.556-.204-1.05-1.243-3.248-3.765-3.645 1.367.997 3.755 3.85 2.364 7.281-1.391 3.432-4.255 4.179-5.512 4.123 1.017-.08 3.177-.928 3.68-3.68-.696.98-2.734 2.889-5.308 2.682-3.219-.26-5.623-2.44-6.03-5.473.166.962 1.14 2.962 3.7 3.272-1.03-.634-3.016-2.71-2.72-5.934.37-4.03 4.125-5.38 5.79-5.436-1.144.182-3.467 1.17-3.612 3.678M12 14.572a2.572 2.572 0 1 0 0-5.144 2.572 2.572 0 0 0 0 5.143"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconTORN.displayName = 'TORN'