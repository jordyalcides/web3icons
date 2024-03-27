
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGiv = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m12.167 5.143.189.013.373.03a6.8 6.8 0 0 1 3.055 1.106l-.681.681-.287.283a.06.06 0 0 1-.056 0 5.486 5.486 0 0 0-7.504 7.509c.008.017.008.042 0 .05l-.969.97h-.004l-.03-.043-.06-.09a6.844 6.844 0 0 1 5.271-10.475l.3-.025.065-.009zm6.686 7.024c0 .06 0 .12-.009.185a6.75 6.75 0 0 1-2.893 5.25 6.6 6.6 0 0 1-4.17 1.251 6.74 6.74 0 0 1-4.564-1.941c-.013-.013-.013-.056 0-.069C8.807 15.25 10.402 13.65 12 12.06a.2.2 0 0 1 .137-.056h6.72v.163zM15.724 8.61a1.286 1.286 0 1 0 .866-.463c-.34.033-.653.2-.87.463z"/>

        </>
      ) : (
        <>
          
    <path fill="#121B4B" d="m12.167 5.143.189.013.373.03a6.8 6.8 0 0 1 3.055 1.106l-.681.681-.287.283a.06.06 0 0 1-.056 0 5.486 5.486 0 0 0-7.504 7.509c.008.017.008.042 0 .05l-.969.97h-.004l-.03-.043-.06-.09a6.844 6.844 0 0 1 5.271-10.475l.3-.025.065-.009zm6.686 7.024c0 .06 0 .12-.009.185a6.75 6.75 0 0 1-2.893 5.25 6.6 6.6 0 0 1-4.17 1.251 6.74 6.74 0 0 1-4.564-1.941c-.013-.013-.013-.056 0-.069C8.807 15.25 10.402 13.65 12 12.06a.2.2 0 0 1 .137-.056h6.72v.163zM15.724 8.61a1.286 1.286 0 1 0 .866-.463c-.34.033-.653.2-.87.463z"/>

        </>
      )}
    </BaseIcon>
));

IconGiv.displayName = 'Giv';

export default IconGiv;
