
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSpc = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="M6.756 7.482c-2.331 2.798-1.63 6.14-.987 7.46l1.524-.89c-.445-.9-.46-1.933-.417-2.438.328-3.94 3.86-4.773 5.116-4.773 1 0 1.92.346 2.257.518-1.463.83-4.44 2.532-4.647 2.714-.26.228-.455.592-.162 1.128.258.474.797.413 1.12.302l8.885-5.07c.212-.106.426-.66.105-1.125-.31-.447-.956-.386-1.26-.191-1.088.698-1.75.829-2.286.878-.43.038-1.507-.419-2.02-.588-1.439-.474-5.018-.577-7.228 2.075m10.488 9.036c2.332-2.798 1.63-6.14.987-7.46l-1.524.89c.445.9.46 1.933.418 2.438-.328 3.939-3.86 4.773-5.116 4.773-1 0-1.921-.346-2.257-.519 1.462-.828 4.44-2.532 4.647-2.714.26-.227.454-.591.162-1.128-.259-.474-.798-.412-1.12-.301L4.555 17.56c-.213.105-.423.667-.106 1.125.31.447.956.386 1.26.191 1.088-.698 1.75-.823 2.287-.872.429-.039 1.507.418 2.02.588 1.438.474 5.018.576 7.227-2.075"/>

    </BaseIcon>
));

IconSpc.displayName = 'Spc';

export default IconSpc;
