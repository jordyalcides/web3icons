
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCsix = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12.968 13.962a1.57 1.57 0 0 0 1.089-1.25c.068-.36.004-.73-.18-1.046-.266-.437-.686-.665-.686-.665.343-1.464-1.769-2.222-2.927-2.638l-.004-.002a8 8 0 0 1-.463-.171 4 4 0 0 1-1.556-1.33c-.274.986.622 2.036.622 2.036-.755-.656-2.777-.917-3.176-.964a3.2 3.2 0 0 0-.116.853v6.428a3.214 3.214 0 0 0 3.215 3.214h3.51q-.54-.065-.99-.162c-1.599-.335-2.541-1.003-3.313-2.006a4.25 4.25 0 0 1-.767-1.757c-.416-2.619 1.941-3.206 1.941-3.206-.672.711-.415 1.787-.415 1.787a2.29 2.29 0 0 1 1.971-1.363 2.13 2.13 0 0 1 1.869.986 2.6 2.6 0 0 1 .376 1.255m-.887-2.716.292-.369-1.162-.823c.57.557.87 1.192.87 1.192" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#CSIX__a)" d="M18.428 8.786a3.214 3.214 0 0 0-3.214-3.214H8.786A3.214 3.214 0 0 0 5.57 8.786v6.428a3.214 3.214 0 0 0 3.215 3.215h6.428a3.214 3.214 0 0 0 3.214-3.215z"/>
    <path fill="#fff" d="M17.528 17.443c-1.041.343-2.292.283-2.952.231-3-.227-4.106-1.221-4.5-2.082-.403-.892-.198-1.843.428-2.306 1.414-1.042 2.464.677 2.464.677a1.57 1.57 0 0 0 1.089-1.251c.068-.36.004-.73-.18-1.046-.266-.437-.686-.665-.686-.665.343-1.465-1.774-2.224-2.931-2.64a8 8 0 0 1-.463-.17 4 4 0 0 1-1.556-1.33c-.274.986.622 2.036.622 2.036-.755-.655-2.777-.917-3.176-.964a3.2 3.2 0 0 0-.116.853v6.428a3.214 3.214 0 0 0 3.215 3.215h6.428c.909 0 1.732-.377 2.314-.986"/>
    <path fill="#FFEDDC" d="M17.816 17.1c-1.504.31-3.048.377-4.573.197-.703-.085-3.257-.578-3.257-2.546 0-1.658 1.577-2.044 2.982-.788 0 0 0-.656-.377-1.256a2.13 2.13 0 0 0-1.868-.985 2.29 2.29 0 0 0-1.972 1.362s-.257-1.075.416-1.787c0 0-2.357.587-1.941 3.206.03.197.214 1.041.767 1.757.771 1.003 1.714 1.671 3.313 2.006q.45.097.99.163h2.918a3.22 3.22 0 0 0 2.602-1.329"/>
    <path fill="#F9A14C" d="m12.373 10.877-.292.369s-.3-.635-.87-1.192z"/>
    <defs>
        <linearGradient id="CSIX__a" x1="17.194" x2="7.976" y1="6.952" y2="15.921" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF9133"/>
            <stop offset="1" stopColor="#FF2905"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconCsix.displayName = 'Csix';

export default IconCsix;
