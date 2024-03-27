
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCvc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M13.213 17.571c2.164 0 4.089-1.74 4.359-3.827v-.03h1.285a5.7 5.7 0 0 1-5.644 5.143h-2.4c-3.129 0-5.67-2.537-5.67-5.657v-2.4c0-3.12 2.546-5.657 5.67-5.657h2.4a5.7 5.7 0 0 1 5.644 5.143h-1.285c-.27-2.087-2.195-3.857-4.359-3.857h-2.4A4.48 4.48 0 0 0 6.43 10.8v2.4c0 2.34 2.035 4.371 4.384 4.371zM12 9.43c.707 0 1.286.604 1.286 1.35 0 .522-.283.977-.694 1.2l.475 2.164h-2.134l.476-2.165a1.36 1.36 0 0 1-.695-1.2A1.32 1.32 0 0 1 12 9.429"/>

        </>
      ) : (
        <>
          
    <path fill="#FF6B4D" d="M13.213 17.571c2.164 0 4.088-1.74 4.358-3.827v-.03h1.286a5.7 5.7 0 0 1-5.644 5.143h-2.4c-3.129 0-5.67-2.537-5.67-5.657v-2.4c0-3.12 2.545-5.657 5.67-5.657h2.4a5.7 5.7 0 0 1 5.644 5.143H17.57c-.27-2.087-2.194-3.857-4.358-3.857h-2.4A4.48 4.48 0 0 0 6.428 10.8v2.4c0 2.34 2.036 4.371 4.385 4.371zM12 9.43c.707 0 1.285.604 1.285 1.35 0 .522-.282.977-.694 1.2l.476 2.164h-2.134l.475-2.165a1.36 1.36 0 0 1-.694-1.2A1.32 1.32 0 0 1 12 9.429"/>

        </>
      )}
    </BaseIcon>
));

IconCvc.displayName = 'Cvc';

export default IconCvc;
