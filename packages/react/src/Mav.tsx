
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMav = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M14.083 10.594v-.004c-.103.3-.347 1.05-.544 1.671-.596 1.753-1.282 2.31-1.54 2.31-.278 0-.933-.557-1.542-2.314l-.351-1.106-.836-2.554a.4.4 0 0 1 .146-.026c.484 0 .93.789 1.525 1.835l.287.505.172.322c.236.45.42.754.6.767.18-.013.364-.317.6-.772l.171-.317.287-.505C13.655 9.36 14.1 8.57 14.585 8.57q.079 0 .15.026zm.175.6c.176.626.382 1.436.42 1.903.043.416.086.823.129 1.123.03.218.214.377.437.377h1.29a.18.18 0 0 0 .18-.201c-.257-1.749-.865-4.715-1.671-5.58l-.784 2.382zM7.286 14.4c.257-1.753.87-4.723 1.68-5.584l.775 2.374c-.171.63-.381 1.44-.42 1.911-.043.416-.085.823-.128 1.123a.436.436 0 0 1-.437.377h-1.29a.176.176 0 0 1-.18-.201"/>
    <path fill="currentColor" d="M12 19.286a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57m0-.429a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#MAV__a)" d="M14.083 10.594v-.004c-.103.3-.347 1.05-.544 1.671-.596 1.753-1.281 2.31-1.539 2.31-.278 0-.934-.557-1.543-2.314l-.35-1.106-.837-2.554a.4.4 0 0 1 .146-.026c.484 0 .93.789 1.526 1.835l.287.505.171.322c.236.45.42.754.6.767.18-.013.365-.317.6-.772l.172-.317.287-.505C13.655 9.36 14.1 8.57 14.585 8.57q.077 0 .15.026zm.176.6c.176.626.381 1.436.42 1.903.043.416.086.823.128 1.123.03.218.215.377.438.377h1.29a.18.18 0 0 0 .18-.201c-.258-1.749-.866-4.715-1.672-5.58l-.784 2.382zM7.286 14.4c.257-1.753.87-4.723 1.68-5.584l.776 2.374c-.172.63-.382 1.44-.42 1.911-.043.416-.086.823-.129 1.123a.436.436 0 0 1-.437.377h-1.29a.176.176 0 0 1-.18-.201"/>
    <path fill="url(#MAV__b)" d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.429a6.857 6.857 0 1 0 0-13.713 6.857 6.857 0 0 0 0 13.713" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="MAV__a" x1="9.059" x2="12.42" y1="9.349" y2="15.434" gradientUnits="userSpaceOnUse">
            <stop offset=".03" stopColor="#D3606C"/>
            <stop offset=".69" stopColor="#5B7CFD"/>
        </linearGradient>
        <linearGradient id="MAV__b" x1="7.456" x2="16.949" y1="6.593" y2="17.584" gradientUnits="userSpaceOnUse">
            <stop offset=".03" stopColor="#D3606C"/>
            <stop offset=".69" stopColor="#5B7CFD"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconMav.displayName = 'Mav';

export default IconMav;
