
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSei = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M17.833 15.6a6.82 6.82 0 0 0-.471-7.877c-.343.085-.562.278-.913.583-.03.025-.065.051-.095.085a2.87 2.87 0 0 1-2.005.823c-.459 0-.815-.086-1.123-.236-.266-.137-.463-.317-.596-.437l-.03-.03c-.141-.128-.231-.201-.36-.257a1.7 1.7 0 0 0-.685-.111c-.49 0-.995.231-1.466.591-.386.297-.725.65-1.003 1.05l-1.072-.711a6 6 0 0 1 1.29-1.359 3.78 3.78 0 0 1 2.25-.857c.498 0 .888.077 1.213.223s.545.343.699.48c.163.15.24.214.343.27.094.047.244.098.54.098.514 0 .797-.197 1.157-.514l.111-.094q.357-.331.776-.579a6.87 6.87 0 0 0-11.228 4.436 3.3 3.3 0 0 1 1.238-.249 2.85 2.85 0 0 1 1.86.643l.017.013c.193.137.326.232.489.3.15.064.343.116.643.116.501 0 .827-.232 1.32-.613l.03-.026c.471-.368 1.11-.861 2.082-.861.802 0 1.6.416 2.212.836a8.8 8.8 0 0 1 1.491 1.307l-.964.857a7.4 7.4 0 0 0-1.26-1.106c-.557-.381-1.08-.608-1.479-.608-.505 0-.83.231-1.324.612l-.03.026c-.471.369-1.11.862-2.083.862-.458 0-.827-.086-1.144-.219-.3-.129-.536-.3-.72-.429l-.013-.008a2.6 2.6 0 0 0-.488-.3 1.6 1.6 0 0 0-.643-.116c-.493 0-.926.202-1.256.437a6.8 6.8 0 0 0 1.517 3.686c.227-.24.497-.493.793-.729.566-.458 1.303-.921 2.079-1.028.492-.073.908 0 1.273.154.347.154.617.377.822.557l.047.043c.42.36.61.523.956.523.399 0 .673-.184 1.072-.501l.077-.065c.364-.287.9-.72 1.646-.72.33 0 .664.095.955.21.3.116.6.279.883.446.197.12.394.249.574.377zm-.78 1.028a6 6 0 0 0-.463-.3 4.4 4.4 0 0 0-.685-.351 1.4 1.4 0 0 0-.485-.12c-.27 0-.463.141-.913.501-.407.326-.99.785-1.877.785-.848 0-1.393-.48-1.748-.797l-.099-.086c-.193-.167-.343-.279-.497-.343a1 1 0 0 0-.574-.069c-.429.065-.943.352-1.453.759a9 9 0 0 0-.695.643 6.86 6.86 0 0 0 4.42 1.607 6.86 6.86 0 0 0 5.07-2.229"/>

        </>
      ) : (
        <>
          
    <path fill="url(#SEI__a)" d="M17.833 15.6a6.82 6.82 0 0 0-.472-7.877c-.343.085-.561.278-.913.583q-.047.036-.094.085a2.87 2.87 0 0 1-2.006.823c-.458 0-.814-.086-1.123-.236-.265-.137-.462-.317-.595-.437l-.03-.03c-.142-.128-.232-.201-.36-.257a1.7 1.7 0 0 0-.686-.111c-.489 0-.994.231-1.466.591a4.8 4.8 0 0 0-1.003 1.05l-1.071-.711a6 6 0 0 1 1.29-1.359 3.78 3.78 0 0 1 2.25-.857c.497 0 .887.077 1.213.223s.544.343.698.48c.163.15.24.214.343.27.095.047.245.098.54.098.515 0 .797-.197 1.157-.514l.112-.094q.356-.331.776-.579a6.87 6.87 0 0 0-11.229 4.436 3.3 3.3 0 0 1 1.239-.249 2.85 2.85 0 0 1 1.86.643l.017.013c.193.137.325.232.488.3.15.064.343.116.643.116.502 0 .827-.232 1.32-.613l.03-.026c.472-.368 1.11-.861 2.083-.861.801 0 1.599.416 2.211.836a8.8 8.8 0 0 1 1.492 1.307l-.964.857a7.4 7.4 0 0 0-1.26-1.106c-.558-.381-1.08-.608-1.479-.608-.506 0-.831.231-1.324.612l-.03.026c-.472.369-1.11.862-2.083.862-.459 0-.827-.086-1.144-.219-.3-.129-.536-.3-.72-.429l-.013-.008a2.6 2.6 0 0 0-.489-.3 1.6 1.6 0 0 0-.643-.116c-.493 0-.925.202-1.255.437a6.8 6.8 0 0 0 1.517 3.686c.227-.24.497-.493.793-.729.565-.458 1.302-.921 2.078-1.028.493-.073.909 0 1.273.154.347.154.617.377.823.557l.047.043c.42.36.609.523.956.523.398 0 .673-.184 1.071-.501l.077-.065c.365-.287.9-.72 1.646-.72.33 0 .664.095.956.21.3.116.6.279.883.446.197.12.394.249.574.377zm-.78 1.028a6 6 0 0 0-.463-.3 4.4 4.4 0 0 0-.686-.351 1.4 1.4 0 0 0-.484-.12c-.27 0-.463.141-.913.501-.407.326-.99.785-1.877.785-.849 0-1.393-.48-1.749-.797l-.098-.086c-.193-.167-.343-.279-.498-.343a1 1 0 0 0-.574-.069c-.428.065-.943.352-1.453.759a9 9 0 0 0-.694.643 6.86 6.86 0 0 0 4.419 1.607 6.86 6.86 0 0 0 5.07-2.229"/>
    <defs>
        <linearGradient id="SEI__a" x1="11.983" x2="11.983" y1="5.143" y2="18.857" gradientUnits="userSpaceOnUse">
            <stop stopColor="#90305C"/>
            <stop offset="1" stopColor="#DF3C41"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconSei.displayName = 'Sei';

export default IconSei;
