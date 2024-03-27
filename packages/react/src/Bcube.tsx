
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBcube = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M9.857 6.473 12.437 5l6.409 3.658.011-.007v7.278L12.43 19.57v-2.914l3.857-2.177v-4.35L12.43 7.953 9.857 9.4z"/>
    <path fill="currentColor" d="M8.572 7.208 6.03 8.66 6 8.643v7.281l6.429 3.643v-2.91L8.572 14.48z"/>
    <path fill="currentColor" d="m12.429 15.213-2.572-1.457v-.48l.995.548.458-.3.442.257v.009c0 .099.064.184.15.184.086.005.158-.077.163-.175 0-.1-.065-.185-.15-.185a.14.14 0 0 0-.125.064l-.48-.278-.463.3-.99-.54v-.716l.742.429v.004c0 .099.069.18.154.18.086 0 .159-.081.159-.18 0-.103-.069-.18-.155-.18a.15.15 0 0 0-.128.069l-.772-.446v-.771l1.775 1.02v.017c-.005.094.064.18.15.18.085.004.158-.073.158-.172.005-.098-.064-.184-.15-.184a.15.15 0 0 0-.12.06l-1.813-1.042v-.578l.943-.536 1.659.917a.14.14 0 0 0-.017.107c.021.082.12.125.218.1.095-.022.159-.108.137-.194-.02-.081-.12-.124-.218-.098l-.034.012-1.637-.904.694-.394.656.36.71-.116.66.356a.14.14 0 0 0-.003.107c.03.077.133.111.227.073.098-.034.146-.129.115-.206s-.132-.111-.227-.077a.2.2 0 0 0-.038.022l-.716-.386-.707.12-.57-.313.72-.407L15 10.85v2.91l-.621.351v-.578l.446-.549V12.2c.077-.051.111-.141.073-.21-.04-.073-.15-.09-.245-.043-.094.052-.141.15-.098.223.03.056.094.081.162.073v.703l-.445.548v.673l-.737.42v-1.783c.098-.051.145-.15.102-.227-.038-.073-.15-.094-.248-.043-.094.052-.141.15-.103.227.026.043.082.069.142.069v1.817zm.621-4.569a.13.13 0 0 1-.008.095v.004l1.11.6v1.243c.068-.009.133.017.158.068.039.077-.004.176-.098.223-.095.051-.202.03-.245-.043-.038-.068-.004-.158.078-.21v-1.217l-1.08-.587a.2.2 0 0 1-.052.021c-.098.026-.197-.017-.218-.102-.022-.082.043-.168.141-.193.094-.026.193.021.214.098" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#30C7F4" d="M5.571 15.639 12 19.282v-7.286L5.57 8.357z"/>
    <path fill="#075899" d="M18.428 15.643 12 19.286v-7.269l6.428-3.651z"/>
    <path fill="#199BCC" d="M12.008 4.714 5.593 8.38l6.415 3.643 6.42-3.643z"/>
    <path fill="#191D20" d="M8.143 5.644h1.285v3.472L12 7.667l3.857 2.177v4.35L12 16.372l-3.857-2.178zm6.428 4.92L12 9.107l-.72.407.57.313.707-.12.716.386a.2.2 0 0 1 .038-.021c.095-.035.197 0 .227.077s-.017.171-.115.205c-.095.039-.197.005-.227-.072a.14.14 0 0 1 .004-.108l-.66-.355-.712.115-.655-.36-.695.395 1.638.904.034-.013c.098-.026.197.017.218.099.022.085-.042.171-.137.193-.098.025-.197-.018-.218-.1a.14.14 0 0 1 .017-.106l-1.659-.917-.943.535v.579l1.813 1.041a.15.15 0 0 1 .12-.06c.086 0 .155.086.15.185 0 .098-.073.175-.158.171-.086 0-.155-.086-.15-.18v-.017l-1.775-1.02v.771l.772.446a.15.15 0 0 1 .128-.069c.086 0 .155.078.155.18 0 .1-.073.18-.159.18s-.154-.08-.154-.18v-.004l-.742-.428v.715l.99.54.463-.3.48.279a.14.14 0 0 1 .125-.064c.085 0 .15.085.15.184-.005.098-.078.18-.163.176-.086 0-.15-.086-.15-.185v-.008l-.442-.257-.458.3-.995-.549v.48L12 14.927l.998-.566v-1.817c-.06 0-.115-.025-.141-.068-.039-.077.009-.176.103-.227.098-.052.21-.03.248.042.043.078-.004.176-.102.228v1.783l.737-.42v-.673l.445-.549v-.703c-.068.009-.132-.017-.162-.073-.043-.072.004-.171.098-.223.094-.047.206-.03.244.043.039.069.005.159-.072.21v.785l-.446.548v.579l.621-.352V10.56zm-1.958-.111a.13.13 0 0 0 .008-.094c-.021-.078-.12-.125-.214-.099-.099.026-.163.111-.141.193.021.086.12.129.218.103a.2.2 0 0 0 .052-.022l1.08.587v1.218c-.082.051-.116.141-.078.21.043.072.15.094.245.043.094-.048.137-.146.098-.223-.025-.052-.09-.078-.158-.069v-1.243l-1.11-.6z"/>

        </>
      )}
    </BaseIcon>
));

IconBcube.displayName = 'Bcube';

export default IconBcube;
