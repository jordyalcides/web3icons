
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBrock = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m5.64 7.243 5.627-2.503a.23.23 0 0 1 .287.09q.024.073.017.15v1.817a.03.03 0 0 1-.017.026.04.04 0 0 1-.03.013l-5.858.595a.07.07 0 0 1-.069-.038q-.066-.098.043-.15m7.08-2.503 5.657 2.507c.056.03.069.073.026.142a.07.07 0 0 1-.064.034l-5.872-.592c-.008 0-.021 0-.026-.008l-.01-.014-.002-.016V4.929c0-.073.021-.112.021-.116q.104-.149.27-.073m-4.65 8.31a890 890 0 0 0-2.816-4.183c-.184-.27-.154-.476.21-.488l5.734-.605a.043.043 0 0 1 .043.043v.017L8.2 13.131a.04.04 0 0 1-.035.022.04.04 0 0 1-.034-.017 1 1 0 0 1-.06-.086m10.564-4.667a.25.25 0 0 1 .202.266.25.25 0 0 1-.043.115l-2.97 4.372-.006.008a.03.03 0 0 1-.028.005l-.009-.013-3.043-5.302c-.026-.043-.013-.06.03-.06zM5.143 15.03v-4.684a.094.094 0 0 1 .128-.086.08.08 0 0 1 .052.034l2.091 3.42a.094.094 0 0 1-.03.133L5.29 15.111a.09.09 0 0 1-.1.003.1.1 0 0 1-.046-.088zm11.404-1.29 2.109-3.454a.1.1 0 0 1 .03-.03l.06-.026a.077.077 0 0 1 .111.064v4.766a.077.077 0 0 1-.077.077l-.043-.013-2.164-1.285a.08.08 0 0 1-.035-.043.07.07 0 0 1 .01-.06zm-3.977 4.98c-.309.549-.664.87-1.072.141l-2.597-4.654a.06.06 0 0 1 .03-.056.1.1 0 0 1 .03-.008h6.065a.05.05 0 0 1 .043.026.06.06 0 0 1 0 .055zM8.074 14.7l2.233 4.029a.145.145 0 0 1-.045.19.15.15 0 0 1-.066.024l-.163.013a.15.15 0 0 1-.094-.022l-4.252-2.773a.146.146 0 0 1-.043-.192.12.12 0 0 1 .052-.052l2.177-1.273a.145.145 0 0 1 .201.052zm5.709 3.879c.728-1.32 1.448-2.649 2.198-3.952a.043.043 0 0 1 .064-.017q1.145.664 2.28 1.341.066.04.078.073a.1.1 0 0 1 0 .069.1.1 0 0 1-.03.047l-4.265 2.786c-.287.193-.47-.09-.325-.347"/>

        </>
      ) : (
        <>
          
    <path fill="#fff" d="m5.64 7.243 5.627-2.503a.23.23 0 0 1 .287.09q.024.073.017.15v1.817a.03.03 0 0 1-.017.026.04.04 0 0 1-.03.013l-5.858.595a.07.07 0 0 1-.069-.038q-.066-.098.043-.15m7.08-2.503 5.657 2.507c.056.03.069.073.026.142a.07.07 0 0 1-.064.034l-5.872-.592c-.008 0-.021 0-.026-.008l-.01-.014-.002-.016V4.929c0-.073.021-.112.021-.116q.104-.149.27-.073"/>
    <path fill="#A2A3A5" d="M8.07 13.05a890 890 0 0 0-2.816-4.183c-.184-.27-.154-.476.21-.488l5.734-.605a.043.043 0 0 1 .043.043v.017L8.2 13.131a.04.04 0 0 1-.035.022.04.04 0 0 1-.034-.017 1 1 0 0 1-.06-.086m10.564-4.667a.25.25 0 0 1 .202.266.25.25 0 0 1-.043.115l-2.97 4.372-.006.008a.03.03 0 0 1-.028.005l-.009-.013-3.043-5.302c-.026-.043-.013-.06.03-.06z"/>
    <path fill="#fff" d="M5.143 15.03v-4.684a.094.094 0 0 1 .128-.086.08.08 0 0 1 .052.034l2.091 3.42a.094.094 0 0 1-.03.133L5.29 15.111a.09.09 0 0 1-.1.003.1.1 0 0 1-.046-.088zm11.404-1.29 2.109-3.454a.1.1 0 0 1 .03-.03l.06-.026a.077.077 0 0 1 .111.064v4.766a.077.077 0 0 1-.077.077l-.043-.013-2.164-1.285a.08.08 0 0 1-.035-.043.07.07 0 0 1 .01-.06z"/>
    <path fill="#A2A3A5" d="M12.57 18.72c-.309.549-.664.87-1.072.141l-2.597-4.654a.06.06 0 0 1 .03-.056.1.1 0 0 1 .03-.008h6.065a.05.05 0 0 1 .043.026.06.06 0 0 1 0 .055z"/>
    <path fill="#fff" d="m8.074 14.7 2.233 4.029a.145.145 0 0 1-.045.19.15.15 0 0 1-.066.024l-.163.013a.15.15 0 0 1-.094-.022l-4.252-2.773a.146.146 0 0 1-.043-.192.12.12 0 0 1 .052-.052l2.177-1.273a.145.145 0 0 1 .201.052zm5.709 3.879c.728-1.32 1.448-2.649 2.198-3.952a.043.043 0 0 1 .064-.017q1.145.664 2.28 1.341.066.04.078.073a.1.1 0 0 1 0 .069.1.1 0 0 1-.03.047l-4.265 2.786c-.287.193-.47-.09-.325-.347"/>

        </>
      )}
    </BaseIcon>
));

IconBrock.displayName = 'Brock';

export default IconBrock;
