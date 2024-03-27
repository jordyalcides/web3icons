
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPal = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M9.995 12.722a.32.32 0 0 0-.138.239q-.002.84 0 1.678c0 .37-.243.52-.55.337-1.031-.62-1.668-1.117-2.265-1.48a.43.43 0 0 1-.185-.335V7.23c0-.124.083-.275.185-.337L9.854 5.19a.4.4 0 0 1 .373 0l2.864 1.704a.45.45 0 0 1 .195.336v3.412a.45.45 0 0 1-.195.336c-.956.579-2.14 1.164-3.096 1.744m4.148-1.67V9.374c0-.37.26-.52.566-.337 1.032.62 1.652 1.104 2.249 1.467a.44.44 0 0 1 .185.336v5.93a.44.44 0 0 1-.186.336l-2.812 1.705a.4.4 0 0 1-.373 0l-2.857-1.705a.45.45 0 0 1-.2-.336v-3.41a.45.45 0 0 1 .2-.336c.956-.58 2.151-1.152 3.107-1.731.072-.044.12-.152.121-.24"/>

        </>
      ) : (
        <>
          
    <path fill="url(#PAL__a)" d="M9.995 12.722a.32.32 0 0 0-.137.239q-.002.84 0 1.678c0 .37-.244.52-.55.337-1.032-.62-1.669-1.117-2.266-1.48a.43.43 0 0 1-.184-.335V7.23c0-.124.083-.275.185-.337L9.855 5.19a.4.4 0 0 1 .373 0l2.863 1.704a.45.45 0 0 1 .195.336v3.412a.45.45 0 0 1-.195.336c-.955.579-2.14 1.164-3.096 1.744m4.149-1.67V9.374c-.001-.37.259-.52.565-.337 1.032.62 1.652 1.104 2.25 1.467a.44.44 0 0 1 .184.336v5.93a.44.44 0 0 1-.185.336l-2.812 1.705a.4.4 0 0 1-.373 0l-2.857-1.705a.45.45 0 0 1-.201-.336v-3.41a.45.45 0 0 1 .201-.336c.956-.58 2.15-1.152 3.106-1.731.073-.044.121-.152.122-.24"/>
    <defs>
        <linearGradient id="PAL__a" x1="12" x2="12" y1="5.143" y2="18.857" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00EDD8"/>
            <stop offset="1" stopColor="#00D7AF"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconPal.displayName = 'Pal';

export default IconPal;
