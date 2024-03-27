
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconTko = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M14.469 7.635c-.596-.421-.91-1.266-.493-1.865.351-.505 1.013-.71 1.544-.4 2.002 1.172 3.337 3.266 3.337 5.769a6.86 6.86 0 0 1-5.571 6.736v.55a1.285 1.285 0 1 1-2.572 0v-.55a6.86 6.86 0 0 1-5.57-6.737c0-2.536 1.376-4.685 3.423-5.854.538-.306 1.2-.092 1.549.419.42.614.084 1.475-.53 1.894a4.28 4.28 0 0 0-1.872 3.542 4.29 4.29 0 0 0 3 4.09v-1.09a1.286 1.286 0 0 1 2.572 0v1.089a4.288 4.288 0 0 0 1.183-7.593m-1.183 3.508a1.285 1.285 0 1 1-2.571 0 1.285 1.285 0 0 1 2.57 0" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M12 19.712a1.286 1.286 0 0 0 1.286-1.285v-.547c3.173-.6 5.571-3.376 5.571-6.707A6.87 6.87 0 0 0 15.6 5.326c-.567-.35-1.283-.113-1.646.445-.412.634-.072 1.496.544 1.936a4.25 4.25 0 0 1 1.789 3.466c0 1.91-1.261 3.52-3 4.061v-1.091A1.285 1.285 0 0 0 12 12.857zm0-7.284a1.286 1.286 0 0 0 0-2.571z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#17A84B" d="M14.468 7.635c-.596-.421-.91-1.266-.493-1.865.352-.505 1.014-.71 1.545-.4 2.001 1.172 3.337 3.266 3.337 5.769a6.86 6.86 0 0 1-5.572 6.736v.55a1.286 1.286 0 1 1-2.571 0v-.55a6.86 6.86 0 0 1-5.571-6.737c0-2.536 1.376-4.685 3.424-5.854.537-.306 1.2-.092 1.548.419.42.614.084 1.475-.53 1.894a4.28 4.28 0 0 0-1.871 3.542 4.29 4.29 0 0 0 3 4.09v-1.09a1.286 1.286 0 0 1 2.571 0v1.089a4.288 4.288 0 0 0 1.183-7.593m-1.183 3.508a1.286 1.286 0 1 1-2.571 0 1.286 1.286 0 0 1 2.571 0" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#077FA2" d="M12 19.712a1.286 1.286 0 0 0 1.285-1.285v-.547c3.173-.6 5.572-3.376 5.572-6.707a6.87 6.87 0 0 0-3.259-5.847c-.567-.35-1.283-.113-1.646.445-.411.634-.071 1.496.545 1.936a4.25 4.25 0 0 1 1.788 3.466c0 1.91-1.26 3.52-3 4.061v-1.091A1.286 1.286 0 0 0 12 12.857zm0-7.284a1.286 1.286 0 0 0 0-2.571z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconTko.displayName = 'Tko';

export default IconTko;
