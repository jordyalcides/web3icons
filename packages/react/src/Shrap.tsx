
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconShrap = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="M20.143 16.941a76 76 0 0 1-1.753-1.354 30 30 0 0 0-1.144-.874q-2.017-1.47-4.055-2.91a.58.58 0 0 1-.214-.33c-.004-.022 0-.026.021-.013l1.025.69q.034.024.043-.022a.33.33 0 0 0-.107-.3 21 21 0 0 0-.618-.557q-.032-.024 0-.056l.433-.428a.08.08 0 0 0 .026-.082l-.022-.102c-.004-.043.01-.052.043-.043l1.123.407q.06.02.099-.03l.111-.129a.08.08 0 0 0 .013-.085 3.9 3.9 0 0 0-.981-1.316.12.12 0 0 1-.039-.129l.377-1.251a.07.07 0 0 0-.017-.069 4.86 4.86 0 0 0-2.52-1.418 4.72 4.72 0 0 0-2.88.274.05.05 0 0 0-.034.056q.011.345-.215.343a.1.1 0 0 1-.064-.03l-.107-.116q-.03-.034-.073-.009l-.304.189q-.04.02-.021.064l.102.257c.043.107.018.137-.09.086l-1.35-.643q-.02-.006-.034.013l-.008.017v.004c.304.18.587.36.848.532q.06.044.009.094l-.138.137a.13.13 0 0 1-.162.026l-1.629-.793q-.271-.13-.034.056l1.285 1.041q.045.04.168.047.077.006.115.022a1 1 0 0 1 .146.056q1.015.533 2.122 1.144.064.038.072.128l.056.39c0 .03.022.052.047.065l1.337.57q.077.032.107.115l.03.082c.06.188.13.304.193.347q.599.39 1.175.814c.068.052.162.138.278.249q.213.207.343.291l2.152 1.47c.128.086.312.219.56.399.3.214.52.377.674.476q.172.116.351.488l.035.064.012.026q.117.233.63.227h.026q.14 0 .313.107l2.113 1.346zM8.76 6.891l.069-.098a.04.04 0 0 0 .004-.048L8.764 6.6c-.025-.052-.051-.056-.085 0l-.108.184q-.027.044.022.069l.111.051q.035.02.056-.013m-.789-.086.047.416c.01.069-.012.086-.068.039l-.381-.3c-.043-.035-.035-.056.017-.077l.33-.112q.05-.02.055.039zm5.572 8.032q.011-.014.03 0c.844.514 1.718 1.067 2.627 1.641q.56.355 1.684.986.465.26.926.527l.017-.021-.004-.022-2.314-1.671a.6.6 0 0 1-.138-.172.55.55 0 0 0-.184-.205l-.891-.514q-.387-.22-.892-.836l-.171-.21a.12.12 0 0 0-.065-.043 3 3 0 0 0-.17-.043 1.2 1.2 0 0 1-.42-.163 19 19 0 0 1-.584-.471q-.147-.129-.501-.232a1.4 1.4 0 0 1-.489-.218 13 13 0 0 1-.754-.712.3.3 0 0 0-.146-.085l-1.2-.322a.66.66 0 0 1-.278-.154A251 251 0 0 0 7.28 9.733c-.145-.133-.407-.313-.775-.536-.215-.129-.373-.223-.472-.292A30 30 0 0 0 4.33 7.808q-.019-.013-.03.005l-.013.017v.004c.193.146.45.373.78.673.235.218.415.381.535.48q.282.236.737.698l.022.022a.09.09 0 0 1 .021.094l-.038.107c-.013.043-.039.043-.069.013a18 18 0 0 0-1.028-.917h-.022q-.02.012 0 .03l.107.129q.277.303.399.471.257.335.514.63.142.154.219.399.013.038-.026.051l-.27.099a.06.06 0 0 0-.043.042 4.8 4.8 0 0 0 .926 3.558 4.87 4.87 0 0 0 2.931 1.83q.14.03.262-.009.126-.045.24-.103l.943-.505a.09.09 0 0 1 .107.008l.6.429c.043.025.06.017.051-.035l-.06-.334a1.6 1.6 0 0 1 .043-.634.16.16 0 0 1 .099-.129l.613-.265q.12-.046.107.077-.018.275.034.608c0 .026 0 .052-.009.077l-.042.116q-.128.314-.146.493l-.047.497c0 .017.004.026.021.026a4.5 4.5 0 0 0 2.019-.523q.057-.027 0-.06a1.5 1.5 0 0 1-.335-.266 9 9 0 0 0-.934-.857v-.017zm2.55-3.823-.502-.146a.12.12 0 0 1-.085-.085l-.215-.626a.7.7 0 0 0-.145-.24l-.446-.463a.08.08 0 0 1-.021-.073c.085-.433.2-.836.355-1.208q.02-.052.052-.013c.7.773 1.07 1.79 1.033 2.833q-.001.026-.026.021m-10.179-.728-.103.064a.03.03 0 0 0-.008.026l.013.26q0 .043.038.022l.232-.12q.032-.012.012-.038l-.145-.206q-.014-.02-.039-.008m8.057.595 1.273.45q.027.013.009.039l-.643.801q-.015.02-.03 0l-.827-.814q-.014-.013-.009-.026l.197-.441c.005-.013.018-.013.03-.009m2.199 2.709.043.013c.21.081.394.175.557.295.03.018.047.013.06-.021.174-.61.208-1.252.099-1.877-.043-.236-.09-.48-.15-.737-.01-.026-.022-.039-.052-.039l-.964-.008a.17.17 0 0 0-.146.072l-.771 1.11a.13.13 0 0 0-.022.112l.022.077q.09.309.257.411l.716.429c.072.047.188.098.347.163zm1.478-1.32c0-.013.013-.017.026-.017l.06.017c.06.017.086.056.069.12l-.009.034q-.025.094-.12.073l-.055-.013q-.025-.006-.018-.026l.043-.188zm-.158.968.257-.342q.052-.085-.043-.086l-.411-.035c-.043-.004-.06.013-.06.052l-.005.3q0 .039.03.051l.163.077q.044.021.069-.017m-.356.296q.019-.051.069-.039l.686.18q.049.013.047.056v.682c0 .043-.017.055-.056.025q-.104-.089-.459-.094h-.111a.6.6 0 0 1-.364-.184.06.06 0 0 1-.018-.069zm1.543.073q-.22-.15-.326.021c-.017.026-.043.035-.072.013a.1.1 0 0 0-.086-.013c-.043.009-.043.03-.009.06l.3.245q.039.025.064-.013l.146-.249q.02-.038-.017-.064m.086.861a.13.13 0 0 1-.022-.055q-.007-.051.043-.056c.022 0 .039.004.047.021q.038.053-.008.099c-.022.017-.043.017-.056-.009zm-3.557.009.407.476q0 .007.013.008l.732.146c.052.009.056 0 .022-.039l-.656-.6-.013-.008-.488-.022c-.03 0-.039.013-.017.039m2.768.574-.197-.377q-.02-.027.013-.034l.489-.125c.012 0 .02 0 .025.013l.407.909c.022.043.013.056-.03.03l-.698-.407zm1.149-.21c0 .017-.009.03-.017.043a.2.2 0 0 1-.056.043l-.039.021c-.034.018-.034.035-.004.06l.086.065q.033.025.06 0 .1-.084.085-.193a.09.09 0 0 0-.06-.069c-.03-.013-.05 0-.055.03m-6.502.686-.214-.017q-.032 0-.039-.039l-.02-.171a.04.04 0 0 1 .02-.043l.3-.176c.052-.034.073-.017.06.043l-.06.364q-.008.037-.042.035zm3.57-.077.116.15.009.004.3.12c.055.021.068.009.03-.039l-.172-.205q0-.008-.013-.009l-.248-.056c-.043-.012-.047 0-.022.035m-5.622 1.114c-.073.009-.086-.013-.022-.056l.836-.608a.03.03 0 0 1 .03 0q.3.16.6.325-.69.278-1.444.343zm3.788-.133.094.176c.009.026.009.043-.008.064q-.031.033.043.09l.021.009.716.128c.03 0 .038-.008.025-.034l-.042-.077a.9.9 0 0 1-.116-.317q-.02-.245-.266-.189l-.445.103q-.04.012-.022.043zm1.187-.128q.452.154 1.213.642a.14.14 0 0 1 .051.078l.1.381c.008.034 0 .047-.044.043a7 7 0 0 0-.835-.056.28.28 0 0 1-.202-.073 1.02 1.02 0 0 1-.326-.985c0-.026.018-.035.043-.026zm-1.371.484c-.043.021-.107-.017-.146-.086-.034-.073-.03-.146.013-.171.043-.017.107.021.141.094.035.069.03.142-.012.163zm1.204.879-.257-.386c-.021-.035-.017-.056.026-.069l.287-.081c.021-.009.034 0 .047.017l.291.446q.039.063-.038.068l-.313.022a.04.04 0 0 1-.043-.017m1.594.29-.214-.346q-.076-.116-.146 0c-.073.107-.085.197-.025.265.034.043.124.078.257.103l.103.017q.063.02.025-.038"/>

    </BaseIcon>
));

IconShrap.displayName = 'Shrap';

export default IconShrap;
