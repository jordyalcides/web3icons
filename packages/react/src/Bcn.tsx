
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBcn = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M17.58 12.563a3.26 3.26 0 0 0-2.04-.975v-.015a2.82 2.82 0 0 0 1.8-.953 2.8 2.8 0 0 0 .653-1.8 2.85 2.85 0 0 0-1.088-2.43c-.727-.585-1.822-.818-3.315-.818H8.143v5.142H4.714v2.143h8.838c.698 0 1.216.028 1.56.305.346.278.518.63.518 1.163 0 1.188-.99 1.532-2.078 1.532h-3.266v-1.285H8.143V18h5.635c1.202.052 2.388-.233 3.374-.923a3.05 3.05 0 0 0 1.156-2.565 2.86 2.86 0 0 0-.728-1.95m-4.35-1.849h-2.944v-3h2.951c1.38 0 2.07.439 2.07 1.504s-.69 1.496-2.077 1.496"/>

        </>
      ) : (
        <>
          
    <path fill="#F04086" d="M17.58 12.563a3.26 3.26 0 0 0-2.04-.975v-.015a2.82 2.82 0 0 0 1.8-.953 2.8 2.8 0 0 0 .652-1.8 2.85 2.85 0 0 0-1.087-2.43c-.728-.585-1.823-.818-3.315-.818H8.142v5.142H4.714v2.143h8.838c.698 0 1.215.028 1.56.305.345.278.518.63.518 1.163 0 1.188-.99 1.532-2.078 1.532h-3.267v-1.285H8.142V18h5.635c1.202.052 2.389-.233 3.375-.923a3.05 3.05 0 0 0 1.155-2.565 2.86 2.86 0 0 0-.727-1.95m-4.35-1.849h-2.945v-3h2.952c1.38 0 2.07.439 2.07 1.504s-.69 1.496-2.077 1.496"/>

        </>
      )}
    </BaseIcon>
));

IconBcn.displayName = 'Bcn';

export default IconBcn;
