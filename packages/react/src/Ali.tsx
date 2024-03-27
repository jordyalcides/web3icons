
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAli = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M18.857 12a6.857 6.857 0 1 1-13.714 0 6.857 6.857 0 0 1 13.714 0m-6.715-4.86c-.279-.27-.373-.531-.386-.711-2.97.18-5.327 2.61-5.327 5.58a5.627 5.627 0 0 0 5.134 5.562 4.7 4.7 0 0 0-1.179-1.123c-.115-.085-.244-.192-.287-.342-.047-.185.176-.36.296-.429a.8.8 0 0 0 .274-.261c.086-.146.03-.206-.043-.275l-.029-.034a.4.4 0 0 1-.065-.09c-.043-.081-.047-.18.022-.253.072-.077.223-.098.313-.098-.202-.013-.266-.172-.266-.249 0-.12.107-.18.214-.236l.053-.033a1 1 0 0 0 .076-.052c.252-.219.214-.442.184-.54a.7.7 0 0 0-.099-.188l-.017-.027-.006-.01c-.084-.12-.168-.242-.114-.388.06-.18.322-.304.472-.369.6-.244 1.294-.703 1.483-.904.287-.309-.005-.604-.19-.742-.196-.14-.218-.364-.218-.47 0-.222.149-.321.277-.406l.002-.002.116-.086c0-.184-.159-.227-.236-.227.42-.188.248-.386.188-.428-.064-.052-.265-.219-.252-.343.017-.12.171-.215.544-.429.3-.171.214-.368.128-.446-.188-.158-.66-.57-1.062-.951" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#29ABE2" d="M18.857 12a6.857 6.857 0 1 1-13.715 0 6.857 6.857 0 0 1 13.715 0M12.14 7.14c-.278-.27-.373-.531-.386-.711-2.97.18-5.327 2.61-5.327 5.58a5.627 5.627 0 0 0 5.135 5.563 4.7 4.7 0 0 0-1.18-1.123c-.115-.086-.243-.193-.286-.343-.047-.184.176-.36.296-.429a.8.8 0 0 0 .274-.261c.085-.146.03-.206-.043-.274l-.03-.035a.4.4 0 0 1-.064-.09c-.043-.081-.047-.18.021-.253.073-.077.223-.098.313-.098-.202-.013-.266-.172-.266-.249 0-.12.107-.18.214-.235l.053-.034a1 1 0 0 0 .076-.052c.253-.219.214-.442.184-.54a.7.7 0 0 0-.098-.188l-.017-.026-.007-.01c-.084-.121-.168-.243-.113-.389.06-.18.321-.304.471-.369.6-.244 1.294-.702 1.483-.904.287-.308-.004-.604-.189-.741-.197-.142-.218-.365-.218-.472 0-.221.148-.32.276-.405l.002-.002.116-.086c0-.184-.159-.227-.236-.227.42-.188.249-.385.189-.428-.064-.052-.266-.219-.253-.343.017-.12.172-.214.544-.429.3-.171.215-.368.129-.445a28 28 0 0 1-1.063-.952" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconAli.displayName = 'Ali';

export default IconAli;
