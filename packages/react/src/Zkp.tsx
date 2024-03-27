
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconZkp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 19.286a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57M6.43 8.769l-.073.021a6.506 6.506 0 1 1 5.657 9.712 2.455 2.455 0 0 1-2.001-3.87l.004-.01a2.443 2.443 0 0 1 3.24-.685l.986.973c.115.172 1.084.116 1.255 0 .137-.086.129-.536.12-.72a.16.16 0 0 1 .056-.128c.129-.116.42-.373.51-.463.086-.086.107-.399.111-.549a.17.17 0 0 1 .069-.129c.159-.128.231-.338.257-.45a.16.16 0 0 0-.017-.128l-.9-1.431a.16.16 0 0 1-.021-.112c.012-.116.008-.394-.3-.741-.4-.459-2.34-1.543-2.623-1.599-.215-.043-.523-.021-.665-.009a.16.16 0 0 1-.137-.047c-.193-.193-.823-.814-.968-.917-.163-.107-.236-.043-.279 0h-.004a2.3 2.3 0 0 0-.206.699.17.17 0 0 1-.184.141c-1.097-.111-2.923.232-3.883.442z"/>

        </>
      ) : (
        <>
          
    <path fill="#000" d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572M6.428 8.769l-.073.021a6.506 6.506 0 1 1 5.657 9.712 2.455 2.455 0 0 1-2.001-3.87l.004-.01a2.443 2.443 0 0 1 3.24-.685l.986.973c.116.172 1.084.116 1.256 0 .137-.086.128-.536.12-.72 0-.047.017-.098.055-.128.129-.116.42-.373.51-.463.086-.086.108-.399.112-.549a.17.17 0 0 1 .068-.129c.159-.128.232-.338.258-.45a.16.16 0 0 0-.018-.128l-.9-1.431a.16.16 0 0 1-.021-.112c.013-.116.009-.394-.3-.741-.399-.459-2.34-1.543-2.623-1.599-.214-.043-.523-.021-.664-.009a.16.16 0 0 1-.137-.047c-.193-.193-.823-.814-.969-.917-.163-.107-.236-.043-.278 0h-.005a2.3 2.3 0 0 0-.205.699.17.17 0 0 1-.185.141c-1.097-.111-2.923.232-3.883.442z"/>

        </>
      )}
    </BaseIcon>
));

IconZkp.displayName = 'Zkp';

export default IconZkp;
