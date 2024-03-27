
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconHord = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="M6.806 4.286c.12 1.007 1.307 3.415 4.971 3.27.356-.013 1.093.274 1.252 1.208.193 1.17-1.17 1.659-2.555 1.659a2.1 2.1 0 0 0 .6-.326c-1.487-.051-4.701-1.74-4.268-5.811m8.751 3.621a3.94 3.94 0 0 0 2.015-1.573 3.22 3.22 0 0 1-1.402 2.58 3.2 3.2 0 0 0-.613-1.007m-6.308 3.3c1.071-.27 3.814-.75 6.214-.48.017-.12.043-.381-.047-.428a8.5 8.5 0 0 0-2.43 0 5.7 5.7 0 0 1 2.43-.463 4.1 4.1 0 0 0-1.063-2.208c-.171.005-.57-.025-.771-.158-.249-.171-.6-.424-.446-.6.128-.146.6-.026.814.051.257.107.72.399.579.707.57.343 1.697 1.612 1.654 3.725-1.616-.467-5.297-.313-6.934-.142zm3.643.489c-1.629-.845-3.673.214-4.496.853.544 0 1.838-.125 2.636-.66A2.82 2.82 0 0 1 9.3 12.896c1.736.368 3.12-.643 3.596-1.2zm1.071.025c.686-.128 2.079-.3 2.113.09.03.395-1.397.103-2.117-.085zm-.643 2.627c-.313-.098-.874-.548-.587-1.568s1.389-.797 1.903-.557c-.129.068-.403.265-.476.557.652-.412 2.053-.836 2.434.771.013.129.013.395-.094.476-.06.047-.098.017-.163-.034-.085-.06-.201-.15-.441-.15-.124.06-.394.184-.506.184-.137 0-.253-.398.082-.518-.103-.043-.352-.013-.532.45-.043.042-.154.137-.244.137-.107 0-.643-.348.244-1.11-.291.004-.891.231-.964 1.114a1.04 1.04 0 0 1-.45-1.007c-.154.068-.412.42-.206 1.255m-5.404-.47c.219-.288.517-.505.857-.627-.66.793-.484 1.938-.313 2.409a2.95 2.95 0 0 1 1.14-2.22c-.27 1.847-.111 2.863 0 3.141-1.783.129-2.858-.557-3.171-.921.158-.103 1.191-1.346 1.487-1.783m2.134-.172c.566.514 1.98 1.607 3.107 1.877l.3 1.106.472-.442c.304.043.998.103 1.298 0l.48.643.133-.729c.133-.013.407.009.433.202.073.488.407 1.585 1.17 2.057-.6.047-1.877-.112-2.216-1.114a1.8 1.8 0 0 0-.471.63c-.656.205-2.169.068-2.94-2.143-.06.351-.133 1.2.086 1.74-.703-.133-2.058-1.089-1.852-3.827m5.229.553c-.566-.116-1.543.608-1.967.985.27 0 .814-.15 1.05-.223l-.108.262c.969-.742 1.08-.352 1.029-.399-.043-.043-.244.073-.339.137.198.03.643.086.832.06s.321-.197.364-.278v.214c.022-.008.069-.098.082-.386.008-.283-.772-.283-1.17-.248l.231-.129zm-.746 1.037c.219-.013.643-.013.6.077-.051.09-.497.266-.716.343.197-.103.497-.33.116-.42m.064.698c.309-.265 1.076-.771 1.685-.668.608.102.368.402.171.54h-.411c-.086-.052-.502-.103-1.445.128M12.15 12.64c-.343.587-1.127.904-1.478.99.175.235.63.685 1.028.578.39-.103.463-1.089.45-1.569"/>

    </BaseIcon>
));

IconHord.displayName = 'Hord';

export default IconHord;
