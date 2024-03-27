
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSun = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="url(#SUN__a)" d="M10.881 4.8v3.257h.429v-3.31q.16-.015.321-.023v3.333h.429V4.715q.28.002.557.026v3.316h.428V4.79q.171.025.339.057v2.087l.403.103.957-1.786.186.079-.607 2.011.355.215 1.516-1.513q.15.105.294.218l-2.264 2.263.004.005.3.3 2.29-2.293q.122.107.24.22l-2.303 2.3.305.3 2.296-2.294q.192.207.365.428l-2.267 2.264.304.3 2.22-2.217q.113.16.215.327l-1.41 1.41.214.356 1.803-.544.008.021-1.665.892.102.402h1.924q.046.262.075.528h-2.989v.428h3.022q.008.171.008.343h-3v.429h2.988a7 7 0 0 1-.038.428h-2.95v.429h2.886a7 7 0 0 1-.09.428h-1.668l-.099.403 1.387.743a7 7 0 0 1-.11.245l-1.5-.452-.214.356L18 16.13a7 7 0 0 1-.284.384l-1.942-1.94-.3.3 1.967 1.97q-.108.12-.221.237l-1.977-1.975-.304.3 1.974 1.972a7 7 0 0 1-.43.363l-1.939-1.936-.3.3 1.893 1.89a7 7 0 0 1-.347.226l-1.066-1.066-.355.21.412 1.368a7 7 0 0 1-.233.091l-.668-1.245-.403.103v1.451l-.193.038v-2.565h-.428v2.628q-.213.026-.429.038V16.62H12v2.666q-.216 0-.429-.013v-2.661h-.428v2.624a7 7 0 0 1-.412-.061V17.72l-.403-.102-.685 1.275a7 7 0 0 1-.314-.115l.412-1.362-.356-.214-1.078 1.078a7 7 0 0 1-.45-.287l1.871-1.871-.3-.3-1.919 1.915a7 7 0 0 1-.248-.204L9.197 15.6l-.004-.004-.3-.3-1.949 1.95a8 8 0 0 1-.392-.407l1.942-1.942v-.004l-.3-.3-1.916 1.918a7 7 0 0 1-.274-.37l1.136-1.132-.215-.356-1.514.457a7 7 0 0 1-.113-.251l1.357-.729-.098-.403H4.92a7 7 0 0 1-.093-.441h2.92v-.429H4.764a7 7 0 0 1-.038-.428h2.56V12H4.713q0-.157.007-.313H7.7v-.428H4.75l.026-.219H6.89l.103-.403-1.882-1.011.026-.074 2.019.614.214-.36-1.595-1.593q.1-.166.21-.327l2.19 2.19.305-.305-2.24-2.234q.1-.128.206-.254l2.261 2.261.3-.3-2.275-2.278a7 7 0 0 1 .405-.392l2.269 2.272.3-.3-2.244-2.247q.132-.105.269-.204l1.606 1.607.356-.215-.648-2.147.091-.04.981 1.832.403-.1V4.867q.18-.037.36-.065m-.788.169a7 7 0 0 0-.557.175l.557 1.036zm-1.44.56a7 7 0 0 0-.56.322l.945.946zM5.559 8.596a7 7 0 0 0-.264.555l1.173.354zm-.577 1.447a7 7 0 0 0-.134.567h1.196zm.059 4.112q.047.152.101.302l.563-.302zm.567 1.34q.077.14.16.277l.464-.464zm3.09 2.999a7 7 0 0 0 .236.114l.152-.502zm1.365.529.24.062v-.512zm3.845.008q.115-.03.229-.066l-.23-.426zm1.268-.474a7 7 0 0 0 .231-.117l-.38-.38zm3.064-2.795q.08-.135.155-.27l-.609-.184zm.619-1.304q.055-.157.105-.316h-.693zm.22-4.186a7 7 0 0 0-.128-.457l-.852.457zm-.445-1.287a7 7 0 0 0-.218-.438l-.724.722zm-2.805-3.184a7 7 0 0 0-.506-.286l-.344 1.136zm-1.49-.702a7 7 0 0 0-.525-.156v1.138z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#F8BA3A" d="M12 16.928a4.928 4.928 0 1 0 0-9.855 4.928 4.928 0 0 0 0 9.855"/>
    <path fill="#F0F3FA" d="M12 7.286a4.714 4.714 0 1 0 0 9.428 4.714 4.714 0 0 0 0-9.428M6.857 12a5.143 5.143 0 1 1 10.286 0 5.143 5.143 0 0 1-10.286 0"/>
    <mask id="SUN__b" width="10" height="10" x="7" y="7" maskUnits="userSpaceOnUse">
        <path fill="#F0F3FA" d="M11.974 16.947a4.974 4.974 0 1 0 0-9.947 4.974 4.974 0 0 0 0 9.947"/>
    </mask>
    <g mask="url(#SUN__b)">
        <path fill="#F0F3FA" d="m12.205 6.781-.656 5.285h.656l-.258 4.881 4.8-.857.866-6.699-2.113-1.86z"/>
        <path fill="#01C1AE" d="M16.225 9.527c.287.133.531.347.574.677.043.36-.017.9-.175 1.363a2.1 2.1 0 0 1-.343.643c-.155.188-.36.338-.622.373-1.2.145-2.198.051-2.94-.348a2.4 2.4 0 0 1-.844-.75q-.044.168-.111.326c-.326.746-1.102 1.384-2.726 1.586a1.49 1.49 0 0 1-1.359-.596 2.8 2.8 0 0 1-.57-1.405 1.04 1.04 0 0 1 .343-.935c.244-.231.6-.394 1.007-.523.81-.248 1.959-.385 3.24-.544l.026-.004c1.307-.163 2.499-.215 3.386-.129.441.047.827.129 1.114.266m-4.007.523c1.264-.15 2.023-.339 2.837-.257.416.043.733.12.943.214.214.103.266.197.274.261.03.27-.013.729-.15 1.127q-.104.299-.253.48c-.094.116-.188.168-.274.176-1.149.142-2.023.043-2.623-.287-.583-.313-.703-.707-.81-1.56-.004-.056.086-.116.056-.154m-1.012.154c-1.148.141-1.903.034-2.593.244-.38.116-.642.249-.8.399a.52.52 0 0 0-.177.48c.052.424.215.844.455 1.14.24.287.535.441.882.399 1.5-.185 2.075-.746 2.302-1.265.206-.471.163-.956.128-1.315-.004-.07-.077-.065-.08-.12 0-.052-.138.08-.117.038"/>
        <path fill="#F0F3FA" d="M12.051 15.188c1.093-.09 1.907-.968 1.83-1.967l-3.951.322c.085.998 1.033 1.735 2.121 1.645"/>
        <path fill="#FE9D51" d="M13.97 13.127q.044.03.043.081c.09 1.072-.788 2.002-1.932 2.096-1.15.094-2.165-.682-2.255-1.757 0-.065.043-.125.112-.129l3.947-.321q.052-.002.085.03m-3.887.522c.137.858.986 1.492 1.976 1.415.986-.086 1.723-.844 1.723-1.714z"/>
        <path fill="#FE9A54" d="M12.467 14.117c0-.056.043-.099.098-.099h1.08a.099.099 0 0 1 0 .193h-1.08a.1.1 0 0 1-.098-.094"/>
        <path fill="#000" d="M13.152 11.884a2.1 2.1 0 0 1-1.243-1.552c0-.518.583-.587 2.015-.587 1.435 0 2.305.116 2.378.493.069.656-.167 1.646-.497 1.809-.326.162-1.594.235-2.657-.163zm-2.49.437a1.9 1.9 0 0 0 .823-2.036c-.12-.416-.78-.313-2.019-.12-1.105.176-1.95.66-1.855 1.084.043.69.578 1.423.891 1.547.313.13 1.316.086 2.164-.47z"/>
        <path fill="#F0F3FA" d="m16.534 8.1.415 1.114 1.114.411-1.114.412-.416 1.114-.41-1.114-1.115-.412 1.114-.411z"/>
    </g>
    <defs>
        <linearGradient id="SUN__a" x1="12" x2="12" y1="4.714" y2="19.286" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5B745"/>
            <stop offset="1" stopColor="#FC8B47"/>
        </linearGradient>
    </defs>

    </BaseIcon>
));

IconSun.displayName = 'Sun';

export default IconSun;
