
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMts = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12.428 5.571a6.4 6.4 0 0 1 1.959.3c-1.046 1.903-2.79 3.763-3.557 4.475a.214.214 0 0 0 .291.313c.789-.73 2.602-2.658 3.673-4.638a6 6 0 0 1 1.059.536c-2.615 4.551-6.695 7.213-9.172 8.327a6.4 6.4 0 0 1-.518-4.328l1.821 1.05-.493-2.319 1.762-1.59-1.457-.154a6.4 6.4 0 0 1 4.632-1.972m3.78 1.226c-2.657 4.607-6.78 7.312-9.321 8.464a6.46 6.46 0 0 0 2.52 2.413c1.401-.45 3.853-1.517 5.649-3.235a10 10 0 0 0 .578-.6.857.857 0 0 1 1.046-1.32 16.2 16.2 0 0 0 1.663-3.043 6.45 6.45 0 0 0-2.135-2.679m2.349 3.257a16.7 16.7 0 0 1-1.556 2.756.857.857 0 0 1-1.011 1.277c-.206.227-.416.45-.643.664-1.68 1.608-3.904 2.658-5.383 3.189a6.428 6.428 0 0 0 8.593-7.886"/>
    <path fill="currentColor" d="m6 6.158.711 1.595 1.736.184-1.299 1.166.365 1.71L6 9.938l-1.513.875.364-1.71-1.298-1.166 1.735-.184z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#MTS__a)" d="M12.428 5.571a6.4 6.4 0 0 1 1.959.3c-1.046 1.903-2.79 3.763-3.557 4.475a.214.214 0 0 0 .291.313c.789-.73 2.602-2.658 3.673-4.638a6 6 0 0 1 1.059.536c-2.615 4.551-6.695 7.213-9.172 8.327a6.4 6.4 0 0 1-.518-4.328l1.821 1.05-.493-2.319 1.762-1.59-1.457-.154a6.4 6.4 0 0 1 4.632-1.972m3.78 1.226c-2.657 4.607-6.78 7.312-9.321 8.464a6.46 6.46 0 0 0 2.52 2.413c1.401-.45 3.853-1.517 5.649-3.235a10 10 0 0 0 .578-.6.857.857 0 0 1 1.046-1.32 16.2 16.2 0 0 0 1.663-3.043 6.45 6.45 0 0 0-2.135-2.679m2.349 3.257a16.7 16.7 0 0 1-1.556 2.756.857.857 0 0 1-1.011 1.277c-.206.227-.416.45-.643.664-1.68 1.608-3.904 2.658-5.383 3.189a6.428 6.428 0 0 0 8.593-7.886"/>
    <path fill="url(#MTS__b)" d="m6 6.158.711 1.595 1.736.184-1.299 1.166.365 1.71L6 9.938l-1.513.875.364-1.71-1.298-1.166 1.735-.184z"/>
    <defs>
        <linearGradient id="MTS__a" x1="3.735" x2="18.84" y1="13.161" y2="13.447" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFAF02"/>
            <stop offset="1" stopColor="#FF5E1C"/>
        </linearGradient>
        <linearGradient id="MTS__b" x1="3.664" x2="7.556" y1="8.516" y2="8.73" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EF6A37"/>
            <stop offset="1" stopColor="#F29725"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconMts.displayName = 'Mts';

export default IconMts;
