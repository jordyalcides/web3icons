
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconNewo = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M11.992 16.269c3.147 0 5.7-2.307 5.7-5.152s-2.552-5.151-5.7-5.151-5.7 2.306-5.7 5.151 2.551 5.152 5.7 5.152"/>
    <path fill="currentColor" d="M15.142 5.194a6 6 0 0 0-.686-.372v11.215c.236-.107.467-.235.686-.372zm.715 9.943q.374-.322.69-.703V6.42a7 7 0 0 0-.69-.698zM10.24 4.552a7 7 0 0 1 .685-.172v12.095a5 5 0 0 1-.685-.172zM12 16.577c-.12 0-.24 0-.36-.013V4.3q.347-.021.694 0v12.266l-.334.008zm1.046-.094c.236-.043.471-.099.694-.171V4.552a6 6 0 0 0-.694-.172zM7.427 6.454a7 7 0 0 1 .69-.707v9.373a6 6 0 0 1-.69-.707V6.45zm2.1 9.579a6 6 0 0 1-.694-.381V5.212q.329-.213.69-.382v11.2zm7.736-2.644A6.24 6.24 0 0 0 18 10.432a6.2 6.2 0 0 0-.737-2.953zM6 10.427c0-1.05.257-2.04.711-2.905v5.815A6.2 6.2 0 0 1 6 10.427"/>
    <path fill="currentColor" d="M9.523 7.984c.231-.111.471-.201.72-.278v11.751a6 6 0 0 1-.72-.278zm2.121 11.73a7 7 0 0 1-.715-.085V7.53q.35-.066.715-.086zm.686 0q.366-.02.72-.085V7.53a7 7 0 0 0-.716-.086v12.27zm2.816-.9c.248-.158.488-.338.715-.531V8.88a6 6 0 0 0-.715-.531zm-.686.373V7.972a6 6 0 0 0-.72-.279v11.764q.367-.117.716-.274zm-7.753-8.515q.304-.578.716-1.072v7.959a6 6 0 0 1-.716-1.072zM8.83 8.357a7 7 0 0 0-.716.536v9.373q.338.294.716.536zm8.442 8.173a6 6 0 0 1-.72 1.059V9.574q.412.496.72 1.063z"/>

        </>
      ) : (
        <>
          
    <path fill="#EA4E8C" d="M11.992 16.269c3.147 0 5.7-2.307 5.7-5.152s-2.552-5.151-5.7-5.151-5.7 2.306-5.7 5.151 2.551 5.152 5.7 5.152"/>
    <path fill="#FDFE5D" d="M15.142 5.194a6 6 0 0 0-.686-.372v11.215c.236-.107.467-.235.686-.372zm.715 9.943q.374-.322.69-.703V6.42a7 7 0 0 0-.69-.698zM10.24 4.552a7 7 0 0 1 .685-.172v12.095a5 5 0 0 1-.685-.172zM12 16.577c-.12 0-.24 0-.36-.013V4.3q.347-.021.694 0v12.266l-.334.008zm1.046-.094c.236-.043.471-.099.694-.171V4.552a6 6 0 0 0-.694-.172zM7.427 6.454a7 7 0 0 1 .69-.707v9.373a6 6 0 0 1-.69-.707V6.45zm2.1 9.579a6 6 0 0 1-.694-.381V5.212q.329-.213.69-.382v11.2zm7.736-2.644A6.24 6.24 0 0 0 18 10.432a6.2 6.2 0 0 0-.737-2.953zM6 10.427c0-1.05.257-2.04.711-2.905v5.815A6.2 6.2 0 0 1 6 10.427"/>
    <path fill="#E85EF5" d="M9.523 7.984c.231-.111.471-.201.72-.278v11.751a6 6 0 0 1-.72-.278zm2.121 11.73a7 7 0 0 1-.715-.085V7.53q.35-.066.715-.086zm.686 0q.366-.02.72-.085V7.53a7 7 0 0 0-.716-.086v12.27zm2.816-.9c.248-.158.488-.338.715-.531V8.88a6 6 0 0 0-.715-.531zm-.686.373V7.972a6 6 0 0 0-.72-.279v11.764q.367-.117.716-.274zm-7.753-8.515q.304-.578.716-1.072v7.959a6 6 0 0 1-.716-1.072zM8.83 8.357a7 7 0 0 0-.716.536v9.373q.338.294.716.536zm8.442 8.173a6 6 0 0 1-.72 1.059V9.574q.412.496.72 1.063z"/>

        </>
      )}
    </BaseIcon>
));

IconNewo.displayName = 'Newo';

export default IconNewo;
