
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconTime = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M5.143 8.584c0-.953.796-1.727 1.778-1.727H17.08c.981 0 1.777.774 1.777 1.727v6.832c0 .953-.796 1.727-1.777 1.727H6.92c-.98 0-1.777-.774-1.777-1.728zm1.778-1.31c-.744 0-1.348.588-1.348 1.31v6.832c0 .723.604 1.31 1.348 1.31H17.08c.744 0 1.348-.588 1.348-1.31V8.584c0-.723-.605-1.31-1.348-1.31z"/>
    <path fill="currentColor" d="M12 9.437a2.563 2.563 0 1 0 0 5.126 2.563 2.563 0 0 0 0-5.126M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0"/>
    <path fill="currentColor" d="M11.786 11.143c.126 0 .214.103.214.23v1.056h1.055c.128 0 .23.087.23.214s-.102.214-.23.214h-1.484v-1.484c0-.127.088-.23.215-.23"/>

        </>
      ) : (
        <>
          
    <path fill="#6784FF" d="M5.143 8.584c0-.953.796-1.727 1.777-1.727h10.16c.98 0 1.777.774 1.777 1.727v6.832c0 .953-.796 1.727-1.778 1.727H6.92c-.981 0-1.777-.774-1.777-1.728zm1.777-1.31c-.744 0-1.348.588-1.348 1.31v6.832c0 .723.605 1.31 1.348 1.31h10.16c.743 0 1.347-.588 1.347-1.31V8.584c0-.723-.604-1.31-1.348-1.31z"/>
    <path fill="#6784FF" d="M12 9.437a2.563 2.563 0 1 0 0 5.126 2.563 2.563 0 0 0 0-5.126M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0"/>
    <path fill="#6784FF" d="M11.786 11.143c.126 0 .214.103.214.23v1.056h1.055c.128 0 .23.087.23.214s-.102.214-.23.214h-1.484v-1.484c0-.127.088-.23.215-.23"/>

        </>
      )}
    </BaseIcon>
));

IconTime.displayName = 'Time';

export default IconTime;
