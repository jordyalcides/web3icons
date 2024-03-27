
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconWhite = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M15.429 6.857c-.857 0-2.357.857-3.215 2.143-.857-1.286-1.928-2.143-3.642-2.143-1.286 0-3.429.857-3.429 3.857s5.143 6.857 7.071 8.571c1.93-1.714 6.643-5.57 6.643-8.57s-1.714-3.858-3.428-3.858"/>
    <path fill="currentColor" d="M13.586 7.603c.673-.472 1.363-.746 1.843-.746 1.714 0 3.428.857 3.428 3.857 0 2.657-3.694 5.983-5.88 7.899C15.06 16.654 18 13.61 18 11.143c0-3-1.663-3.857-3.321-3.857-.3 0-.686.11-1.089.317zM12.214 9c-.857-1.5-2.027-2.143-3.642-2.143-.742 0-1.766.283-2.503 1.101a3.32 3.32 0 0 1 1.967-.672c1.526 0 2.713 1.084 3.54 2.258a.22.22 0 0 0 .377-.021z"/>
    <path fill="currentColor" d="M15.429 9c0-.686-.57-.857-.857-.857-1.286 0-1.715 1.628-1.715 1.928 0 .429.429.429.857.429.43 0 1.715-.643 1.715-1.5m-6.185.428c0-.574-.428-.857-.857-.857-.428 0-1.714.429-1.928 1.715-.129.78.184 1.692.531 2.31.099.17.33.094.347-.103.116-1.44.669-1.8 1.05-1.993.429-.214.857-.429.857-1.072"/>

        </>
      ) : (
        <>
          
    <path fill="#F1F1F1" d="M15.428 6.857c-.857 0-2.357.857-3.214 2.143-.857-1.286-1.929-2.143-3.643-2.143-1.286 0-3.428.857-3.428 3.857s5.142 6.857 7.071 8.571c1.929-1.714 6.643-5.57 6.643-8.57s-1.714-3.858-3.429-3.858"/>
    <path fill="#DFDFDF" d="M13.585 7.603c.673-.472 1.363-.746 1.843-.746 1.715 0 3.429.857 3.429 3.857 0 2.657-3.694 5.983-5.88 7.899C15.06 16.654 18 13.61 18 11.143c0-3-1.663-3.857-3.322-3.857-.3 0-.685.11-1.088.317zM12.214 9c-.857-1.5-2.027-2.143-3.643-2.143-.741 0-1.766.283-2.503 1.101a3.32 3.32 0 0 1 1.967-.672c1.526 0 2.713 1.084 3.54 2.258a.22.22 0 0 0 .378-.021z"/>
    <path fill="#fff" d="M15.428 9c0-.686-.57-.857-.857-.857-1.286 0-1.714 1.628-1.714 1.928 0 .429.428.429.857.429s1.714-.643 1.714-1.5m-6.184.428c0-.574-.429-.857-.857-.857-.429 0-1.714.429-1.929 1.715-.128.78.185 1.692.532 2.31.098.17.33.094.347-.103.116-1.44.668-1.8 1.05-1.993.428-.214.857-.429.857-1.072"/>

        </>
      )}
    </BaseIcon>
));

IconWhite.displayName = 'White';

export default IconWhite;
