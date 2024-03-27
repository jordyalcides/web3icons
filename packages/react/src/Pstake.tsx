
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPstake = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M15.72 10.715h-2.717c0-.395-.227-1.286-1.14-1.286s-1.157.698-1.149 1.028c0 .857 1.402 1.432 2.083 1.616 2.644.78 3.129 2.34 3.043 3.021.137 1.256-.429 3.763-3.772 3.763s-4.011-2.254-3.925-3.428h2.571c0 .398.244 1.286 1.354 1.286.888 0 1.2-.986 1.218-1.33.068-.33-.386-.942-2.533-1.555-2.692-.767-2.602-2.657-2.602-3.167 0-.514.013-3.377 3.785-3.377 3.017 0 3.78 2.301 3.784 3.428M8.143 5.143h7.714v1.714H8.143z"/>

        </>
      ) : (
        <>
          
    <path fill="#fff" d="M15.72 10.715h-2.717c0-.395-.227-1.286-1.14-1.286s-1.157.698-1.149 1.028c0 .857 1.402 1.432 2.083 1.616 2.644.78 3.129 2.34 3.043 3.021.137 1.256-.429 3.763-3.772 3.763s-4.011-2.254-3.925-3.428h2.571c0 .398.244 1.286 1.354 1.286.888 0 1.2-.986 1.218-1.33.068-.33-.386-.942-2.533-1.555-2.692-.767-2.602-2.657-2.602-3.167 0-.514.013-3.377 3.785-3.377 3.017 0 3.78 2.301 3.784 3.428"/>
    <path fill="#E50913" d="M8.143 5.143h7.714v1.714H8.143z"/>

        </>
      )}
    </BaseIcon>
));

IconPstake.displayName = 'Pstake';

export default IconPstake;
