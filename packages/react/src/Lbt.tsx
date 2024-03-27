
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLbt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M5.923 6.857h9.84a3.043 3.043 0 0 1 3.064 3.017 2.32 2.32 0 0 1-.999 1.903 2.32 2.32 0 0 1 1.029 1.912 3.086 3.086 0 0 1-3.107 3.025h-2.036V15h1.672c.685 0 1.328-.527 1.328-1.2 0-.514-.797-.943-1.328-.943H10.5l.308-.767.498-1.376h4.448c.531 0 .96-.295.96-.814 0-.677-.557-1.329-1.243-1.329H5.177l.75-1.714z"/>
    <path fill="currentColor" d="M13.671 6h.9l-.386.857h-.9zM8.528 16.714h.9l-.385.857h-.9zM14.957 6h.9l-.386.857h-.9zM9.814 16.714h.9l-.386.857h-.9z"/>
    <path fill="currentColor" d="M10.286 9.857H8.143l-2.966 6.377a.338.338 0 0 0 .309.48h7.371V15H8.67a.338.338 0 0 1-.313-.48z"/>

        </>
      ) : (
        <>
          
    <path fill="#006" d="M5.923 6.857h9.84a3.043 3.043 0 0 1 3.064 3.017c0 .785-.394 1.479-.998 1.903a2.32 2.32 0 0 1 1.028 1.912 3.086 3.086 0 0 1-3.107 3.025h-2.035V15h1.671c.686 0 1.329-.527 1.329-1.2 0-.514-.798-.943-1.329-.943H10.5l.309-.767.497-1.376h4.449c.531 0 .96-.295.96-.814 0-.677-.558-1.329-1.243-1.329H5.177l.75-1.714z"/>
    <path fill="#006" d="M13.672 6h.9l-.386.857h-.9zM8.529 16.714h.9l-.386.857h-.9zM14.957 6h.9l-.385.857h-.9zM9.815 16.714h.9l-.386.857h-.9z"/>
    <path fill="#006" d="M10.286 9.857H8.143l-2.966 6.377a.338.338 0 0 0 .309.48h7.371V15H8.67a.338.338 0 0 1-.313-.48z"/>

        </>
      )}
    </BaseIcon>
));

IconLbt.displayName = 'Lbt';

export default IconLbt;
