
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconElf = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12.133 5.192c.828-.19 1.714.536 1.643 1.393.036.773-.732 1.451-1.5 1.35a1.36 1.36 0 0 1-.952-.512 1.39 1.39 0 0 1-.196-1.416c.166-.416.57-.726 1.011-.815zM6.736 6.62A2.113 2.113 0 0 1 9.29 8.09c.184.476.405.964.75 1.35.273.298.702.334 1.077.357.25.018.488-.053.714-.142.524-.16 1.113.315 1.053.857 0 .452-.429.833-.874.797-.298 0-.572-.196-.715-.452-.268-.399-.613-.833-1.124-.893a2.13 2.13 0 0 0-1.363.22c-.268.125-.506.316-.791.417a2.1 2.1 0 0 1-2.036-.297 2.1 2.1 0 0 1-.78-1.322 2.08 2.08 0 0 1 .287-1.44c.288-.451.733-.78 1.25-.922m8.795 2.5a2.826 2.826 0 0 1 3.29 2.272c.078.554.037 1.131-.202 1.643a2.827 2.827 0 0 1-4.165 1.202 2.825 2.825 0 0 1 1.077-5.13zm-3.713 3.26c.19-.03.393-.036.571.06a.865.865 0 0 1 .476.833c-.041.464-.5.833-.963.755-.459-.1-.97-.214-1.417-.006a2.37 2.37 0 0 0-1.118 1.59 2.095 2.095 0 1 1-4.02-1.136c.176-.478.52-.876.967-1.12a2.1 2.1 0 0 1 1.898-.047c.518.261 1.065.482 1.642.535.417.03.744-.268 1.048-.512.274-.214.327-.6.607-.809a.74.74 0 0 1 .309-.143m.459 3.529c.773-.095 1.535.577 1.499 1.357a1.37 1.37 0 0 1-1.113 1.386 1.38 1.38 0 0 1-1.616-1.636 1.38 1.38 0 0 1 1.23-1.107"/>

        </>
      ) : (
        <>
          
    <path fill="#2B5EBA" d="M12.133 5.192c.828-.19 1.714.536 1.643 1.393.036.773-.732 1.451-1.5 1.35a1.36 1.36 0 0 1-.952-.512 1.39 1.39 0 0 1-.196-1.416c.166-.416.57-.726 1.011-.815zM6.736 6.62A2.113 2.113 0 0 1 9.29 8.09c.184.476.405.964.75 1.35.273.298.702.334 1.077.357.25.018.488-.053.714-.142.524-.16 1.113.315 1.053.857 0 .452-.429.833-.874.797-.298 0-.572-.196-.715-.452-.268-.399-.613-.833-1.124-.893a2.13 2.13 0 0 0-1.363.22c-.268.125-.506.316-.791.417a2.1 2.1 0 0 1-2.036-.297 2.1 2.1 0 0 1-.78-1.322 2.08 2.08 0 0 1 .287-1.44c.288-.451.733-.78 1.25-.922m8.795 2.5a2.826 2.826 0 0 1 3.29 2.272c.078.554.037 1.131-.202 1.643a2.827 2.827 0 0 1-4.165 1.202 2.825 2.825 0 0 1 1.077-5.13zm-3.713 3.26c.19-.03.393-.036.571.06a.865.865 0 0 1 .476.833c-.041.464-.5.833-.963.755-.459-.1-.97-.214-1.417-.006a2.37 2.37 0 0 0-1.118 1.59 2.095 2.095 0 1 1-4.02-1.136c.176-.478.52-.876.967-1.12a2.1 2.1 0 0 1 1.898-.047c.518.261 1.065.482 1.642.535.417.03.744-.268 1.048-.512.274-.214.327-.6.607-.809a.74.74 0 0 1 .309-.143m.459 3.529c.773-.095 1.535.577 1.499 1.357a1.37 1.37 0 0 1-1.113 1.386 1.38 1.38 0 0 1-1.616-1.636 1.38 1.38 0 0 1 1.23-1.107"/>

        </>
      )}
    </BaseIcon>
));

IconElf.displayName = 'Elf';

export default IconElf;
