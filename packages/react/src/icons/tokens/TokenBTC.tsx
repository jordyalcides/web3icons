import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenBTC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.115 10.587c.221-1.497-.912-2.296-2.474-2.838l.506-2.017-1.233-.307-.492 1.968-.984-.236.499-1.982-1.234-.306-.506 2.025-.784-.186v-.007l-1.704-.428-.328 1.32s.912.214.898.22c.5.13.585.457.57.714l-.57 2.31.129.043-.136-.03-.806 3.231c-.057.15-.214.378-.563.285.014.021-.891-.214-.891-.214l-.613 1.405 1.604.399.877.229-.514 2.046 1.234.306.5-2.025.99.257-.506 2.018 1.233.307.506-2.047c2.104.4 3.687.243 4.35-1.661.535-1.533-.028-2.41-1.133-2.995.805-.178 1.411-.713 1.568-1.804zm-2.816 3.95c-.378 1.533-2.96.699-3.793.5l.677-2.717c.834.214 3.515.62 3.116 2.21zm.378-3.971c-.343 1.39-2.496.684-3.187.513l.612-2.46c.7.172 2.938.5 2.575 1.947"
          />
        </>
      ) : (
        <>
          <path
            fill="#F7931A"
            d="M17.116 10.587c.22-1.497-.913-2.296-2.474-2.838l.505-2.017-1.233-.307-.492 1.968-.984-.236.5-1.982-1.234-.306-.506 2.025-.785-.186v-.007L8.71 6.273l-.328 1.32s.913.214.898.22c.5.13.585.457.571.714l-.57 2.31.128.043-.135-.03-.806 3.231c-.057.15-.214.378-.563.285.014.021-.892-.214-.892-.214L6.4 15.557l1.605.399.876.229-.513 2.046 1.233.306.5-2.025.99.257-.505 2.018 1.233.307.506-2.047c2.103.4 3.687.243 4.35-1.661.534-1.533-.029-2.41-1.134-2.995.806-.178 1.412-.713 1.569-1.804zm-2.817 3.95c-.378 1.533-2.959.699-3.793.5l.678-2.717c.834.214 3.515.62 3.115 2.21zm.378-3.971c-.342 1.39-2.495.684-3.187.513l.613-2.46c.699.172 2.938.5 2.574 1.947"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenBTC.displayName = 'BTC'