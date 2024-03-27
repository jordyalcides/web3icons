
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconChr = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M14.803 14.143c-.514.994-1.543 1.714-2.717 1.714-1.843 0-3.099-1.294-3.086-3.197s1.226-3.232 3.086-3.232a3.11 3.11 0 0 1 2.717 1.715H18c-.643-2.73-3.043-4.715-5.914-4.715C8.726 6.428 6 9.214 6 12.643s2.726 6.214 6.086 6.214c2.863 0 5.263-1.997 5.914-4.714z"/>
    <path fill="currentColor" d="M16.843 8.777A3.14 3.14 0 0 0 18 6.411a2.99 2.99 0 0 0-3-2.983 3.01 3.01 0 0 0-3 3h.171c1.912 0 3.57.943 4.672 2.349"/>
    <path fill="currentColor" d="M15.004 9.39c.72 0 1.325-.202 1.839-.617a5.89 5.89 0 0 0-4.672-2.345H12a2.983 2.983 0 0 0 3 2.962z"/>

        </>
      ) : (
        <>
          
    <path fill="#FFB0C2" d="M14.803 14.143c-.514.994-1.543 1.714-2.717 1.714-1.843 0-3.099-1.294-3.086-3.197s1.226-3.232 3.086-3.232a3.11 3.11 0 0 1 2.717 1.715H18c-.643-2.73-3.043-4.715-5.914-4.715C8.726 6.428 6 9.214 6 12.643s2.726 6.214 6.086 6.214c2.863 0 5.263-1.997 5.914-4.714z"/>
    <path fill="#CC91F0" d="M16.843 8.777A3.14 3.14 0 0 0 18 6.411a2.99 2.99 0 0 0-3-2.983 3.01 3.01 0 0 0-3 3h.171c1.912 0 3.57.943 4.672 2.349"/>
    <path fill="#CB65B7" d="M15.004 9.39c.72 0 1.325-.202 1.839-.617a5.89 5.89 0 0 0-4.672-2.345H12a2.983 2.983 0 0 0 3 2.962z"/>

        </>
      )}
    </BaseIcon>
));

IconChr.displayName = 'Chr';

export default IconChr;
