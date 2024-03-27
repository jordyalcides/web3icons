
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconGeod = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M17.456 17.456a7.713 7.713 0 0 0 0-10.911 7.715 7.715 0 1 0 0 10.91m-.634-10.277a6.82 6.82 0 0 1 0 9.643A6.86 6.86 0 0 1 12 18.857a6.86 6.86 0 0 1-4.821-2.035 6.82 6.82 0 0 1 0-9.643A6.86 6.86 0 0 1 12 5.143a6.86 6.86 0 0 1 4.822 2.036m-.467 6.621a4.714 4.714 0 1 0-8.634-3.786 4.714 4.714 0 0 0 8.634 3.786m-6.01-2.293c.035-1.045.357-2.417 1.17-3.137.027-.021.057-.017.057.017v3.116c0 .026-.043.064-.065.064h-1.114c-.03 0-.043-.03-.043-.06zm2.084-1.157q0-.898.004-1.795a.7.7 0 0 0 0-.16q-.008-.075.047-.03c.827.687 1.11 2.08 1.192 3.12 0 .035-.026.082-.056.082h-1.114c-.03 0-.073-.034-.073-.06zm-3.026 1.222h-1.14c-.026 0-.047-.047-.043-.077a3.83 3.83 0 0 1 1.912-2.83q.037-.017.017.022a7.05 7.05 0 0 0-.712 2.829c0 .026-.012.056-.034.056m4.487-2.889a3.83 3.83 0 0 1 1.894 2.829c0 .03-.012.06-.042.06h-1.123c-.043 0-.06-.039-.064-.077a6.9 6.9 0 0 0-.686-2.79q-.025-.053.021-.022m-3.788 6.634a3.85 3.85 0 0 1-1.886-2.82c-.004-.025.017-.068.043-.068h1.144c.026 0 .043.038.043.06.034.986.261 1.915.686 2.798q.033.064-.03.03m1.47-2.807v3.073c0 .069-.043.077-.086.03-.806-.814-1.063-1.976-1.149-3.098-.004-.043.018-.086.06-.086h1.098c.034 0 .077.047.077.085zm.857 3.086v-3.142s.004-.025.013-.025h1.174c.03 0 .051.038.047.064-.043 1.072-.356 2.344-1.157 3.129-.039.038-.077.03-.077-.026m1.423-.283c.463-.789.672-1.946.707-2.833 0-.026.017-.051.043-.051h1.14c.025 0 .047.043.042.064-.167 1.179-.857 2.254-1.915 2.842-.03.012-.034.008-.017-.022"/>

        </>
      ) : (
        <>
          
    <path fill="#00F" d="M17.455 17.456A7.715 7.715 0 1 0 6.545 6.544a7.715 7.715 0 0 0 10.91 10.912m-.634-10.277a6.82 6.82 0 0 1 0 9.643A6.86 6.86 0 0 1 12 18.857a6.86 6.86 0 0 1-4.822-2.035 6.82 6.82 0 0 1 0-9.643A6.86 6.86 0 0 1 12 5.143a6.86 6.86 0 0 1 4.82 2.037m-.467 6.621a4.71 4.71 0 0 0-2.513-6.248 4.714 4.714 0 1 0 2.513 6.248m-6.009-2.293c.035-1.045.356-2.417 1.17-3.137.026-.021.056-.017.056.017v3.116c0 .026-.043.064-.064.064h-1.114c-.03 0-.043-.03-.043-.06zm2.083-1.157q0-.898.005-1.795a.7.7 0 0 0 0-.16q-.01-.075.047-.03c.827.687 1.11 2.08 1.191 3.12 0 .035-.026.082-.056.082H12.5c-.03 0-.073-.034-.073-.06zm-3.025 1.222h-1.14c-.026 0-.048-.047-.043-.077a3.83 3.83 0 0 1 1.911-2.83q.038-.017.017.022a7.05 7.05 0 0 0-.711 2.829c0 .026-.013.056-.034.056m4.487-2.889a3.83 3.83 0 0 1 1.894 2.829c0 .03-.013.06-.043.06h-1.123c-.043 0-.06-.039-.064-.077a6.9 6.9 0 0 0-.686-2.79q-.024-.053.022-.022M10.1 15.317a3.85 3.85 0 0 1-1.886-2.82c-.004-.025.018-.068.043-.068h1.145c.025 0 .042.038.042.06.035.986.262 1.915.686 2.798q.034.064-.03.03m1.47-2.807v3.073c0 .069-.043.077-.086.03-.805-.814-1.062-1.976-1.148-3.098-.004-.043.017-.086.06-.086h1.097c.034 0 .077.047.077.085zm.857 3.086v-3.142s.005-.025.013-.025h1.174c.03 0 .052.038.048.064-.043 1.072-.356 2.344-1.158 3.129-.038.038-.077.03-.077-.026m1.423-.283c.463-.789.673-1.946.707-2.833 0-.026.017-.051.043-.051h1.14c.026 0 .047.043.043.064-.167 1.179-.857 2.254-1.916 2.842-.03.012-.034.008-.017-.022"/>

        </>
      )}
    </BaseIcon>
));

IconGeod.displayName = 'Geod';

export default IconGeod;
