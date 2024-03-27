
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSswp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12.129 11.657a.1.1 0 0 1-.03.03q-.019.006-.03-.008a15 15 0 0 0-1.38-2.015 8.3 8.3 0 0 0-1.972-1.842 3.5 3.5 0 0 0-.985-.433 2.68 2.68 0 0 0-2.533.617 5.23 5.23 0 0 0-1.616 2.798c-.129.502-.171.96-.146 1.38a6 6 0 0 0 .502 2.049 5 5 0 0 0 1.217 1.749 2.6 2.6 0 0 0 2.048.72c.943-.086 1.899-.66 2.859-1.715a16 16 0 0 0 2.001-2.726c.009-.017.022-.017.03 0a14.2 14.2 0 0 0 2.91 3.562c.401.341.864.601 1.363.767a2.43 2.43 0 0 0 1.689-.056c.53-.229.986-.6 1.32-1.071.592-.81.98-1.75 1.131-2.743.176-1.05-.008-2.134-.557-3.261a4.1 4.1 0 0 0-1.598-1.843 2.5 2.5 0 0 0-2.392-.052q-.721.327-1.384.956a13.7 13.7 0 0 0-2.443 3.133zM6.772 7.5c-.763.146-1.423.604-1.972 1.384a5.85 5.85 0 0 0-.951 2.259 4 4 0 0 0-.06 1.273 6.3 6.3 0 0 0 .583 1.971q.92 1.889 2.4 2.126.013-.002.008.008c0 .01 0 .013-.008.013-.433-.021-.858-.184-1.265-.488a3.8 3.8 0 0 1-.93-1.003 6.2 6.2 0 0 1-.973-2.799 2.7 2.7 0 0 1-.004-.488 5.8 5.8 0 0 1 1.144-3.022 3.6 3.6 0 0 1 1.059-.951 2.3 2.3 0 0 1 1.101-.317c.009 0 .013 0 .013.013 0 .004 0 .008-.013.008-.042 0-.085 0-.128.013zm13.337 5.516q.34-1.542-.347-3.18-.71-1.692-1.985-2.22a2.3 2.3 0 0 0-.458-.12l-.099-.017q-.012-.006 0-.005.373-.007.694.12 1.28.501 2.006 2.216a5.2 5.2 0 0 1 .364 3.193 6.5 6.5 0 0 1-.514 1.491 4.6 4.6 0 0 1-.977 1.363 2.3 2.3 0 0 1-1.491.673q-.002-.013.008-.013c.896-.124 1.637-.763 2.233-1.92a6.5 6.5 0 0 0 .561-1.577zM4.007 11.207a4 4 0 0 0 0 1.5c.137.82.449 1.603.913 2.293.557.814 1.222 1.264 1.997 1.363a2.66 2.66 0 0 0 1.865-.531v-.018l-.005-.012a3.1 3.1 0 0 1-1.054.385 2.3 2.3 0 0 1-1.303-.18 2.95 2.95 0 0 1-1.054-.805 5.5 5.5 0 0 1-1.157-2.4q-.362-1.594.548-3.292c.243-.459.565-.871.952-1.217a2.53 2.53 0 0 1 1.363-.643q.045-.002 0-.017a.2.2 0 0 0-.108-.004l-.128.025a2.7 2.7 0 0 0-.506.138c-.652.304-1.195.8-1.556 1.422a5.8 5.8 0 0 0-.771 1.989zM17.01 7.65a.2.2 0 0 1 .112-.017c.368.043.69.15.968.33q.77.49 1.294 1.457c.312.582.52 1.212.618 1.864a4.7 4.7 0 0 1-.065 1.723 5.8 5.8 0 0 1-.891 2.1q-.765 1.091-1.813 1.256a2.48 2.48 0 0 1-1.8-.489q-.013-.005-.004-.017.396.21.835.305c.515.115 1.02.051 1.5-.206a3.2 3.2 0 0 0 1.145-1.054 5.66 5.66 0 0 0 .96-2.632 3.3 3.3 0 0 0 0-.767 5.4 5.4 0 0 0-1.17-2.859 2.46 2.46 0 0 0-1.689-.994m-.013 0h-.013l-.012.004h-.005.03zm-9.75 8.409h.005v-.018a2.88 2.88 0 0 1-1.723-1.105 5.5 5.5 0 0 1-.952-2.032 4.16 4.16 0 0 1 .013-2.07 4.9 4.9 0 0 1 1.252-2.262 2.7 2.7 0 0 1 1.491-.78h-.004a2.4 2.4 0 0 0-.986.274c-.529.302-.97.736-1.281 1.26a5.4 5.4 0 0 0-.686 1.68c-.24 1.076-.043 2.19.6 3.343.222.407.512.774.857 1.084q.598.526 1.414.621zM16.81 7.8q.65.032 1.178.416c.489.37.883.85 1.149 1.401a5.6 5.6 0 0 1 .548 1.744q.073.496.009.986a5.7 5.7 0 0 1-.789 2.272c-.505.818-1.131 1.285-1.872 1.414q-.304.046-.009-.043c.418-.104.8-.322 1.101-.63a4.9 4.9 0 0 0 1.363-2.751c.09-.494.086-1-.013-1.492a5.13 5.13 0 0 0-1.191-2.485 2.55 2.55 0 0 0-1.474-.819q-.098-.02 0-.013M4.822 11.546a5.4 5.4 0 0 1 .437-1.427 3.7 3.7 0 0 1 1.384-1.646 2.2 2.2 0 0 1 2.091-.15q.31.127.588.3.126.09.008-.009a2.8 2.8 0 0 0-1.744-.651q-1.043.007-1.86.986a4.95 4.95 0 0 0-1.084 2.511 4.82 4.82 0 0 0 1.165 3.536c.12.133.129.128.017-.013a5.2 5.2 0 0 1-1.037-2.739 3 3 0 0 1 .035-.698m14.28-.42c-.305-1.299-.883-2.194-1.728-2.7a2.1 2.1 0 0 0-2.185 0q-.12.06-.24.111a3.1 3.1 0 0 1 1.11-.514 1.95 1.95 0 0 1 1.414.189c.403.214.754.557 1.063 1.015.31.465.542.977.686 1.517a4.2 4.2 0 0 1 .124 1.668 4.7 4.7 0 0 1-1.234 2.721c-.086.086-.09.086-.013-.009a5 5 0 0 0 1.02-2.194 4.1 4.1 0 0 0-.017-1.804M7.539 8.357a.7.7 0 0 0 .171-.043h.009V8.31h-.005q-.539 0-1.071.36c-.319.217-.595.49-.814.806a4.9 4.9 0 0 0-.72 1.53 3.7 3.7 0 0 0-.099 1.684q.175.927.6 1.68c.28.525.7.963 1.213 1.264.243.132.51.213.784.24l.005-.017a2.76 2.76 0 0 1-1.68-1.247q-.578-.862-.763-1.988a3.6 3.6 0 0 1 .051-1.372 4.6 4.6 0 0 1 1.166-2.228c.281-.28.62-.495.994-.63a.7.7 0 0 1 .159-.035m8.94-.025h-.013q-.033-.008 0-.009a.9.9 0 0 1 .343.043c.581.199 1.077.59 1.405 1.11.33.471.566 1.028.716 1.663q.334 1.427-.386 2.957c-.218.491-.54.93-.942 1.286a2.1 2.1 0 0 1-1.089.488v-.021c.23-.058.45-.15.651-.275a3.3 3.3 0 0 0 1.08-1.208q.393-.714.553-1.556c.112-.6.086-1.2-.068-1.8a4.66 4.66 0 0 0-.969-1.898 2.4 2.4 0 0 0-1.281-.78m-9.965.797a3.9 3.9 0 0 0-.848 1.285 6 6 0 0 0-.244.708c-.253.938-.12 1.92.402 2.957.446.878 1.029 1.41 1.758 1.585a.4.4 0 0 0 .141.013c.03 0 .034-.008 0-.017a2.7 2.7 0 0 1-1.393-1.028 4.6 4.6 0 0 1-.728-1.595 3.75 3.75 0 0 1 .017-2.014A4.7 4.7 0 0 1 6.287 9.6a2.84 2.84 0 0 1 1.183-.994q.202-.078.416-.112.09-.018 0-.017c-.489.017-.943.232-1.372.652m11.996 2.528a4.8 4.8 0 0 0-.69-1.958q-.663-1.053-1.628-1.213h-.005v-.013q.604.018 1.11.429a3.6 3.6 0 0 1 .986 1.328q.347.772.411 1.616.026.3-.021.638a5.1 5.1 0 0 1-.6 1.843 2.7 2.7 0 0 1-1.401 1.29 1 1 0 0 1-.395.064c-.025 0-.025 0 0-.012l.112-.03c.085-.018.154-.039.197-.056a2.8 2.8 0 0 0 1.256-1.162c.301-.504.51-1.058.617-1.637q.116-.605.051-1.127M7.78 8.7a.2.2 0 0 1-.052.013.9.9 0 0 0-.3.094 2.8 2.8 0 0 0-.835.686v.013h.017c.294-.392.71-.676 1.183-.806zm8.601.017a.5.5 0 0 1 .206.056c.465.24.852.61 1.114 1.063q.002.011-.008.017h-.009a2.74 2.74 0 0 0-1.05-1.024 1 1 0 0 0-.326-.12h.043c.009.008.022.008.03.008M6.73 9.844a2.37 2.37 0 0 1 1.517-1.028q.129-.02 0-.013-.817.04-1.453.754a4.1 4.1 0 0 0-.934 1.972 2.5 2.5 0 0 0-.043.694 4.3 4.3 0 0 0 .793 2.173c.454.63.998.951 1.637.973l.008-.005q.002-.01-.008-.017a1.9 1.9 0 0 1-.643-.205c-.814-.468-1.333-1.299-1.569-2.503a2.9 2.9 0 0 1-.017-1.076 4.2 4.2 0 0 1 .712-1.714zm9.094-1.037h-.004q-.008 0 0 0a.8.8 0 0 1 .265.017c.858.18 1.492.849 1.886 2.002q.378 1.094.107 2.13c-.115.465-.303.91-.557 1.316a2.44 2.44 0 0 1-1.02.942 1.9 1.9 0 0 1-.668.15v-.017c.591-.068 1.088-.42 1.5-1.058q1.014-1.582.548-3.215a4.1 4.1 0 0 0-.741-1.461 2.2 2.2 0 0 0-1.316-.806M6.3 13.033c.188.695.58 1.32 1.123 1.791q.545.438 1.174.373c.707-.064 1.359-.471 1.955-1.2q.758-.94 1.362-1.984a.04.04 0 0 0 0-.047 10.4 10.4 0 0 0-1.388-1.903c-.354-.4-.79-.719-1.277-.934a1.72 1.72 0 0 0-1.543.047q-1.101.599-1.483 2.207a2.94 2.94 0 0 0 .077 1.65m11.083.814a2.7 2.7 0 0 1-.951 1.114 1.54 1.54 0 0 1-1.428.125 2.7 2.7 0 0 1-.998-.647 6 6 0 0 1-.386-.442 16 16 0 0 1-1.363-2.014.04.04 0 0 1 0-.043 9.2 9.2 0 0 1 1.569-2.083c.29-.292.63-.531 1.003-.707a1.62 1.62 0 0 1 1.448-.021c.443.233.804.596 1.033 1.041a3.67 3.67 0 0 1 .073 3.682zm-9.934 1.539a1 1 0 0 0 .197.081q.194.046.008-.026a2.6 2.6 0 0 1-1.2-.947v.009c.253.386.583.677.995.883m8.923.077a2.5 2.5 0 0 0 1.007-.707v.013c-.26.33-.612.578-1.012.711q-.004-.011.005-.017" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#fff" d="M12.128 11.657a.1.1 0 0 1-.03.03q-.018.006-.03-.008a15 15 0 0 0-1.38-2.015 8.3 8.3 0 0 0-1.971-1.842 3.5 3.5 0 0 0-.986-.433 2.68 2.68 0 0 0-2.533.617 5.23 5.23 0 0 0-1.615 2.798c-.13.502-.172.96-.146 1.38a6 6 0 0 0 .501 2.049c.276.663.69 1.26 1.217 1.749a2.6 2.6 0 0 0 2.049.72c.943-.086 1.899-.66 2.859-1.715a16 16 0 0 0 2.001-2.726c.008-.017.021-.017.03 0a14.2 14.2 0 0 0 2.91 3.562c.4.341.863.601 1.363.767a2.43 2.43 0 0 0 1.688-.056c.53-.229.987-.6 1.32-1.071.593-.81.981-1.75 1.132-2.743.175-1.05-.009-2.134-.557-3.261a4.1 4.1 0 0 0-1.599-1.843 2.5 2.5 0 0 0-2.391-.052q-.721.327-1.385.956a13.7 13.7 0 0 0-2.442 3.133zM6.771 7.5c-.763.146-1.423.604-1.971 1.384a5.85 5.85 0 0 0-.952 2.259 4 4 0 0 0-.06 1.273 6.3 6.3 0 0 0 .583 1.971q.92 1.889 2.4 2.126.014-.002.009.008c0 .01 0 .013-.009.013q-.651-.032-1.264-.488a3.8 3.8 0 0 1-.93-1.003 6.2 6.2 0 0 1-.973-2.799 2.7 2.7 0 0 1-.004-.488 5.8 5.8 0 0 1 1.144-3.022 3.6 3.6 0 0 1 1.059-.951 2.3 2.3 0 0 1 1.101-.317c.009 0 .013 0 .013.013 0 .004 0 .008-.013.008-.043 0-.086 0-.129.013zm13.337 5.516q.341-1.542-.347-3.18c-.471-1.127-1.136-1.869-1.984-2.22a2.3 2.3 0 0 0-.459-.12l-.098-.017q-.014-.006 0-.005.373-.007.694.12 1.279.501 2.006 2.216c.454 1 .582 2.117.364 3.193a6.5 6.5 0 0 1-.514 1.491c-.24.51-.57.973-.977 1.363a2.3 2.3 0 0 1-1.492.673c0-.009 0-.013.009-.013q1.34-.185 2.233-1.92c.254-.499.443-1.03.561-1.577zM4.007 11.207a4 4 0 0 0 0 1.5c.137.82.448 1.603.913 2.293.557.814 1.221 1.264 1.997 1.363a2.66 2.66 0 0 0 1.864-.531v-.018l-.004-.012a3.1 3.1 0 0 1-1.054.385 2.3 2.3 0 0 1-1.303-.18 2.95 2.95 0 0 1-1.055-.805 5.5 5.5 0 0 1-1.157-2.4c-.24-1.063-.06-2.16.549-3.292a4.4 4.4 0 0 1 .951-1.217 2.53 2.53 0 0 1 1.363-.643q.045-.002 0-.017a.2.2 0 0 0-.107-.004l-.129.025a2.7 2.7 0 0 0-.505.138c-.652.304-1.195.8-1.556 1.422a5.8 5.8 0 0 0-.771 1.989zM17.01 7.65a.2.2 0 0 1 .111-.017c.369.043.69.15.969.33.514.326.942.814 1.294 1.457a5.8 5.8 0 0 1 .617 1.864 4.7 4.7 0 0 1-.064 1.723 5.8 5.8 0 0 1-.892 2.1q-.765 1.091-1.812 1.256a2.48 2.48 0 0 1-1.8-.489q-.012-.005-.005-.017c.263.14.545.242.836.305.514.115 1.02.051 1.5-.206a3.2 3.2 0 0 0 1.144-1.054 5.66 5.66 0 0 0 .96-2.632 3.3 3.3 0 0 0 0-.767 5.4 5.4 0 0 0-1.17-2.859 2.46 2.46 0 0 0-1.688-.994m-.013 0h-.013l-.013.004h-.004.03zm-9.75 8.409h.004v-.018a2.88 2.88 0 0 1-1.723-1.105 5.5 5.5 0 0 1-.951-2.032 4.16 4.16 0 0 1 .013-2.07 4.9 4.9 0 0 1 1.25-2.262 2.7 2.7 0 0 1 1.492-.78h-.005a2.4 2.4 0 0 0-.985.274 3.5 3.5 0 0 0-1.282 1.26 5.4 5.4 0 0 0-.686 1.68q-.361 1.614.6 3.343c.222.407.512.774.858 1.084q.598.526 1.414.621zM16.808 7.8q.65.032 1.179.416c.489.37.882.85 1.148 1.401a5.6 5.6 0 0 1 .549 1.744q.071.496.008.986a5.7 5.7 0 0 1-.788 2.272c-.506.818-1.131 1.285-1.873 1.414q-.303.046-.008-.043a2.34 2.34 0 0 0 1.101-.63 4.9 4.9 0 0 0 1.363-2.751c.09-.494.085-1-.013-1.492a5.13 5.13 0 0 0-1.192-2.485 2.55 2.55 0 0 0-1.474-.819q-.096-.02 0-.013M4.821 11.546a5.4 5.4 0 0 1 .437-1.427 3.7 3.7 0 0 1 1.385-1.646 2.2 2.2 0 0 1 2.091-.15q.31.127.587.3c.086.06.086.056.009-.009a2.8 2.8 0 0 0-1.745-.651q-1.042.007-1.86.986a4.95 4.95 0 0 0-1.084 2.511 4.82 4.82 0 0 0 1.166 3.536q.182.199.017-.013a5.2 5.2 0 0 1-1.037-2.739 3 3 0 0 1 .034-.698m14.28-.42c-.304-1.299-.883-2.194-1.727-2.7a2.1 2.1 0 0 0-2.186 0q-.119.06-.24.111a3.1 3.1 0 0 1 1.11-.514 1.95 1.95 0 0 1 1.415.189c.402.214.754.557 1.062 1.015.31.465.542.977.686 1.517a4.2 4.2 0 0 1 .124 1.668 4.7 4.7 0 0 1-1.234 2.721c-.086.086-.09.086-.013-.009a5 5 0 0 0 1.02-2.194 4.1 4.1 0 0 0-.017-1.804M7.538 8.357a.7.7 0 0 0 .172-.043h.008V8.31h-.004q-.54 0-1.071.36c-.319.217-.595.49-.815.806a4.9 4.9 0 0 0-.72 1.53 3.7 3.7 0 0 0-.098 1.684q.174.927.6 1.68c.28.525.7.963 1.213 1.264.242.132.509.213.784.24l.004-.017a2.76 2.76 0 0 1-1.68-1.247q-.577-.862-.763-1.988a3.6 3.6 0 0 1 .052-1.372 4.6 4.6 0 0 1 1.165-2.228c.282-.28.621-.495.995-.63a.7.7 0 0 1 .158-.035m8.94-.025h-.013q-.032-.008 0-.009a.9.9 0 0 1 .343.043 2.7 2.7 0 0 1 1.406 1.11c.33.471.566 1.028.716 1.663q.334 1.427-.386 2.957c-.219.491-.54.93-.943 1.286a2.1 2.1 0 0 1-1.088.488v-.021c.23-.058.45-.15.651-.275a3.3 3.3 0 0 0 1.08-1.208 5.3 5.3 0 0 0 .553-1.556c.111-.6.085-1.2-.069-1.8a4.66 4.66 0 0 0-.968-1.898 2.4 2.4 0 0 0-1.282-.78m-9.964.797a3.9 3.9 0 0 0-.849 1.285 6 6 0 0 0-.244.708c-.253.938-.12 1.92.403 2.957.446.878 1.029 1.41 1.757 1.585a.4.4 0 0 0 .142.013c.03 0 .034-.008 0-.017a2.7 2.7 0 0 1-1.393-1.028 4.6 4.6 0 0 1-.729-1.595 3.75 3.75 0 0 1 .017-2.014A4.7 4.7 0 0 1 6.287 9.6a2.84 2.84 0 0 1 1.183-.994q.201-.078.415-.112.09-.018 0-.017c-.488.017-.942.232-1.371.652m11.996 2.528a4.8 4.8 0 0 0-.69-1.958q-.664-1.053-1.629-1.213h-.004v-.013q.603.018 1.11.429a3.6 3.6 0 0 1 .985 1.328q.349.772.412 1.616a3 3 0 0 1-.021.638 5.1 5.1 0 0 1-.6 1.843 2.7 2.7 0 0 1-1.402 1.29 1 1 0 0 1-.394.064c-.026 0-.026 0 0-.012l.111-.03q.13-.029.197-.056a2.8 2.8 0 0 0 1.256-1.162c.302-.504.51-1.058.617-1.637q.116-.605.052-1.127M7.778 8.7a.2.2 0 0 1-.051.013.9.9 0 0 0-.3.094 2.8 2.8 0 0 0-.836.686v.013h.017c.295-.392.71-.676 1.183-.806zm8.602.017a.5.5 0 0 1 .205.056c.466.24.852.61 1.115 1.063 0 .008 0 .013-.009.017h-.008a2.74 2.74 0 0 0-1.05-1.024 1 1 0 0 0-.326-.12h.043c.008.008.021.008.03.008M6.728 9.844a2.37 2.37 0 0 1 1.517-1.028q.129-.02 0-.013-.816.04-1.452.754a4.1 4.1 0 0 0-.935 1.972 2.5 2.5 0 0 0-.043.694 4.3 4.3 0 0 0 .793 2.173c.455.63.999.951 1.637.973l.009-.005c0-.008 0-.012-.009-.017a1.9 1.9 0 0 1-.642-.205c-.815-.468-1.333-1.299-1.569-2.503a2.9 2.9 0 0 1-.017-1.076 4.2 4.2 0 0 1 .711-1.714zm9.095-1.037h-.005q-.006 0 0 0a.8.8 0 0 1 .266.017c.857.18 1.491.849 1.886 2.002q.378 1.094.107 2.13c-.115.465-.303.91-.557 1.316a2.44 2.44 0 0 1-1.02.942 1.9 1.9 0 0 1-.669.15v-.017q.885-.101 1.5-1.058c.677-1.055.857-2.126.549-3.215a4.1 4.1 0 0 0-.742-1.461 2.2 2.2 0 0 0-1.316-.806M6.3 13.033a3.6 3.6 0 0 0 1.123 1.791q.545.438 1.174.373c.707-.064 1.358-.471 1.954-1.2q.757-.94 1.363-1.984a.04.04 0 0 0 0-.047 10.4 10.4 0 0 0-1.389-1.903 3.7 3.7 0 0 0-1.277-.934 1.72 1.72 0 0 0-1.543.047c-.732.398-1.23 1.136-1.482 2.207a2.94 2.94 0 0 0 .077 1.65m11.083.814a2.7 2.7 0 0 1-.952 1.114 1.54 1.54 0 0 1-1.427.125 2.7 2.7 0 0 1-.999-.647 6 6 0 0 1-.385-.442 16 16 0 0 1-1.363-2.014.04.04 0 0 1 0-.043 9.2 9.2 0 0 1 1.568-2.083 3.6 3.6 0 0 1 1.003-.707 1.62 1.62 0 0 1 1.449-.021c.443.233.803.596 1.033 1.041a3.67 3.67 0 0 1 .073 3.682zm-9.935 1.539a1 1 0 0 0 .197.081q.194.046.009-.026a2.6 2.6 0 0 1-1.2-.947v.009c.253.386.583.677.994.883m8.923.077a2.5 2.5 0 0 0 1.007-.707v.013c-.26.33-.612.578-1.011.711-.005-.008 0-.013.004-.017" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconSswp.displayName = 'Sswp';

export default IconSswp;
