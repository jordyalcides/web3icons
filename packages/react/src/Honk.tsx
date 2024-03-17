
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconHonk = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        <path fill="#010201" d="M18.428 7.971a1.4 1.4 0 0 1-.201.463.04.04 0 0 0 0 .047c.103.163.249.497.154.694-.073.15-.214.27-.343.378-.051.042-.085.102-.064.162.12.378-.013.635-.244.913v.013a.03.03 0 0 0 0 .017l.013.009a.57.57 0 0 1 .355.446c.052.274 0 .433-.055.668-.065.266-.197.399-.386.57a.07.07 0 0 0-.017.047.07.07 0 0 0 .017.052c.227.257.021.591-.09.853a.06.06 0 0 0 0 .034c.069.386-.12.621-.231.951-.086.27-.112.617-.15.922 0 .021 0 .043.012.068q.148.25.155.545a.32.32 0 0 0 .085.214c.176.189.318.343.42.476l.57.758v.3h-.047a.36.36 0 0 0-.077-.291c-.326-.382-.6-.793-.943-1.157-.175-.185-.094-.472-.214-.703a.06.06 0 0 0-.06-.034c-.283.012-.579.137-.827.274-.32.211-.69.336-1.072.364a.04.04 0 0 0-.025.043q.01.247-.013.493l-.052.488a3 3 0 0 1-.128.523h-.112c.172-.501.24-1.011.215-1.534-.009-.171-.12-.283-.3-.3-.286-.02-.57.056-.806.219q-.336.19-.664.402c-.013.009-.013.017-.009.035l.034.064.013.008h.022l.514-.12c.034-.008.056.005.056.043v.013l-.005.026a.04.04 0 0 1-.021.017l-.514.129a.03.03 0 0 0-.022.021c-.025.189.262.266.425.283.03 0 .042.021.042.051v.013q-.006.032-.038.03a.77.77 0 0 1-.412-.12h-.012l-.052.249c0 .008 0 .013.009.017l.788.454h-.253a4.6 4.6 0 0 0-.591-.364.03.03 0 0 0-.03 0c-.24.188-.6.236-.857.103a5 5 0 0 1-.172-.095q-.017-.004-.03.005a1.8 1.8 0 0 1-.415.326l.002.007.006.005.043.013h-.3q.204-.115.403-.244a.54.54 0 0 0 .249-.514h-.009a.66.66 0 0 1-.377.137.034.034 0 0 1-.034-.026l-.005-.013a.06.06 0 0 1 .009-.043.05.05 0 0 1 .034-.021.58.58 0 0 0 .39-.197l.004-.013v-.017a.03.03 0 0 0-.021-.017l-.579-.086a.034.034 0 0 1-.025-.03v-.03c.008-.034.025-.047.06-.043l.54.081q.03 0 .034-.025a.3.3 0 0 0-.146-.296c-.373-.248-.707-.386-1.208-.544-.116-.039-.322-.09-.369.077-.184.6-.094 1.243-.154 1.864h-.094c0-.056.008-.111.012-.163q.042-.451.009-.904a.03.03 0 0 0-.021-.009l-.215.005c-.6.064-1.255.021-1.86-.064a4.75 4.75 0 0 1-2.323-.935 1.2 1.2 0 0 1-.205-.223q-.013-.011-.026-.004a.1.1 0 0 0-.026.022v-.258l.013-.025q.007-.013.009 0c.047.167.175.308.308.415.995.806 2.417 1.008 3.643.999.206 0 .45-.026.677-.034a.04.04 0 0 0 .04-.03l.003-.017q.013-.348.103-.643c.043-.142.103-.223.257-.223.103 0 .21.021.309.056.257.085.501.184.741.3.167.068.502.244.6.437v.008a.02.02 0 0 0 .022 0h.008c.189-.154.364-.175.63-.15a.44.44 0 0 1 .257.112q.014.013.033.016a.06.06 0 0 0 .036-.008c.248-.154.501-.308.763-.454.3-.171.973-.347 1.127.098l.017.022.021.004a2 2 0 0 0 .463-.081c.219-.065.48-.223.707-.343a2 2 0 0 1 .643-.206q.02 0 .039-.021a.1.1 0 0 0 .017-.034q.049-.29.086-.592c.025-.24.085-.42.163-.617q.012-.033-.013-.009a1.4 1.4 0 0 1-.523.36c-.408.16-.843.24-1.282.236q-.881.02-2.001.009c-.343 0-.784-.086-1.149-.215-.312-.111-.732-.214-.951-.291-.309-.103-.973-.292-1.114-.622-.125-.287.171-.445.39-.497a2.7 2.7 0 0 1 1.748.159c.189.064.377.111.575.141.042-.008.072 0 .085.013q.06.066-.03.06c-.278-.017-.595-.128-.857-.236a2.6 2.6 0 0 0-1.384-.102c-.172.025-.386.085-.476.257-.124.236.27.454.45.531.502.215 1.05.364 1.586.527.476.146.917.215 1.376.223q.558.008 2.048-.03a2.6 2.6 0 0 0 1.252-.368c.094-.052.197-.172.287-.258.128-.124.154-.364.111-.53a.02.02 0 0 0-.008-.01.02.02 0 0 0-.018 0c-.18.142-.385.24-.6.292-.634.159-1.2.291-1.911.338q.033-.061.15-.072a9 9 0 0 0 1.573-.283c.484-.12.908-.287 1.016-.849a.33.33 0 0 0-.099-.308.03.03 0 0 0-.03-.009c-.266.034-.497.214-.724.351-.399.253-.887.425-1.359.39l.026-.06c.013-.004.026-.004.03 0 .643.013 1.093-.257 1.65-.62a.9.9 0 0 1 .373-.125c.004 0 .008 0 .013-.009l.008-.013a.23.23 0 0 1 .06-.137c.15-.141.287-.257.339-.488.025-.125.085-.27.081-.399q0-.053-.026-.008a.9.9 0 0 1-.222.252.9.9 0 0 1-.296.133 7.7 7.7 0 0 1-2.357.287l-.077-.051a.026.026 0 0 1-.013-.03c0-.013.008-.017.021-.022.827.056 1.646-.06 2.443-.282a.8.8 0 0 0 .249-.112c.227-.18.312-.458.012-.634-1.011-.583-2.07-.75-3.128-.197-.214.107-.544.338-.6.578l-.099.335q-.005.02.009.025l.09.06c.021.005 0 .018-.073.039a.42.42 0 0 0-.313.043l-.158.086a4 4 0 0 1-2.233.21 3.13 3.13 0 0 1-1.5-.738c-.133-.115-.335-.094-.493-.073a.35.35 0 0 1-.159 0c-.133-.05-.283-.205-.133-.342q.11-.108.202-.107c.45.004.87-.133 1.281-.313.103-.043.215-.137.292-.185.857-.523 2.001-.398 2.888-.055q.142.051.129-.103l-.004-.039a.22.22 0 0 0-.159-.206 3.7 3.7 0 0 0-.72-.2 4.9 4.9 0 0 0-1.757.106c-.364.094-.579.343-.9.51-.272.14-.564.236-.866.283q-.019.001-.026-.017c-.012-.03-.008-.043.022-.051a2.7 2.7 0 0 0 1.166-.502c.03-.03.03-.034-.013-.021-.172.055-.309.128-.489.158q-.391.066-.788.112c-.232.021-.592.102-.733.278-.15.176-.236.283-.395.386-.154.098-.368.167-.514.257a1.4 1.4 0 0 0-.501.514.3.3 0 0 1-.206.142c-.129.025-.249-.077-.343.073a5.5 5.5 0 0 0-.793 1.714c-.077.338-.09.767-.128 1.149v.02h-.009l-.013-.05V13.8a5.4 5.4 0 0 1 .827-1.916l-.004-.008h-.013a.94.94 0 0 1-.454-.176c-.18-.124-.291-.202-.356-.407v-.163c.043-.197.155-.305.275-.45a.05.05 0 0 0 0-.069c-.438-.531-.086-1.106.291-1.517a.28.28 0 0 1 .236-.103c.013 0 .017-.004.021-.017.009-.026 0-.043-.017-.051-.124-.069-.189-.142-.206-.288-.047-.32.069-.814.459-.822a.03.03 0 0 0 .026-.018.03.03 0 0 0 0-.025c-.108-.167-.215-.275-.15-.493a.8.8 0 0 1 .36-.463c.141-.086.317-.141.471-.24.103-.069.184-.189.266-.283a2.14 2.14 0 0 1 1.993-.57c.175.052.368-.077.531-.15a3 3 0 0 1 .253-.094c.313-.094.664-.214.956-.274a3.5 3.5 0 0 1 1.135-.035c.172.022.24.103.369.167a.04.04 0 0 0 .034 0 3.5 3.5 0 0 1 1.997-.034c.103-.034.18-.107.309-.103.193.005.386.043.561.12.197.086.3.227.442.407.068.095.154.116.274.13.377.03.694.256.951.548.155.175.095.428.296.591.244.206.634.454.724.784z"/><path fill="#F4F43F" d="M12.797 5.46a1.2 1.2 0 0 0-.3.21c-.099.085-.343.368-.27.488.137.227.274.497-.021.66-.176.099-.489.257-.519.472q-.02.117.077.175c.167.1.412.232.232.463q-.118.147-.446.497c-.15.163-.433.43-.343.725q.026.065.137.214.089.11.146.231-.586.155-1.114.36c-.108-.17-.245-.24-.438-.334a1.1 1.1 0 0 1-.497-.463c-.077-.133-.103-.385-.18-.493-.073-.098-.257-.325-.265-.445a.8.8 0 0 1 .047-.287c.055-.172.154-.485.124-.66-.043-.262-.09-.455-.013-.673a1 1 0 0 1 .193-.287l.403-.472c.068-.03.141-.043.206-.077.308-.171.612-.231.93-.33a3.5 3.5 0 0 1 1.311-.18q.348 0 .6.206"/><path fill="#009521" d="M15.081 5.323c.017.137.069.282-.021.402-.069.095-.202.193-.133.326.086.18.296.557.116.724q-.167.15-.356.27c-.107.07-.154.215-.141.343.034.283.03.493-.138.729-.188.248-.415.334-.655.484a.8.8 0 0 0-.377.514l-.15.026a.5.5 0 0 0-.142.043 3 3 0 0 1-.656.231c-.145.035-.274.095-.415.116a6 6 0 0 1-.523.064 1.3 1.3 0 0 0-.146-.23 1 1 0 0 1-.133-.215c-.094-.292.189-.557.343-.725.214-.235.364-.398.442-.497.18-.231-.065-.364-.232-.463q-.096-.057-.077-.18c.03-.214.343-.368.519-.467.3-.163.158-.428.021-.66-.069-.12.171-.407.266-.488q.162-.143.304-.215c.094 0 .193-.017.291-.042l.283-.065c.468-.085.95-.059 1.406.077a.1.1 0 0 0 .073-.004z"/><path fill="#2F61FE" d="M17.546 7.024a2 2 0 0 0-.369.249c-.227.192-.244.394-.18.685a1 1 0 0 1 .026.232c-.026.257-.24.338-.356.535-.107.193.017.408-.099.6a.5.5 0 0 1-.132.13.8.8 0 0 0-.215.235 2.3 2.3 0 0 0-.848-.245l-.369-.02a4 4 0 0 0-.758.02.9.9 0 0 1-.408-.06.9.9 0 0 1-.184-.115 1.5 1.5 0 0 0-.278-.155.8.8 0 0 1 .377-.514c.24-.15.471-.236.655-.488.172-.232.172-.442.138-.72-.013-.138.034-.279.141-.343a3 3 0 0 0 .356-.275c.18-.162-.026-.544-.116-.724-.069-.128.064-.231.133-.326.09-.12.043-.265.021-.402q.353-.014.686.141c.141.073.287.33.407.429.094.085.313.085.437.111.227.043.532.279.682.45.055.069.09.154.115.253q.046.164.138.317"/><path fill="#FE7D22" d="M9.75 5.841a14 14 0 0 1-.403.472 1 1 0 0 0-.193.287c-.077.218-.034.411.013.673.03.175-.069.488-.124.66A.7.7 0 0 0 9 8.22c.008.12.188.343.261.445.077.103.103.36.18.493q.175.309.497.463c.193.094.33.163.438.334-.202.086-.348.138-.442.146l-.836.107a1.6 1.6 0 0 0-.484.137c-.253.125-.368.403-.617.55.043-.395.009-.58-.33-.785-.214-.129-.493-.3-.531-.583-.03-.232.184-.377.184-.587 0-.142-.099-.253-.172-.365-.141-.214.043-.407 0-.62-.042-.207-.244-.387-.458-.335q-.117-.141-.073-.287c.146-.528.673-.45.96-.819.184-.231.36-.399.63-.514.386-.155.806-.283 1.221-.197.112.021.215.025.322.042z"/><path fill="#9D3296" d="M17.546 7.024q.168.148.342.283c.18.141.485.398.429.647-.034.129-.099.27-.197.407-.043.069-.017.146.026.214q.097.167.137.365c.051.253-.185.394-.347.544-.129.116-.065.3-.043.45.03.236-.112.454-.257.622a.04.04 0 0 1-.048.012 3 3 0 0 1-.3-.154c-.184-.107-.355-.274-.531-.416a1.8 1.8 0 0 0-.536-.308.8.8 0 0 1 .215-.236.5.5 0 0 0 .132-.129c.116-.192-.008-.407.099-.6.116-.197.33-.282.356-.535a.7.7 0 0 0-.026-.227c-.064-.3-.047-.498.18-.686.133-.116.257-.197.369-.257z"/><path fill="#F01" d="m7.997 10.894-.257.129a1.7 1.7 0 0 0-.797.694c-.035.047-.09.069-.172.051-.197-.034-.377.005-.574-.047a1.1 1.1 0 0 1-.356-.223c-.338-.274-.064-.54.12-.771a.12.12 0 0 0 .005-.146c-.06-.085-.129-.171-.163-.265-.137-.403.094-.75.347-1.055.064-.077.128-.124.206-.137.115-.026.282-.15.124-.261-.09-.069-.189-.129-.202-.253a.83.83 0 0 1 .129-.562c.064-.09.249-.128.351-.15q.019-.002.03-.017a.06.06 0 0 0 .018-.064.1.1 0 0 0-.018-.03.4.4 0 0 1-.098-.172c.214-.042.416.133.458.34.043.213-.141.406 0 .62.073.112.172.223.172.365 0 .214-.214.355-.184.587.038.283.317.454.531.583.339.206.377.39.33.784"/><path fill="#649947" d="M13.526 9.321c.338.287.677.232 1.127.193.193-.017.403.034.587.043.111 0 .223 0 .33.021a3 3 0 0 1 .506.146c.047.017.042.026 0 .026a5 5 0 0 0-2.229.407c-.013.004-.017 0-.021-.013-.052-.364-.429-.287-.643-.489a7 7 0 0 0-.292-.274v-.004h.009c.261-.069.377-.27.626-.056m-1.483.279q.384-.062.754-.185l.017.005.257.235q.035.027-.008.022a5.6 5.6 0 0 0-1.016-.064c-.06 0-.06 0 0-.013z"/><path fill="#649947" d="m13.937 11.743-.369.171a.4.4 0 0 0-.115.086c-.06.06-.133.128-.185.197-.192.26-.274.585-.227.904l.013.146q.007.064-.068.051a3.3 3.3 0 0 1-.575-.141l-.48-.163c-.417-.1-.851-.1-1.268 0-.215.056-.515.214-.386.502.137.33.801.514 1.11.62.214.074.639.18.951.292.365.129.802.215 1.149.215.746.008 1.414 0 2.001-.009a3.4 3.4 0 0 0 1.286-.236c.21-.085.386-.205.519-.36q.025-.025.013.009a2.3 2.3 0 0 0-.163.617q-.037.302-.086.591c0 .013-.009.026-.017.035a.07.07 0 0 1-.039.021q-.334.045-.643.206c-.227.12-.488.278-.707.343q-.237.07-.484.077a.04.04 0 0 1-.017-.021c-.154-.446-.832-.27-1.127-.1-.257.147-.515.3-.763.455a.055.055 0 0 1-.064-.008.45.45 0 0 0-.258-.112c-.27-.026-.445-.004-.634.146l-.008.004a.02.02 0 0 1-.022-.008c-.098-.193-.433-.369-.6-.442a7 7 0 0 0-.741-.295 1 1 0 0 0-.313-.056c-.15 0-.21.085-.253.223q-.09.295-.103.643a.05.05 0 0 1-.013.034.04.04 0 0 1-.03.013c-.227.008-.471.03-.681.034-1.222.009-2.644-.193-3.643-.999-.129-.107-.257-.248-.3-.415q-.006-.013-.013 0l-.013.03v-.257l.013.05h.004l.005-.012v-.008c.038-.386.051-.815.128-1.153.162-.612.429-1.19.789-1.71.098-.15.214-.043.347-.073a.3.3 0 0 0 .206-.142c.128-.223.3-.394.497-.514.15-.09.364-.159.514-.257.163-.103.249-.21.399-.386.141-.171.501-.257.728-.278q.403-.046.793-.112c.18-.026.317-.103.489-.158.043-.013.043-.009.013.021-.348.283-.729.399-1.166.502-.03.004-.034.02-.022.05q.007.02.026.018l.086-.013q.41-.077.78-.27c.321-.171.536-.416.9-.514a4.9 4.9 0 0 1 1.757-.103q.231.027.72.201a.22.22 0 0 1 .159.206v.043q.019.15-.129.099c-.883-.343-2.023-.468-2.884.055-.077.043-.189.142-.292.185-.411.18-.831.317-1.281.313q-.091-.001-.202.107c-.15.137 0 .291.133.342a.5.5 0 0 0 .159 0c.158-.02.36-.042.493.073.424.377.942.632 1.5.737.771.116 1.508.095 2.233-.214l.158-.085a.42.42 0 0 1 .313-.043"/><path fill="#649947" d="m13.8 10.457.004.013a.03.03 0 0 0 .026.021h.008a5.08 5.08 0 0 1 3.035-.244c.03.004.073.03.094.06.171.206.386.231.583.364q.122.077-.013.03c-.27-.103-.57-.257-.84-.33a2.9 2.9 0 0 0-2.1.232 2.2 2.2 0 0 0-.536.411c-.013.009-.017.009-.021-.008-.034-.13-.013-.245-.163-.313a4.95 4.95 0 0 0-2.019-.459q-.094.001-.278.034c-.442.09-.9.326-1.299.557-.197.12-.364.258-.501.425q-.012.011-.03.004a.63.63 0 0 0-.377-.081c-.116.021-.386.081-.412-.12 0-.013 0-.022.009-.03q.108-.122.197-.12a3 3 0 0 0 1.483-.433c.878-.613 2.1-.463 3.034-.086a.05.05 0 0 0 .064-.026c.03-.055.056-.098.116-.124a5.1 5.1 0 0 1 2.34-.407c.082 0 .159.021.236.073.098.068.206.128.313.18.025.013.047.03.073.06.008.008.008.013-.009.008a5.1 5.1 0 0 0-2.991.266q-.028.012-.022.043z"/><path fill="#fff" d="M11.451 12.03a3.07 3.07 0 0 1-1.607-.707.03.03 0 0 1 .009-.026c.321-.386.823-.604 1.311-.806.289-.126.603-.185.917-.171.433.03.875.12 1.316.27.133.043.463.146.514.244.099.163-.025.6-.098.767q-.508.277-1.072.403c-.403.077-.865.064-1.285.026zm3.583-.095a.1.1 0 0 0-.056-.008c-.128-.06-.257-.141-.39-.176a1.5 1.5 0 0 0-.578-.043l-.086-.06q-.02-.006-.013-.025.054-.167.095-.335c.06-.24.394-.471.6-.578 1.062-.557 2.121-.386 3.128.197.3.171.219.454-.008.634a.8.8 0 0 1-.249.112c-.797.223-1.616.338-2.443.282"/><path fill="#010201" d="M12.557 11.477c-.129.338-.45.484-.789.497-.591.021-.985-.197-.865-.879q.11-.632.728-.698a.9.9 0 0 1 .587.124.814.814 0 0 1 .335.956zm3.596-.947c.604.304.565 1.183-.133 1.346-.403.09-.969.038-1.012-.51-.034-.386.138-.763.515-.888a.77.77 0 0 1 .63.052"/><path fill="#fff" d="M11.516 10.826a.12.12 0 0 0 .094-.142.115.115 0 0 0-.142-.086.12.12 0 0 0-.094.137.113.113 0 0 0 .142.086zm4.041.025a.11.11 0 0 0 .079-.189.1.1 0 0 0-.079-.03.107.107 0 0 0-.107.108c0 .064.047.111.107.111m-3.583.283c.099.009.18-.056.189-.141 0-.086-.073-.163-.172-.168-.098-.004-.184.06-.188.146s.068.159.171.163m4.029 0c.085.004.167-.056.171-.133s-.064-.15-.154-.154c-.09-.009-.172.051-.172.129-.008.08.06.15.155.158m-4.492.133c.056 0 .099-.043.099-.09 0-.051-.043-.09-.099-.094-.055 0-.098.043-.098.09 0 .051.043.094.098.094m4.072-.013a.09.09 0 0 0 .085-.086.086.086 0 0 0-.09-.081c-.051 0-.09.043-.085.086 0 .043.038.085.085.085z"/><path fill="#649947" d="m15.48 13.161-.009-.004a.02.02 0 0 1-.008-.013l-.013-.257a1 1 0 0 0-.026-.257 1.54 1.54 0 0 0-.317-.592 7.6 7.6 0 0 0 2.357-.287.9.9 0 0 0 .292-.133.9.9 0 0 0 .222-.257q.026-.038.026.013c0 .129-.056.274-.086.399-.047.227-.184.343-.334.488a.23.23 0 0 0-.06.137c0 .005 0 .013-.008.018l-.013.004a.85.85 0 0 0-.373.128c-.557.36-1.007.63-1.65.613"/><path fill="#010201" d="M8.897 11.691h-.004v-.021c.008-.026.025-.043.06-.056q.05-.015.103 0l.154.043a.2.2 0 0 1 .094.051q.034.039.022.078v.012l-.005.005h-.008z"/><path fill="#F01" d="M14.014 11.708q.294-.033.574.043c.129.035.258.116.39.172q-.017.005-.017.03h-.008l-.013-.009q-.001-.02-.022-.013-.031-.001-.064.056.035.043.086.064h.004l-.026.013-.005.004-.007.002q-.004 0-.008-.002l-.005-.004a1 1 0 0 0-.172-.081l-.013.004a.03.03 0 0 1-.025 0 1 1 0 0 0-.343-.026l-.009.013-.013.03a.05.05 0 0 1-.021.021c-.111.073-.013.19-.099.25-.042.03-.111.016-.171.03l-.008.004-.005.008-.008.008q-.13.027-.253.035-.012-.001-.03.017a.03.03 0 0 1-.026.008c-.051-.004-.077.013-.081.06a.1.1 0 0 1-.018.052.1.1 0 0 1-.038.034.09.09 0 0 1-.094-.013c-.022-.021-.06-.025-.112-.021-.043 0-.068.03-.086.073a.7.7 0 0 1-.064.12.05.05 0 0 0-.004.03c0 .038-.026.064-.03.085-.017.043-.039.095-.043.142l-.013.026q-.012.005-.013-.009c0-.013 0-.017-.008-.017q-.02-.002-.022-.021V12.9h-.021v.025l.004.172-.013.004a1.21 1.21 0 0 1 .227-.904c.052-.069.129-.137.185-.197a.4.4 0 0 1 .115-.086l.369-.171q.104-.027.073-.035z"/><path fill="#D01F13" d="M14.978 11.927a.1.1 0 0 1 .056.008q-.02.002-.021.022c0 .013 0 .021.013.03l.081.051c.154.185.257.382.317.588q.026.096.026.257.006.137.021.274l.009.008q-.005-.006-.03 0c0-.175.026-.415-.043-.578a4 4 0 0 0-.086-.154.06.06 0 0 1-.034.021h-.009v.009l-.001.006.001.007.013.025v.017l.009.039q0 .021-.026.017-.037-.005-.043-.043 0-.009-.002-.016a.03.03 0 0 0-.01-.014.2.2 0 0 1-.065-.068h-.004v.012q.012 0 0 .013a.02.02 0 0 1-.013 0l-.004.005q.002.045-.047.051h-.112a.1.1 0 0 0-.051.013l-.24.167c-.06.039-.086.103-.15.141l-.125.073c-.072.056-.171.107-.265.086h-.035c-.111.026-.214.013-.334.052-.124.042-.27.02-.398.02-.09 0-.138.044-.129.138 0 .009-.009.017-.017.026a.4.4 0 0 0-.09.12.34.34 0 0 1-.086-.253 1.4 1.4 0 0 1 0-.193V12.9h.017v.025c0 .018.009.022.022.022q.007-.001.008.017c0 .013 0 .013.013.009a.03.03 0 0 0 .013-.026l.043-.141c.004-.022.03-.048.03-.086l.004-.03a.7.7 0 0 0 .064-.12c.018-.043.043-.069.086-.073.052-.004.09 0 .116.021a.09.09 0 0 0 .09.013.1.1 0 0 0 .043-.034.1.1 0 0 0 .013-.052q.007-.065.085-.06.014.002.022-.008.021-.018.03-.017.132-.012.261-.043.006-.013.017-.013c.056-.013.12 0 .167-.03.086-.06-.012-.176.099-.248a.05.05 0 0 0 .021-.022l.013-.03a.03.03 0 0 1 .03-.017.8.8 0 0 1 .322.034l.025-.004h.018c.047.013.102.043.171.077h.021a.05.05 0 0 1 .026-.008v-.005a.2.2 0 0 1-.09-.064q.033-.057.064-.056c.013 0 .018 0 .022.013l.013.013h.004v-.004q.002-.027.021-.026"/><path fill="#FDCAC3" d="M13.928 12h.155c.021 0 .043.008.055.021a.1.1 0 0 1 .03.056l.018.098a.1.1 0 0 1-.013.07.1.1 0 0 1-.06.038l-.27.034a.1.1 0 0 1-.047-.009.094.094 0 0 1-.03-.137l.094-.133a.09.09 0 0 1 .073-.038z"/><path fill="#9A1105" d="m15.45 13.166-.026.06c-.062.267-.21.508-.42.685v.009q0 .003.003.005l.006.003q.011.01.03.005c-.073.008-.125.03-.146.072l-.141.056-.138.056c-.368.107-.72.056-1.067-.15-.013-.026-.03-.043-.051-.043q.117-.001-.034-.073a.2.2 0 0 1-.06-.043.9.9 0 0 1-.266-.458.4.4 0 0 1 .1-.131l.003-.015c-.005-.094.043-.133.128-.137.133 0 .279.017.403-.021.124-.043.223-.026.334-.056h.035c.094.025.193-.026.265-.082l.129-.072c.06-.04.086-.103.146-.142l.24-.171a.1.1 0 0 1 .051-.013h.112c.034 0 .047-.017.042-.043 0-.009.005-.009.009-.009h.017v-.013c-.008 0-.008-.008-.008-.012h.008q.025.04.064.068l.018.03q0 .038.038.043c.013 0 .022 0 .026-.017 0-.013 0-.026-.009-.039v-.017c0-.008 0-.017-.013-.025l-.004-.005a.01.01 0 0 1 0-.012l.004-.005h.009l.034-.021q.045.076.086.154c.069.163.043.403.043.579"/><path fill="#A35B36" d="M15.043 13.933h-.03l-.005-.009v-.017q.321-.277.416-.681c.472.034.96-.138 1.359-.386.227-.146.458-.322.728-.356.009 0 .017 0 .026.009q.13.128.099.308c-.108.562-.532.729-1.016.849a9 9 0 0 1-1.573.283z"/><path fill="#A35B36" d="M12.986 13.298c.051.009.072-.012.068-.051l-.013-.146h.013a.34.34 0 0 0 .086.249.9.9 0 0 0 .266.458.2.2 0 0 0 .06.043q.151.066.034.073c-.669-.086-1.299-.163-1.946-.368a2.3 2.3 0 0 1-.467-.202c-.013-.008-.021 0-.021.013v.017a.05.05 0 0 0 .025.039q.18.107.386.171a7.8 7.8 0 0 0 2.074.373 1.3 1.3 0 0 0 1.209.094l.137-.056a10.5 10.5 0 0 0 1.911-.338 1.6 1.6 0 0 0 .618-.291h.004l.004.008c.043.172.022.407-.111.531-.09.086-.193.206-.287.258a2.6 2.6 0 0 1-1.252.368c-.994.026-1.671.034-2.048.03a5 5 0 0 1-1.376-.223c-.536-.163-1.084-.312-1.586-.527-.18-.077-.574-.3-.45-.531.086-.172.3-.232.472-.257a2.6 2.6 0 0 1 1.392.103c.258.102.575.214.858.235.055 0 .064-.017.025-.06q-.02-.025-.085-.013"/><path fill="#010201" d="M13.5 13.928q.039-.001.051.043a8 8 0 0 1-2.078-.377 2 2 0 0 1-.399-.188.1.1 0 0 1-.004-.022v-.017c0-.017 0-.022.017-.013.133.082.291.146.471.202.643.205 1.273.287 1.942.368zm-3.784.549a.034.034 0 0 1 .004-.043l.013-.004.008-.005q.044-.02.069.018c.116.175.326.295.51.402a.043.043 0 0 1 .013.056l-.009.013a.04.04 0 0 1-.021.021h-.03c-.193-.102-.455-.257-.557-.458"/><path fill="#0645FF" d="M10.226 17.571H5.57v-2.276a.1.1 0 0 1 .026-.02q.013-.008.026.003.096.134.205.223a4.75 4.75 0 0 0 2.323.935c.6.085 1.256.128 1.86.064.065-.005.133-.009.215-.005a.03.03 0 0 1 .021.01.03.03 0 0 1 .009.02q.034.526-.03 1.046m8.155 0H14.97a3 3 0 0 0 .128-.523l.052-.488q.027-.255.017-.51l.008-.015.013-.01a1.96 1.96 0 0 1 1.899-.635.06.06 0 0 1 .06.03c.12.227.039.514.214.703.343.364.617.775.943 1.157.069.073.09.171.077.291"/><path fill="#ACD7FB" d="M11.524 17.571h-1.2c.056-.621-.034-1.26.15-1.864.052-.167.253-.116.369-.077.501.158.835.295 1.208.544a.295.295 0 0 1 .146.296q-.001.026-.034.026l-.54-.082c-.035-.004-.052.009-.06.043v.013a.034.034 0 0 0 .013.043h.012l.579.09q.008 0 .013.005a.03.03 0 0 1 .008.012l.002.015a.03.03 0 0 1-.006.015.58.58 0 0 1-.386.197.05.05 0 0 0-.042.021.056.056 0 0 0-.004.043v.013a.034.034 0 0 0 .039.026.66.66 0 0 0 .385-.137.54.54 0 0 1-.249.514 6 6 0 0 1-.403.244m3.334 0h-.737l-.788-.454-.009-.017.052-.245q0-.011.012-.004c.129.082.262.12.412.12q.033.002.034-.03v-.013q.008-.045-.043-.051c-.158-.017-.445-.094-.42-.283q.001-.02.022-.021l.514-.129q.014-.002.021-.017a.04.04 0 0 0 .005-.021v-.022c0-.034-.022-.047-.056-.043l-.514.129a.03.03 0 0 1-.035-.013l-.034-.064c-.004-.018 0-.026.009-.035q.328-.21.664-.402c.238-.162.524-.237.81-.215.171.013.287.12.296.3a4.1 4.1 0 0 1-.215 1.53"/><path fill="#fff" d="M14.64 16.183a.157.157 0 0 0 .154-.159.157.157 0 0 0-.154-.159.157.157 0 0 0-.154.16.16.16 0 0 0 .154.158m-3.836.077a.157.157 0 0 0 .154-.159.157.157 0 0 0-.154-.158.155.155 0 0 0-.154.158c0 .086.068.159.154.159m.626.025a.16.16 0 0 0 .158-.158.16.16 0 0 0-.158-.159.157.157 0 0 0-.154.159c0 .086.068.163.154.163zm2.743.16a.154.154 0 0 0 .154-.155.157.157 0 0 0-.154-.159.155.155 0 0 0-.155.159c0 .085.069.154.155.154"/><path fill="#ACD7FB" d="M12.968 16.243c.176.043.283.214.3.394 0 .013 0 .021-.012.03-.27.206-.613.171-.926.086a.06.06 0 0 1-.034-.022.06.06 0 0 1-.009-.038c0-.095-.009-.266.077-.335a.75.75 0 0 1 .604-.115"/><path fill="#fff" d="M13.101 16.654a.157.157 0 0 0 .056-.214c-.043-.073-.141-.086-.214-.043-.073.051-.099.146-.052.214.043.073.137.09.215.043zm-.57.06c.086 0 .15-.073.15-.159 0-.085-.068-.158-.15-.158a.157.157 0 0 0-.154.159c0 .085.069.154.154.154zm-1.333.107a.155.155 0 0 0 .155-.158.157.157 0 0 0-.155-.159.16.16 0 0 0-.158.159c0 .085.073.158.158.158m3.365.056a.16.16 0 0 0 .158-.159.16.16 0 0 0-.158-.158.155.155 0 0 0-.155.158c0 .086.069.159.155.159m-.613.047c.026.086.111.133.188.107.082-.021.125-.111.099-.197s-.111-.137-.189-.111c-.081.025-.124.115-.098.201"/><path fill="#ACD7FB" d="M12.788 16.928q-.141.066-.128.185c.013.137.154.124.244.098a.04.04 0 0 0 .026-.021q.103-.211-.107-.262a.73.73 0 0 0 .385-.111c.06-.039.086-.021.065.051l-.035.142a.26.26 0 0 1-.132.171.73.73 0 0 1-.84-.06q-.026-.02-.018-.051a.5.5 0 0 0 .03-.202c0-.012.005-.021.022-.017.15.043.313.073.488.077"/><path fill="#fff" d="M10.646 17.198a.16.16 0 0 0 .158-.158.16.16 0 0 0-.158-.163.16.16 0 0 0-.155.163c0 .085.069.158.155.158m2.142-.27a.04.04 0 0 0 .035 0q.21.05.107.262l-.01.013-.016.008c-.086.026-.231.039-.244-.098q-.013-.119.128-.185m-1.277.429a.155.155 0 0 0 .155-.159.157.157 0 0 0-.155-.158.157.157 0 0 0-.154.158c0 .086.069.159.154.159m3.022.15c.085.017.171-.034.184-.12a.158.158 0 0 0-.185-.186.16.16 0 0 0-.1.066.2.2 0 0 0-.024.056c-.017.085.043.162.129.184z"/><path fill="#0645FF" d="M13.868 17.571h-2.04a.1.1 0 0 1-.047-.013l-.004-.008v-.01l.004-.007q.226-.128.407-.313.014-.014.026 0l.172.085c.257.138.621.086.857-.094a.026.026 0 0 1 .034 0c.197.099.399.219.591.36"/>
    </BaseIcon>
));

IconHonk.displayName = 'Honk';

export default IconHonk;