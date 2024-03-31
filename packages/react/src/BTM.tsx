import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconBTM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m8.68 11.602-1.124 2.376.52 1.946 1.33.353 1.643 1.643-.494.501-3.923-1.053-1.053-3.923 4.218-4.219zl-1.124 2.376 3.493-3.5-1.252-1.252zm1.798 1.348 3.493 3.493 1.953-.52.353-1.329 1.643-1.643.501.494-1.053 3.923-3.923 1.053-4.22-4.219zm3.044-1.9-3.493-3.494-1.953.52-.353 1.33-1.643 1.643-.501-.494 1.053-3.923 3.923-1.053 4.219 4.218zm1.072-3.327L12.951 6.08l.494-.501 3.923 1.053 1.053 3.923-4.219 4.219-1.252-1.252 3.493-3.5-.52-1.946z"
          />
        </>
      ) : (
        <>
          <path
            fill="#6C5A5A"
            d="m8.68 11.602-1.123 2.376.52 1.946 1.33.353 1.643 1.643-.494.501-3.924-1.053-1.053-3.923 4.219-4.219zl-1.124 2.376 3.493-3.5-1.252-1.252zm1.799 1.348 3.492 3.493 1.953-.52.353-1.329 1.644-1.643.5.494-1.052 3.923-3.924 1.053-4.219-4.219zm3.043-1.9L10.03 7.556l-1.952.52-.353 1.33-1.644 1.643-.5-.494 1.052-3.923 3.924-1.053 4.218 4.218zm1.072-3.327L12.952 6.08l.494-.501 3.924 1.053 1.053 3.923-4.22 4.219-1.251-1.252 3.493-3.5-.52-1.946z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBTM.displayName = 'BTM'