
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAvg = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="url(#AVG__a)" d="m8.983 11.143-.283-.836c-.471.189-1.414.724-1.414 1.389 0 .835 1.697 3.887 3.956 3.887s3.385-.832 4.517-1.11c1.131-.279 3.955-.832 3.955-2.499 0-1.328-2.682-1.851-4.375-1.941l.702 1.11z"/>
    <path fill="url(#AVG__b)" d="M18.664 12.124c-.055.742-2.503 1.183-5.464.986-2.961-.188-5.323-.947-5.271-1.688.055-.742 2.502-1.188 5.464-.995 2.966.197 5.323.956 5.271 1.697"/>
    <path fill="url(#AVG__c)" d="M9.682 11.529a.245.245 0 0 1-.13-.258c.168-1.01 1.235-1.795 2.53-1.795 1.405 0 2.55.934 2.55 2.083 0 .085-.01.167-.018.248a.25.25 0 0 1-.184.197 6.5 6.5 0 0 1-4.748-.475"/>
    <path fill="#3C8655" d="M12.652 17.816a1.1 1.1 0 0 0-.138-.51.76.76 0 0 0-.282-.313.14.14 0 0 0-.07-.021l-.008.004c-.021.021-.068.094-.064.257 0 .159.043.343.142.514.094.172.2.274.282.313.035.021.06.021.065.021l.008-.004c.022-.021.069-.094.065-.257zm.128.467c.214-.193.206-.686-.017-1.106-.227-.415-.583-.6-.802-.407-.214.193-.205.69.018 1.106.227.42.583.6.801.407M9.283 8.023c.171.077.313.077.403.043.077-.03.128-.086.141-.193s-.017-.27-.133-.446a1.16 1.16 0 0 0-.45-.385c-.171-.073-.312-.078-.402-.043-.078.03-.13.09-.138.193-.017.11.013.27.129.445.12.176.283.309.45.386m-.686-.231c.292.437.827.677 1.192.531.368-.141.428-.609.141-1.046-.291-.437-.823-.677-1.191-.535-.369.141-.429.612-.138 1.05z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#3C8655" d="M14.914 9.476C13.611 7.852 9.797 4.204 7.38 6.077c-2.417 1.869.3 6.772 1.603 8.4.826.976 1.784 1.83 2.846 2.542-.03.128-.03.287 0 .45a14.5 14.5 0 0 1-3.155-2.949c-2.772-3.463-3.51-7.436-1.641-8.88 1.864-1.44 5.391.377 8.164 3.836l.429.557h-.292a17 17 0 0 0-.42-.557m2.542 4.521c.493 1.496.531 2.957-.566 3.806-1.101.853-2.571.574-3.964-.133a.9.9 0 0 1-.03.429c1.684.87 3.27 1.041 4.277.257 1.08-.832 1.174-2.516.527-4.462z"/>
    <path fill="#3C8655" d="M8.602 7.792c.085.132.197.248.32.342-.488 1.603 1.15 4.612 1.758 5.465.69.981 3.583 4.08 5.199 2.94.591-.416.685-1.209.527-2.1l.373-.155c.253 1.243.085 2.246-.57 2.709-1.273.896-3.9-.626-5.859-3.394-1.573-2.22-2.246-4.573-1.796-5.88l.043.073zm6.552 2.841-.197-.283c-1.825-2.57-4.217-4.067-5.571-3.548.184.085.36.227.493.402 1.654-.411 4.114 2.25 4.753 3.146l.137.21z"/>
    <defs>
        <linearGradient id="AVG__a" x1="19.714" x2="6" y1="11.318" y2="11.318" gradientUnits="userSpaceOnUse">
            <stop stopColor="#99C454"/>
            <stop offset="1" stopColor="#4E984D"/>
        </linearGradient>
        <linearGradient id="AVG__b" x1="6.625" x2="17.134" y1="10.28" y2="10.47" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B8CF52"/>
            <stop offset="1" stopColor="#D7DD50"/>
        </linearGradient>
        <linearGradient id="AVG__c" x1="6.715" x2="20.851" y1="13.148" y2="15.252" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A07B58"/>
            <stop offset="1" stopColor="#B9966D"/>
        </linearGradient>
    </defs>

    </BaseIcon>
));

IconAvg.displayName = 'Avg';

export default IconAvg;
