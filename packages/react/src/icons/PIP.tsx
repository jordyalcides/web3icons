import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconPIP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.273 8.571a2.884 2.884 0 0 0-2.987 2.97v4.65c0 .086.008.095.09.095H5.91c.077 0 .09-.01.09-.095v-1.62h1.213c1.843 0 3.073-1.32 3.073-3.008A2.915 2.915 0 0 0 7.273 8.57m0 1.715c.818 0 1.298.557 1.298 1.294 0 .733-.48 1.277-1.345 1.277H6V11.57c0-.724.446-1.285 1.277-1.285zM17.13 8.57a2.884 2.884 0 0 0-2.987 2.97v4.65c0 .086.008.095.09.095h1.534c.077 0 .09-.01.09-.095v-1.62h1.213c1.843 0 3.073-1.32 3.073-3.008A2.915 2.915 0 0 0 17.13 8.57m0 1.715c.818 0 1.298.557 1.298 1.294 0 .733-.48 1.277-1.345 1.277h-1.226V11.57c0-.724.446-1.285 1.277-1.285zm-5.893.428c-.052 0-.094.034-.094.077v3.703c0 .043.042.077.094.077h1.526c.051 0 .094-.034.094-.077V10.79c0-.043-.043-.077-.094-.077zm-.094-1.286a.857.857 0 1 1 1.714 0 .857.857 0 0 1-1.714 0"
          />
        </>
      ) : (
        <>
          <path
            fill="#073DE8"
            d="M7.273 8.571a2.884 2.884 0 0 0-2.987 2.97v4.65c0 .086.008.095.09.095H5.91c.077 0 .09-.01.09-.095v-1.62h1.213c1.843 0 3.073-1.32 3.073-3.008A2.915 2.915 0 0 0 7.273 8.57m0 1.715c.818 0 1.298.557 1.298 1.294 0 .733-.48 1.277-1.345 1.277H6V11.57c0-.724.446-1.285 1.277-1.285zM17.13 8.57a2.884 2.884 0 0 0-2.987 2.97v4.65c0 .086.008.095.09.095h1.534c.077 0 .09-.01.09-.095v-1.62h1.213c1.843 0 3.073-1.32 3.073-3.008A2.915 2.915 0 0 0 17.13 8.57m0 1.715c.818 0 1.298.557 1.298 1.294 0 .733-.48 1.277-1.345 1.277h-1.226V11.57c0-.724.446-1.285 1.277-1.285zm-5.893.428c-.052 0-.094.034-.094.077v3.703c0 .043.042.077.094.077h1.526c.051 0 .094-.034.094-.077V10.79c0-.043-.043-.077-.094-.077zm-.094-1.286a.857.857 0 1 1 1.714 0 .857.857 0 0 1-1.714 0"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPIP.displayName = 'PIP'