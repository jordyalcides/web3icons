
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCusd = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M14.807 5.593c.48.043.977.128 1.479.266V7.22c-.257-.188-.892-.57-2.07-.57-1.179 0-1.384.506-1.342.763-.034.116.086.399.815.6.158.043.351.078.574.12 1.119.202 2.88.527 2.88 2.229 0 1.178-.99 1.89-2.336 2.036l.15.887H13.63l.141-.883a6.5 6.5 0 0 1-2.198-.617v-1.423c.608.386 4.05 1.598 4.23 0 .055-.523-.665-.677-1.526-.866-1.213-.257-2.704-.583-2.704-2.078 0-1.123.925-1.702 2.194-1.822l-.137-.883h1.332l-.15.879zm-3.235 11.55a4.29 4.29 0 0 0 3.93-2.572h1.37a5.571 5.571 0 1 1-7.015-7.015v1.371a4.286 4.286 0 0 0 1.715 8.216"/>

        </>
      ) : (
        <>
          
    <path fill="#45CD85" d="M14.807 5.593c.48.043.977.128 1.478.266V7.22c-.257-.188-.891-.57-2.07-.57s-1.384.506-1.341.763c-.034.116.086.399.814.6.159.043.352.078.574.12 1.119.202 2.88.527 2.88 2.229 0 1.178-.99 1.89-2.335 2.036l.15.887h-1.329l.142-.883a6.5 6.5 0 0 1-2.199-.617v-1.423c.609.386 4.05 1.598 4.23 0 .056-.523-.664-.677-1.526-.866-1.213-.257-2.704-.583-2.704-2.078 0-1.123.926-1.702 2.194-1.822l-.137-.883h1.333l-.15.879zm-3.236 11.55a4.29 4.29 0 0 0 3.93-2.572h1.371a5.571 5.571 0 1 1-7.015-7.015v1.371a4.286 4.286 0 0 0 1.714 8.216"/>

        </>
      )}
    </BaseIcon>
));

IconCusd.displayName = 'Cusd';

export default IconCusd;
