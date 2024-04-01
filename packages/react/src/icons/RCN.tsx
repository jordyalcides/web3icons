import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconRCN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.684 8.893a.48.48 0 0 0-.441-.317.47.47 0 0 0-.429.27 7 7 0 0 1-.411.77 6.85 6.85 0 0 0-3.274-3.71 6.793 6.793 0 0 0-8.88 2.412 6.9 6.9 0 0 0-.965 4.86 8.8 8.8 0 0 0-.943 1.565.471.471 0 1 0 .849.402 8 8 0 0 1 .416-.767 6.85 6.85 0 0 0 3.27 3.716 6.793 6.793 0 0 0 8.88-2.413 6.88 6.88 0 0 0 .968-4.86 8.7 8.7 0 0 0 .943-1.564.47.47 0 0 0 .017-.364M17.884 12c0 1.44-.527 2.837-1.478 3.917A5.87 5.87 0 0 1 6.29 13.418a8.76 8.76 0 0 1 4.479-2.712c.96-.258 1.941-.412 2.936-.45l-1.41 1.414.668.673 2.55-2.567-2.905-2.92-.665.67 1.77 1.782a13.7 13.7 0 0 0-3.171.48 10.7 10.7 0 0 0-3.399 1.578 8.4 8.4 0 0 0-1.02.857l-.004-.228a5.871 5.871 0 0 1 11.584-1.422 8.7 8.7 0 0 1-4.474 2.717c-.96.257-1.941.411-2.936.45l1.406-1.415-.669-.672-2.545 2.563 2.914 2.927.664-.669-1.77-1.783a14 14 0 0 0 3.172-.48 10.7 10.7 0 0 0 3.394-1.577 8 8 0 0 0 1.024-.857z"
          />
        </>
      ) : (
        <>
          <path
            fill="#4155FF"
            d="M19.685 8.893a.48.48 0 0 0-.442-.317.47.47 0 0 0-.428.27 7 7 0 0 1-.412.77 6.85 6.85 0 0 0-3.274-3.71 6.793 6.793 0 0 0-8.88 2.412 6.9 6.9 0 0 0-.964 4.86 8.8 8.8 0 0 0-.943 1.565.47.47 0 1 0 .848.402q.186-.392.416-.767a6.85 6.85 0 0 0 3.27 3.716 6.793 6.793 0 0 0 8.88-2.413 6.88 6.88 0 0 0 .969-4.86 8.7 8.7 0 0 0 .942-1.564.47.47 0 0 0 .018-.364M17.885 12c0 1.44-.527 2.837-1.479 3.917a5.871 5.871 0 0 1-10.114-2.499 8.76 8.76 0 0 1 4.478-2.712c.96-.258 1.942-.412 2.936-.45l-1.41 1.414.669.673 2.55-2.567-2.906-2.92-.664.67 1.77 1.782a13.7 13.7 0 0 0-3.172.48 10.7 10.7 0 0 0-3.398 1.578 8.4 8.4 0 0 0-1.02.857l-.005-.228a5.871 5.871 0 0 1 11.585-1.422 8.7 8.7 0 0 1-4.475 2.717c-.96.257-1.941.411-2.935.45l1.405-1.415-.668-.672-2.546 2.563 2.914 2.927.665-.669-1.77-1.783a14 14 0 0 0 3.171-.48 10.7 10.7 0 0 0 3.394-1.577 8 8 0 0 0 1.025-.857z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconRCN.displayName = 'RCN'