import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconRJV = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.583 11.143a.8.8 0 0 0-.257.047 5.9 5.9 0 0 0-2.469-.476c-1.375 0-2.691.46-3.857 1.415a6 6 0 0 0-3.857-1.415c-.806 0-1.633.108-2.46.476a.7.7 0 0 0-.261-.047c-.373 0-.708.24-.708.609 0 .368.317.668.686.677a.715.715 0 0 0 .72-.566c1.843-.93 3.673-.45 5.293.909a5.3 5.3 0 0 0-1.127 3.248c.013 1.38.664 2.602 1.714 3.695 1.029-1.15 1.701-2.375 1.714-3.695.009-.934-.347-1.92-.994-2.957a4.3 4.3 0 0 0-.536.707c.429.776.686 1.526.673 2.25-.017.845-.385 1.646-.861 2.409a3.5 3.5 0 0 1-.853-2.409 4.67 4.67 0 0 1 1.444-3.244c1.616-1.359 3.45-1.847 5.293-.917a.705.705 0 0 0 .673.57c.386.017.746-.219.729-.617a.716.716 0 0 0-.695-.669z"
          />
          <path
            fill="currentColor"
            d="M18 9.244a.62.62 0 0 0-.128-.385.74.74 0 0 0-.78-.262.75.75 0 0 0-.365.228 7.67 7.67 0 0 0-4.727.95 7.68 7.68 0 0 0-4.731-.95.73.73 0 0 0-.523-.253c-.42-.022-.78.325-.75.72.03.355.351.625.724.625a.73.73 0 0 0 .6-.325 6.7 6.7 0 0 1 2.46.12 6.5 6.5 0 0 1 2.216 1.002 6.65 6.65 0 0 1 4.671-1.118.74.74 0 0 0 1.029.197l.03.009-.013-.022a.64.64 0 0 0 .283-.536z"
          />
          <path
            fill="currentColor"
            d="M14.743 6.857a.7.7 0 0 0-.6.352A7.2 7.2 0 0 0 12 8.057a7.2 7.2 0 0 0-2.143-.848.7.7 0 0 0-.591-.352.69.69 0 0 0-.694.673c0 .36.3.669.664.677a.7.7 0 0 0 .54-.24c.806.193 1.56.545 2.224 1.033.664-.49 1.42-.84 2.224-1.028a.7.7 0 0 0 .519.24.696.696 0 0 0 .686-.669.693.693 0 0 0-.686-.686"
          />
          <path
            fill="currentColor"
            d="M12 6.857a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714"
          />
        </>
      ) : (
        <>
          <path
            fill="#04BFBF"
            d="M18.582 11.143a.8.8 0 0 0-.257.047 5.9 5.9 0 0 0-2.468-.476c-1.376 0-2.692.46-3.857 1.415a6 6 0 0 0-3.858-1.415c-.805 0-1.632.108-2.46.476a.7.7 0 0 0-.261-.047c-.373 0-.707.24-.707.609 0 .368.317.668.686.677a.715.715 0 0 0 .72-.566c1.842-.93 3.672-.45 5.292.909a5.3 5.3 0 0 0-1.127 3.248c.013 1.38.665 2.602 1.715 3.695 1.028-1.15 1.701-2.375 1.714-3.695.008-.934-.347-1.92-.994-2.957a4.3 4.3 0 0 0-.536.707c.428.776.686 1.526.673 2.25-.017.845-.386 1.646-.862 2.409a3.52 3.52 0 0 1-.853-2.409 4.67 4.67 0 0 1 1.445-3.244c1.615-1.359 3.45-1.847 5.293-.917a.705.705 0 0 0 .672.57c.386.017.746-.219.729-.617a.716.716 0 0 0-.694-.669z"
          />
          <path
            fill="#04BFBF"
            d="M18 9.244a.62.62 0 0 0-.129-.385.74.74 0 0 0-.78-.262.75.75 0 0 0-.364.228 7.67 7.67 0 0 0-4.727.95 7.68 7.68 0 0 0-4.732-.95.73.73 0 0 0-.523-.253c-.42-.022-.78.325-.75.72.03.355.352.625.725.625a.73.73 0 0 0 .6-.325 6.7 6.7 0 0 1 2.46.12 6.5 6.5 0 0 1 2.215 1.002 6.65 6.65 0 0 1 4.672-1.118.74.74 0 0 0 1.028.197l.03.009-.013-.022a.64.64 0 0 0 .283-.536z"
          />
          <path
            fill="#04BFBF"
            d="M14.742 6.857a.7.7 0 0 0-.6.352A7.2 7.2 0 0 0 12 8.057a7.2 7.2 0 0 0-2.143-.848.7.7 0 0 0-.592-.352.69.69 0 0 0-.694.673c0 .36.3.669.664.677a.7.7 0 0 0 .54-.24c.806.193 1.56.545 2.225 1.033.664-.49 1.42-.84 2.224-1.028.128.15.321.235.518.24a.696.696 0 0 0 .686-.669.693.693 0 0 0-.686-.686"
          />
          <path
            fill="#04BFBF"
            d="M12 6.857a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconRJV.displayName = 'RJV'