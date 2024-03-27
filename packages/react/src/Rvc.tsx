
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconRvc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m14.75 6.276-4.52 1.451 5.016.663zm-4.601 1.326.58-1.078 2.487-.995zm.579-1.161.29-.829 2.032-.083zm3.359-.621.29-.788.332 1.078zm-.042 0 .29-.788-1.45-.622zm-1.368-1.493-.995.456 2.28.995zm1.119-.041h-1.078l1.659.663zm.664.787V4.95l2.216.622c.04.011.04.07 0 .08l-1.885.5zm-3.441.457.663-.664 1.41.622zm2.28.04-3.11 2.074 4.52-1.451zm1.948 2.903-5.14-.705 3.98 8.871zm-1.077 8.001 1.16-7.918.746.912zm-.166.166-3.94-8.79 1.452 8.707zm-2.53-.042-1.45-8.705L7.454 19.5z"/>

        </>
      ) : (
        <>
          
    <path fill="#A6FFA9" d="m14.75 6.276-4.518 1.451 5.016.663z"/>
    <path fill="#27A986" d="m10.149 7.602.58-1.078 2.487-.995z"/>
    <path fill="#054034" d="m10.729 6.441.29-.829 2.032-.083z"/>
    <path fill="#27A986" d="m14.087 5.82.29-.788.332 1.078z"/>
    <path fill="#A6FFA9" d="m14.046 5.82.29-.788-1.451-.622z"/>
    <path fill="#27A986" d="m12.678 4.327-.996.456 2.28.995zm1.118-.041H12.72l1.658.663z"/>
    <path fill="#A6FFA9" d="M14.46 5.073V4.95l2.217.622c.04.011.04.07-.001.08l-1.885.5z"/>
    <path fill="#27A986" d="m11.019 5.53.663-.664 1.41.622z"/>
    <path fill="#054034" d="M13.299 5.57 10.19 7.645l4.519-1.451z"/>
    <path fill="#27A986" d="m15.248 8.473-5.14-.705 3.98 8.871z"/>
    <path fill="#054034" d="m14.17 16.474 1.16-7.918.746.912zm-.166.166-3.939-8.79 1.452 8.707zm-2.529-.042-1.45-8.705L7.454 19.5z"/>

        </>
      )}
    </BaseIcon>
));

IconRvc.displayName = 'Rvc';

export default IconRvc;
