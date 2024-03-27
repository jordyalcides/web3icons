
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBifi = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M18 7.793v9.536c0 1.08-.882 1.957-1.97 1.957H7.97A1.963 1.963 0 0 1 6 17.329V6.67c0-1.08.882-1.957 1.97-1.957h7zm-3.429-.105V5.572l3 3h-2.093a.895.895 0 0 1-.907-.884M15 10.302C14.878 9.228 14.112 9 12.855 9l.002-1.623c0-.05-.061-.092-.116-.091h-.647a.095.095 0 0 0-.094.096V9h-.327a18 18 0 0 0-.53.001V7.386c0-.05-.043-.1-.098-.1h-.656c-.055 0-.104.055-.103.106V9H8.242c-.055 0-.1.021-.1.072v.69c.001.05.055.096.11.095h.83c.266 0 .314.23.345.375l.003.013-.001 4.023c0 .124-.046.3-.323.302l-.839.002c-.055-.001-.124.037-.124.088v.69c0 .051.07.079.124.079h2.019v1.623c0 .05.045.091.1.09h.658c.055 0 .1-.045.099-.095v-1.618H12v1.614c0 .05.045.1.1.1h.672c.055 0 .086-.055.085-.106V15.43c1.625 0 2.815-.37 2.815-1.726 0-1.153-.487-1.666-1.423-1.87.471-.261.842-.745.751-1.53m-1.286 3.232c.011 1.047-1.644 1.04-2.411 1.038h-.16V12.55q.103-.001.24-.005c.793-.022 2.32-.066 2.331.99m-.428-2.817c.008.908-1.244.876-1.915.858q-.132-.004-.228-.003V9.857q.097 0 .235-.006c.66-.026 1.898-.073 1.908.866" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#DDD444" d="M18 7.793v9.536c0 1.08-.882 1.957-1.97 1.957H7.97A1.963 1.963 0 0 1 6 17.329V6.67c0-1.08.882-1.957 1.97-1.957h7zm-3.429-.105V5.572l3 3h-2.093a.895.895 0 0 1-.907-.884M15 10.302C14.878 9.228 14.112 9 12.855 9l.002-1.623c0-.05-.061-.092-.116-.091h-.647a.095.095 0 0 0-.094.096V9h-.327a18 18 0 0 0-.53.001V7.386c0-.05-.043-.1-.098-.1h-.656c-.055 0-.104.055-.103.106V9H8.242c-.055 0-.1.021-.1.072v.69c.001.05.055.096.11.095h.83c.266 0 .314.23.345.375l.003.013-.001 4.023c0 .124-.046.3-.323.302l-.839.002c-.055-.001-.124.037-.124.088v.69c0 .051.07.079.124.079h2.019v1.623c0 .05.045.091.1.09h.658c.055 0 .1-.045.099-.095v-1.618H12v1.614c0 .05.045.1.1.1h.672c.055 0 .086-.055.085-.106V15.43c1.625 0 2.815-.37 2.815-1.726 0-1.153-.487-1.666-1.423-1.87.471-.261.842-.745.751-1.53m-1.286 3.232c.011 1.047-1.644 1.04-2.411 1.038h-.16V12.55q.103-.001.24-.005c.793-.022 2.32-.066 2.331.99m-.428-2.817c.008.908-1.244.876-1.915.858q-.132-.004-.228-.003V9.857q.097 0 .235-.006c.66-.026 1.898-.073 1.908.866" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconBifi.displayName = 'Bifi';

export default IconBifi;
