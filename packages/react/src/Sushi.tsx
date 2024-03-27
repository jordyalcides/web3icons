
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSushi = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M8.153 5.78c.414-.589 1.214-.849 2.249-.765 1.428.12 3.318.9 5.14 2.22 1.814 1.326 3.146 2.906 3.712 4.24.414.968.427 1.825.013 2.414l-2.842 4.044c-.414.59-1.221.85-2.249.766-1.428-.127-3.326-.899-5.14-2.226-1.821-1.32-3.146-2.9-3.719-4.233-.414-.969-.427-1.826-.013-2.415zm10.721 7.815c.332-.463.263-1.152-.062-1.924-.545-1.27-1.821-2.766-3.56-4.03-1.731-1.264-3.532-2.015-4.891-2.127-.828-.07-1.484.084-1.815.554l-.014.029c-.31.47-.241 1.137.083 1.895.545 1.278 1.822 2.773 3.553 4.037 1.732 1.264 3.533 2.015 4.892 2.127.814.064 1.456-.084 1.793-.526zm-4.429-4.809c.87.632 1.51 1.383 1.78 2.022.159.358.2.674.042.891-.153.218-.463.281-.842.246-.683-.056-1.58-.435-2.45-1.067-.869-.632-1.51-1.376-1.78-2.015-.151-.358-.193-.674-.04-.892.15-.217.462-.28.848-.253.676.064 1.58.436 2.442 1.068"/>
    <path fill="currentColor" d="M19.254 11.474q.07.166.13.339a1.4 1.4 0 0 0-.492-.141l-.082-.006c-.547-1.27-1.822-2.763-3.558-4.025a14 14 0 0 0-1.633-1.033c-1.184-.639-2.326-1.017-3.258-1.094-.828-.07-1.484.084-1.815.554l-.014.029c-.31.47-.241 1.137.083 1.895.406.952 1.218 2.025 2.322 3.033q.568.52 1.231 1.004c1.407 1.026 2.859 1.715 4.083 1.998-.497.707-1.031 1.334-1.733 1.475-.615.133-1.221-.15-1.773-.8a9 9 0 0 1-.496-.63c-.38-.513-.75-1.013-1.216-1.118-.664-.16-1.291.431-1.922 1.025l-.002.002c-.49.46-.98.922-1.49 1.038q-.127.028-.256.04c-.96-.95-1.667-1.938-2.046-2.82-.414-.968-.427-1.824-.013-2.414L8.153 5.78c.414-.59 1.214-.85 2.249-.766 1.428.12 3.319.9 5.14 2.22 1.814 1.326 3.146 2.906 3.712 4.24" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M7.801 7.249a.104.104 0 0 1 .108.1l.006.107a.105.105 0 0 1-.094.113.104.104 0 0 1-.112-.097l-.007-.114a.105.105 0 0 1 .1-.11m.02.33a.104.104 0 0 1 .119.09c.123.83.583 1.644 1.18 2.395a.107.107 0 0 1-.016.148.1.1 0 0 1-.146-.016C8.352 9.432 7.866 8.583 7.735 7.7a.105.105 0 0 1 .087-.12m3.06 4.437a.1.1 0 0 1 .11-.032.1.1 0 0 1 .036.02l.082.072.102.088a.106.106 0 0 1-.017.174.1.1 0 0 1-.115-.012l-.105-.09-.082-.072a.107.107 0 0 1-.011-.149m.395.337a.1.1 0 0 1 .069-.04.1.1 0 0 1 .076.022 12.4 12.4 0 0 0 2.923 1.694.105.105 0 0 1 .058.137.103.103 0 0 1-.135.059 12.6 12.6 0 0 1-2.973-1.724.107.107 0 0 1-.018-.148m6.574 2.405a.105.105 0 0 1-.086.12l-.139.02a.103.103 0 0 1-.114-.093.105.105 0 0 1 .09-.116l.13-.018a.1.1 0 0 1 .078.019.1.1 0 0 1 .041.068"/>

        </>
      ) : (
        <>
          
    <path fill="#0E0F23" d="M8.153 5.78c.414-.589 1.214-.849 2.249-.765 1.428.12 3.318.9 5.14 2.22 1.814 1.326 3.146 2.906 3.712 4.24.414.968.427 1.825.013 2.414l-2.842 4.044c-.414.59-1.221.85-2.249.766-1.428-.127-3.326-.899-5.14-2.226-1.821-1.32-3.146-2.9-3.719-4.233-.414-.969-.427-1.826-.013-2.415zm10.721 7.815c.332-.463.263-1.152-.062-1.924-.545-1.27-1.821-2.766-3.56-4.03-1.731-1.264-3.532-2.015-4.891-2.127-.828-.07-1.484.084-1.815.554l-.014.029c-.31.47-.241 1.137.083 1.895.545 1.278 1.822 2.773 3.553 4.037 1.732 1.264 3.533 2.015 4.892 2.127.814.064 1.456-.084 1.793-.526zm-4.429-4.809c.87.632 1.51 1.383 1.78 2.022.159.358.2.674.042.891-.153.218-.463.281-.842.246-.683-.056-1.58-.435-2.45-1.067-.869-.632-1.51-1.376-1.78-2.015-.151-.358-.193-.674-.04-.892.15-.217.462-.28.848-.253.676.064 1.58.436 2.442 1.068"/>
    <path fill="#fff" d="M18.812 11.671c.324.772.393 1.46.062 1.924l-.02.035c-.339.442-.98.59-1.794.527-1.36-.113-3.16-.864-4.892-2.128S9.16 9.269 8.615 7.992c-.324-.758-.393-1.425-.083-1.895l.014-.029c.331-.47.987-.625 1.815-.554 1.358.112 3.16.863 4.89 2.127 1.74 1.264 3.016 2.76 3.561 4.03"/>
    <path fill="url(#SUSHI__a)" d="M19.384 11.813a5 5 0 0 0-.13-.339c-.566-1.333-1.898-2.913-3.712-4.24-1.821-1.32-3.712-2.099-5.14-2.219-1.035-.084-1.835.176-2.25.766L5.305 9.825c-.414.59-.4 1.446.013 2.415.379.881 1.085 1.87 2.046 2.82q.128-.013.255-.041c.513-.116 1.003-.579 1.493-1.04.63-.594 1.258-1.185 1.922-1.025.466.105.836.605 1.216 1.118.16.218.323.438.496.63.552.65 1.158.933 1.773.8.702-.14 1.236-.768 1.733-1.475-1.224-.283-2.676-.972-4.083-1.998-1.731-1.264-3.008-2.76-3.553-4.037-.324-.758-.393-1.425-.083-1.895l.014-.029c.332-.47.987-.624 1.815-.554 1.358.112 3.16.863 4.891 2.127 1.736 1.262 3.011 2.755 3.558 4.025l.082.006q.291.033.492.14"/>
    <path fill="url(#SUSHI__b)" d="M16.225 10.807c-.27-.638-.911-1.39-1.78-2.022-.862-.631-1.766-1.003-2.443-1.067-.386-.028-.696.035-.848.253s-.11.534.041.891c.27.64.91 1.383 1.78 2.015s1.766 1.011 2.45 1.068c.379.035.69-.029.841-.246.159-.218.117-.534-.041-.892"/>
    <path fill="#fff" d="M7.801 7.249a.104.104 0 0 1 .108.1l.006.107a.105.105 0 0 1-.094.113.104.104 0 0 1-.112-.097l-.007-.114a.105.105 0 0 1 .1-.11m.02.33a.104.104 0 0 1 .119.09c.123.83.583 1.644 1.18 2.395a.107.107 0 0 1-.016.148.1.1 0 0 1-.146-.016C8.352 9.432 7.866 8.583 7.735 7.7a.105.105 0 0 1 .087-.12m3.06 4.437a.1.1 0 0 1 .11-.032.1.1 0 0 1 .036.02l.082.072.102.088a.106.106 0 0 1-.017.174.1.1 0 0 1-.115-.012l-.105-.09-.082-.072a.107.107 0 0 1-.011-.149m.395.337a.1.1 0 0 1 .069-.04.1.1 0 0 1 .076.022 12.4 12.4 0 0 0 2.923 1.694.105.105 0 0 1 .058.137.103.103 0 0 1-.135.059 12.6 12.6 0 0 1-2.973-1.724.107.107 0 0 1-.018-.148m6.574 2.405a.105.105 0 0 1-.086.12l-.139.02a.103.103 0 0 1-.114-.093.105.105 0 0 1 .09-.116l.13-.018a.1.1 0 0 1 .078.019.1.1 0 0 1 .041.068"/>
    <defs>
        <linearGradient id="SUSHI__a" x1="8.875" x2="14.788" y1="5.729" y2="13.578" gradientUnits="userSpaceOnUse">
            <stop stopColor="#27B0E6"/>
            <stop offset=".52" stopColor="#C26BB3"/>
            <stop offset="1" stopColor="#FA52A0"/>
        </linearGradient>
        <linearGradient id="SUSHI__b" x1="8.875" x2="14.788" y1="5.728" y2="13.578" gradientUnits="userSpaceOnUse">
            <stop stopColor="#27B0E6"/>
            <stop offset=".52" stopColor="#C26BB3"/>
            <stop offset="1" stopColor="#FA52A0"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconSushi.displayName = 'Sushi';

export default IconSushi;
