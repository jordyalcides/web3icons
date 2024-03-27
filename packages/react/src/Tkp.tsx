
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconTkp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m11.67 12.103 2.392-3.026a3.57 3.57 0 0 0-4.698.352 3.68 3.68 0 0 0-.33 4.757 3.575 3.575 0 0 0 4.603 1.011 3.665 3.665 0 0 0 1.65-4.461l-3.617 1.371z"/>
    <path fill="currentColor" d="M16.114 10.016a3.67 3.67 0 0 0-1.221-1.659l-2.379 3.035 3.6-1.372z"/>
    <path fill="currentColor" d="m18.664 9.459-1.753.681a5.426 5.426 0 0 1-2.46 6.609 5.29 5.29 0 0 1-6.814-1.522 5.44 5.44 0 0 1 .515-7.045 5.284 5.284 0 0 1 6.964-.489l1.187-1.47a7.13 7.13 0 0 0-7.569-.759A7.3 7.3 0 0 0 4.714 12c0 2.914 1.719 5.55 4.368 6.699a7.135 7.135 0 0 0 7.8-1.423 7.35 7.35 0 0 0 1.782-7.817"/>
    <path fill="currentColor" d="M18.034 5.902a7 7 0 0 0-.715-.579l-1.205 1.363a5 5 0 0 1 1.822 2.271l1.778-.621a6.7 6.7 0 0 0-1.68-2.43z"/>

        </>
      ) : (
        <>
          
    <path fill="#00A9FF" d="m11.67 12.103 2.391-3.026a3.57 3.57 0 0 0-4.697.352 3.68 3.68 0 0 0-.33 4.757 3.575 3.575 0 0 0 4.603 1.011 3.665 3.665 0 0 0 1.65-4.461l-3.617 1.371z"/>
    <path fill="#00A9FF" d="M16.114 10.016a3.67 3.67 0 0 0-1.222-1.659l-2.378 3.035 3.6-1.372z"/>
    <path fill="#FFAF14" d="m18.664 9.459-1.753.681a5.425 5.425 0 0 1-2.46 6.609 5.29 5.29 0 0 1-6.814-1.522 5.44 5.44 0 0 1 .514-7.045 5.284 5.284 0 0 1 6.964-.489l1.187-1.47a7.13 7.13 0 0 0-7.568-.759A7.3 7.3 0 0 0 4.714 12c0 2.914 1.718 5.55 4.367 6.699a7.135 7.135 0 0 0 7.8-1.423 7.35 7.35 0 0 0 1.783-7.817"/>
    <path fill="#FFAF14" d="M18.034 5.902a7 7 0 0 0-.716-.579l-1.204 1.363a5 5 0 0 1 1.821 2.271l1.779-.621a6.7 6.7 0 0 0-1.68-2.43z"/>

        </>
      )}
    </BaseIcon>
));

IconTkp.displayName = 'Tkp';

export default IconTkp;
