
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconYfi = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M11.571 6.857h1.286V17.57h-1.286z"/>
    <path fill="currentColor" d="M8.056 7.552c0 1.845.787 2.724 2.658 4.023v-1.352C9.674 9.398 9.2 8.747 9.2 7.537c0-1.65 1.35-2.988 3.015-2.988s3.016 1.338 3.016 2.988c0 .541-.147 1.072-.428 1.535l-.445-1.879-1.15.269.91 3.746 3.737-.993-.305-1.131-1.667.442a4.1 4.1 0 0 0 .493-1.974c0-2.277-1.863-4.123-4.16-4.123s-4.16 1.846-4.16 4.123m8.318 8.897c0-1.846-.792-2.738-2.664-4.036v1.351c1.04.825 1.52 1.489 1.52 2.699 0 1.65-1.35 2.989-3.015 2.989S9.2 18.114 9.2 16.462c0-.56.155-1.085.427-1.533l.445 1.878 1.15-.268-.91-3.746-3.737.992.306 1.132 1.667-.443a4.1 4.1 0 0 0-.493 1.975c0 2.277 1.862 4.123 4.16 4.123s4.159-1.846 4.159-4.123"/>

        </>
      ) : (
        <>
          
    <path fill="#006AE3" d="M11.571 6.857h1.286V17.57h-1.286z"/>
    <path fill="#006AE3" d="M8.056 7.552c0 1.845.787 2.724 2.658 4.023v-1.352C9.674 9.398 9.2 8.747 9.2 7.537c0-1.65 1.35-2.988 3.015-2.988s3.016 1.338 3.016 2.988c0 .541-.147 1.072-.428 1.535l-.445-1.879-1.15.269.91 3.746 3.737-.993-.305-1.131-1.667.442a4.1 4.1 0 0 0 .493-1.974c0-2.277-1.863-4.123-4.16-4.123s-4.16 1.846-4.16 4.123m8.318 8.897c0-1.846-.792-2.738-2.664-4.036v1.351c1.04.825 1.52 1.489 1.52 2.699 0 1.65-1.35 2.989-3.015 2.989S9.2 18.114 9.2 16.462c0-.56.155-1.085.427-1.533l.445 1.878 1.15-.268-.91-3.746-3.737.992.306 1.132 1.667-.443a4.1 4.1 0 0 0-.493 1.975c0 2.277 1.862 4.123 4.16 4.123s4.159-1.846 4.159-4.123"/>

        </>
      )}
    </BaseIcon>
));

IconYfi.displayName = 'Yfi';

export default IconYfi;
