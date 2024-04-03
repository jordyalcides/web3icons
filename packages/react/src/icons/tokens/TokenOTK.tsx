import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenOTK = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.836 13.491a.79.79 0 0 0-.351-.827l-.352-.236-.866.429c.652 0 1.2.296 1.157.501a6.484 6.484 0 0 1-6.35 5.07A6.46 6.46 0 0 1 5.571 12c0-3.549 2.91-6.429 6.497-6.429 3.115 0 5.721 2.173 6.351 5.07.043.214-.506.502-1.157.502l.866.428.343-.214a.79.79 0 0 0 .364-.836 6.92 6.92 0 0 0-6.767-5.378A6.89 6.89 0 0 0 5.143 12c0 3.788 3.103 6.857 6.93 6.857 3.309 0 6.077-2.297 6.763-5.366m-5.769-.154a2.7 2.7 0 0 0 1.556-2.482c0-1.5-1.17-2.712-2.631-2.712-1.462 0-2.623 1.243-2.623 2.742a2.66 2.66 0 0 0 1.56 2.456l-.999.866c-.206-.227-.686-.686-.93-.742.116.138.253.386.377.618.133.244.257.471.343.544.154.128.913.03 1.346-.472v.13l-.656 1.05a2.24 2.24 0 0 0-.981-.365l.06.047c.115.094.227.18.368.351.172.215.339.416.438.472.188.098 1.015-.193 1.298-.87l.407-.4.395.364c.265.703 1.118 1.003 1.31.9.1-.05.262-.252.438-.467.12-.145.219-.214.317-.287l.112-.081a2.2 2.2 0 0 0-.982.334l-.668-1.063.034-.098c.428.484 1.17.578 1.32.454.09-.073.214-.3.343-.544.128-.232.265-.48.381-.617-.248.055-.724.514-.93.741zM12.034 10.8h-.068l-.116.15c-.223.291-.476.621-.801.621-.42 0-.763-.386-.763-.857 0-.446.3-.81.686-.853v-.004h2.134v.017c.343.082.608.429.608.84 0 .471-.342.857-.762.857-.326 0-.579-.33-.802-.621z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#OTK__a)"
            d="M18.835 13.491a.79.79 0 0 0-.351-.827l-.351-.236-.866.429c.651 0 1.2.296 1.157.501a6.484 6.484 0 0 1-6.351 5.07A6.46 6.46 0 0 1 5.57 12c0-3.549 2.91-6.429 6.497-6.429 3.116 0 5.722 2.173 6.352 5.07.043.214-.506.502-1.157.502l.865.428.343-.214a.79.79 0 0 0 .364-.836 6.92 6.92 0 0 0-6.767-5.378A6.89 6.89 0 0 0 5.143 12c0 3.788 3.102 6.857 6.93 6.857 3.308 0 6.077-2.297 6.762-5.366m-5.768-.154a2.7 2.7 0 0 0 1.556-2.482c0-1.5-1.17-2.712-2.632-2.712-1.461 0-2.623 1.243-2.623 2.742a2.66 2.66 0 0 0 1.56 2.456l-.998.866c-.206-.227-.686-.686-.93-.742.115.138.253.386.377.618.133.244.257.471.343.544.154.128.913.03 1.345-.472v.13l-.655 1.05a2.24 2.24 0 0 0-.982-.365l.06.047c.116.094.227.18.369.351.171.215.338.416.437.472.189.098 1.016-.193 1.299-.87l.407-.4.394.364c.266.703 1.119 1.003 1.311.9.099-.05.262-.252.438-.467.12-.145.218-.214.317-.287l.11-.08c-.35.03-.686.146-.981.334l-.669-1.063.034-.098c.429.484 1.17.578 1.32.454.09-.073.215-.3.343-.544.129-.232.266-.48.382-.617-.249.055-.725.514-.93.741zM12.034 10.8h-.069l-.115.15c-.223.291-.476.621-.802.621-.42 0-.763-.386-.763-.857 0-.446.3-.81.686-.853v-.004h2.134v.017c.343.082.609.429.609.84 0 .471-.343.857-.763.857-.326 0-.578-.33-.801-.621z"
          />
          <defs>
            <linearGradient
              id="OTK__a"
              x1="12"
              x2="12"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A520B6" />
              <stop offset="1" stopColor="#15E6FC" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenOTK.displayName = 'OTK'