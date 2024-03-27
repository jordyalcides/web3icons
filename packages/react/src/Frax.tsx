
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconFrax = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="M7.307 15.004c-.167.18-.463.502-.801.857-.515.54-.93.986-.935.999a75 75 0 0 0 1.565 1.521l.055.047.81-.857.892-.943a5.57 5.57 0 0 0 6.171.026l.026.03q.887.868 1.787 1.723c.017.004 1.556-1.624 1.551-1.641 0-.009-1.058-1.033-1.705-1.65l-.06-.065a5.57 5.57 0 0 0-.009-6.111l.802-.853q.46-.472.895-.964c-.013-.035-1.59-1.543-1.611-1.543-.013 0-.412.411-.883.908-.36.386-.673.712-.806.849a5.57 5.57 0 0 0-6.021-.051l-.056-.06-.771-.746-.215-.202-.574-.557-.154-.15-.763.815a28 28 0 0 0-.771.827c-.005.008.372.385.84.835l.835.806a5.57 5.57 0 0 0-.094 6.15M15.428 12a3.428 3.428 0 1 1-6.856 0 3.428 3.428 0 0 1 6.856 0"/>

    </BaseIcon>
));

IconFrax.displayName = 'Frax';

export default IconFrax;
