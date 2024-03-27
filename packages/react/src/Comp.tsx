
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconComp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M6.55 15.831a1.15 1.15 0 0 1-.55-.98v-2.23a.48.48 0 0 1 .189-.382.48.48 0 0 1 .53-.032l5.23 2.933a.96.96 0 0 1 .48.828v2.311a.59.59 0 0 1-.444.56.57.57 0 0 1-.435-.069zm7.49-4.235c.293.172.531.486.531.828v4.689c0 .139-.132.267-.252.334l-.972.635c-.013.008-.046.014-.061.018v-2.604a.94.94 0 0 0-.449-.823L8.143 11.98V9.04c0-.085.03-.167.073-.24a.477.477 0 0 1 .654-.172zm2.198-3.464a.96.96 0 0 1 .476.83v6.85c0 .14-.077.27-.2.336l-1.085.565v-4.77c0-.336-.135-.648-.422-.821l-4.721-2.79V5.623c0-.086.038-.168.079-.241a.48.48 0 0 1 .654-.174z"/>

        </>
      ) : (
        <>
          
    <path fill="#00D395" d="M6.55 15.831a1.15 1.15 0 0 1-.55-.98v-2.23a.48.48 0 0 1 .189-.382.48.48 0 0 1 .53-.032l5.23 2.933a.96.96 0 0 1 .48.828v2.311a.59.59 0 0 1-.444.56.57.57 0 0 1-.435-.069zm7.49-4.235c.293.172.531.486.531.828v4.689c0 .139-.132.267-.252.334l-.972.635c-.013.008-.046.014-.061.018v-2.604a.94.94 0 0 0-.449-.823L8.143 11.98V9.04c0-.085.03-.167.073-.24a.477.477 0 0 1 .654-.172zm2.198-3.464a.96.96 0 0 1 .476.83v6.85c0 .14-.077.27-.2.336l-1.085.565v-4.77c0-.336-.135-.648-.422-.821l-4.721-2.79V5.623c0-.086.038-.168.079-.241a.48.48 0 0 1 .654-.174z"/>

        </>
      )}
    </BaseIcon>
));

IconComp.displayName = 'Comp';

export default IconComp;
