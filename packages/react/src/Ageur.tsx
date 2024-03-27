
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAgeur = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="#212331" d="M12.022 14.957a.034.034 0 0 0-.048 0L8.88 17.974a.086.086 0 0 1-.12 0l-3.026-2.948a1.5 1.5 0 0 1-.27-.343c-.385-.643-.771-1.294-1.157-1.963-.034-.052-.025-.094.017-.137l7.608-7.414a.1.1 0 0 1 .064-.026q.037.001.064.026l7.633 7.44a.065.065 0 0 1 .013.081q-.59 1.011-1.196 2.014a2 2 0 0 1-.274.352q-1.515 1.46-3.022 2.927a.11.11 0 0 1-.115-.022l-3.077-3zm-.056-2.391.013-.009a.04.04 0 0 1 .047.009l3.75 3.655a.04.04 0 0 0 .03.013.04.04 0 0 0 .03-.013l3.621-3.531a.043.043 0 0 0 0-.06l-7.431-7.243a.043.043 0 0 0-.06 0L4.53 12.63a.04.04 0 0 0-.013.03q0 .017.013.03l3.626 3.527a.04.04 0 0 0 .043.009.04.04 0 0 0 .017-.009zm.068.342h-.012q-.006 0-.01.003l-.008.006v.009L12 14.768v.005l.004.004 3.112 2.953a.02.02 0 0 0 .017 0h.009l.004-.009.548-1.315a.02.02 0 0 0 0-.022l-3.66-3.471zm-3.917 3.545a.1.1 0 0 0-.03-.043l-3.235-3.159h-.013a.01.01 0 0 0-.002.01q0 .003.002.003.412.707.844 1.415c.056.081.094.137.124.167q1.363 1.318 2.717 2.644h.009l.009-.013v-.009l-.429-1.015z"/>
    <path fill="url(#AGEUR__a)" d="m11.966 12.566-3.75 3.651a.043.043 0 0 1-.06 0L4.53 12.69a.04.04 0 0 1-.013-.03q0-.017.013-.03l7.436-7.243a.04.04 0 0 1 .03-.008q.017 0 .03.012l7.431 7.243a.04.04 0 0 1 .012.026.04.04 0 0 1-.012.03l-3.621 3.531a.04.04 0 0 1-.03.013.04.04 0 0 1-.03-.013l-3.75-3.655a.04.04 0 0 0-.03-.013.04.04 0 0 0-.03.013"/>
    <path fill="#FBE0CC" d="m12.12 12.913 3.57 3.471.004.009v.013l-.548 1.315-.004.009-.009.004h-.009l-.008-.004-3.026-2.953v-1.86a.02.02 0 0 1 .022-.008h.008zm-4.003 3.54.425 1.015v.01c0 .003 0 .008-.009.008l-.01.003-.011-.003q-1.346-1.324-2.705-2.64a1 1 0 0 1-.124-.172q-.431-.706-.844-1.423l.003-.002h.007l.003.002 3.235 3.159z"/>
    <defs>
        <linearGradient id="AGEUR__a" x1="4.834" x2="11.599" y1="14.101" y2="6.98" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5CCAC"/>
            <stop offset="1" stopColor="#EB9C8F"/>
        </linearGradient>
    </defs>

    </BaseIcon>
));

IconAgeur.displayName = 'Ageur';

export default IconAgeur;
