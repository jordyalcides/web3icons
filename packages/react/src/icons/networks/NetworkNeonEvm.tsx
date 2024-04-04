import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const NetworkNeonEvm = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 20c4.418 0 8-3.58 8-7.994C20.011 7.579 16.418 4 12 4s-8 3.58-8 7.994C4 16.41 7.582 20 12 20M8.904 8.596l2.994 2.992V8.754c0-.023 0-.057.012-.08a.2.2 0 0 1 .045-.067.2.2 0 0 1 .068-.045c.022-.012.056-.012.079-.012h3.389c.023 0 .057.012.08.012.022.011.045.022.067.045a.2.2 0 0 1 .046.068c.01.022.01.056.01.079v6.729c0 .034 0 .057-.01.08a.2.2 0 0 1-.046.067c-.022.023-.045.034-.067.045-.023.012-.057.012-.08.012-.033 0-.056 0-.09-.012-.022-.01-.056-.022-.068-.045l-2.994-2.992v2.845c0 .023 0 .057-.011.08a.2.2 0 0 1-.045.067c-.023.023-.046.034-.068.045-.023.012-.057.012-.08.012H8.747c-.023 0-.057-.012-.08-.012a.2.2 0 0 1-.067-.045.2.2 0 0 1-.045-.068c-.012-.022-.012-.056-.012-.079V12.12c0-.023 0-.034.012-.057V8.754a.25.25 0 0 1 .034-.124.18.18 0 0 1 .101-.08.23.23 0 0 1 .125-.01.4.4 0 0 1 .09.056"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#DF42AB"
            d="M12 20c4.418 0 8-3.58 8-7.994C20.011 7.579 16.418 4 12 4s-8 3.58-8 7.994C4 16.41 7.582 20 12 20M8.904 8.596l2.994 2.992V8.754c0-.023 0-.057.012-.08a.2.2 0 0 1 .045-.067.2.2 0 0 1 .068-.045c.022-.012.056-.012.079-.012h3.389c.023 0 .057.012.08.012.022.011.045.022.067.045a.2.2 0 0 1 .046.068c.01.022.01.056.01.079v6.729c0 .034 0 .057-.01.08a.2.2 0 0 1-.046.067c-.022.023-.045.034-.067.045-.023.012-.057.012-.08.012-.033 0-.056 0-.09-.012-.022-.01-.056-.022-.068-.045l-2.994-2.992v2.845c0 .023 0 .057-.011.08a.2.2 0 0 1-.045.067c-.023.023-.046.034-.068.045-.023.012-.057.012-.08.012H8.747c-.023 0-.057-.012-.08-.012a.2.2 0 0 1-.067-.045.2.2 0 0 1-.045-.068c-.012-.022-.012-.056-.012-.079V12.12c0-.023 0-.034.012-.057V8.754a.25.25 0 0 1 .034-.124.18.18 0 0 1 .101-.08.23.23 0 0 1 .125-.01.4.4 0 0 1 .09.056"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

NetworkNeonEvm.displayName = 'neon-evm'