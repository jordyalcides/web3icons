
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCby = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M11.769 7.868q-.024.224-.095.43c-.025.063-.042.063-.064-.01l-.077-.308a.44.44 0 0 1 0-.214c.064-.27.184-.459.244-.742.005-.034.03-.043.048-.021.158.235.17.587.12.913q-.02.134-.155.437c-.004.017-.025-.017-.021-.039a.86.86 0 0 0 .043-.45c-.018-.107-.035-.107-.043.004m1.886-.128.085.231a.04.04 0 0 1-.007.04.04.04 0 0 1-.036.016.4.4 0 0 1-.265-.154.5.5 0 0 1-.065-.193.8.8 0 0 0-.107-.274.043.043 0 0 1 .022-.056.2.2 0 0 1 .145-.004q.385.128.403.514c0 .03-.004.034-.025.008l-.116-.15c-.013-.017-.043 0-.034.022m-.935.274c-.073.107-.081.232-.163.339-.008.008-.013.004-.017 0-.278-.42.043-.527.129-.875.008-.03.043-.042.06-.025a.36.36 0 0 1 .133.223.72.72 0 0 1-.142.642q-.018.02-.017-.012l.03-.283c0-.022 0-.022-.013-.005zm-1.856.403a.9.9 0 0 1-.21.343c-.004.004-.017 0-.021-.013a.67.67 0 0 1 .013-.411c.064-.176.236-.245.321-.42.009-.018.035-.018.043 0q.077.171.043.381c-.043.257-.129.334-.244.493-.03.034-.034.03-.022-.022l.103-.334c.005-.017-.017-.043-.026-.017m3.348.214q-.181.066-.395.095c-.017 0-.025 0-.021-.013q.026-.167.227-.249c.172-.077.403-.026.6-.103.03-.013.073 0 .077.022.043.145-.141.278-.325.347-.12.047-.283.056-.43.086-.012 0-.055-.018-.042-.022q.285-.084.326-.154.01-.02-.017-.009m-.999.099c.082.141-.026.236-.008.368.004.04-.01.043-.043.026-.146-.094-.3-.291-.236-.471q.085-.226.06-.485c0-.017.017-.03.03-.02.321.14.527.552.334.89q-.02.028-.025-.004c-.026-.098.004-.27-.095-.321q-.04-.024-.017.017m-1.86.206q-.027-.091-.034.004c-.009.107-.077.184-.107.291a.03.03 0 0 1-.052.017c-.094-.098-.12-.304-.077-.428a.7.7 0 0 1 .107-.172.8.8 0 0 0 .129-.278q.007-.02.025-.009c.172.142.189.305.168.523-.013.133-.086.223-.159.343a.1.1 0 0 1-.034.039c-.017.004-.017 0-.013-.013a.45.45 0 0 0 .043-.317zm-1.333-.322.112.154c.008.013 0 .04-.013.043-.107.009-.232 0-.279-.141a.8.8 0 0 0-.137-.257c-.013-.009-.004-.035.009-.039.201-.06.347.03.437.262.008.017-.004.03-.017.021a.4.4 0 0 0-.099-.073q-.051-.02-.013.026zm2.7.502-.017.124c0 .021-.051.034-.086.021-.364-.128-.081-.261-.12-.428-.004-.013.03-.026.06-.017q.399.116.309.372c0 .013-.043.013-.06 0l-.009-.008c0-.017-.072-.099-.077-.064m1.762.004a.4.4 0 0 0-.133.098.06.06 0 0 1-.082 0c-.042-.05.009-.158.056-.205.069-.073.21-.129.3-.193q.019-.014.03 0c.15.146-.051.356-.201.441a.05.05 0 0 1-.035.005c-.012 0-.017-.009-.008-.018l.094-.11c.009-.014-.008-.027-.021-.018m-5.083-.082.214.13c.043.02.03.072-.021.085a.57.57 0 0 1-.42-.056c-.12-.073-.21-.214-.373-.309-.022-.017-.013-.042.017-.05.33-.074.72.016.87.24q.032.043-.026.016L9.446 9c-.03-.017-.082.021-.047.038m4.376.412q.016-.09-.03-.009c-.065.107-.155.172-.245.275q-.044.051-.068-.013c-.159-.497.317-.527.497-.802.025-.043.085-.03.098.017.078.33 0 .618-.291.81q-.168.104-.052-.05a.5.5 0 0 0 .086-.228zm1.182.124c0-.008-.013-.021-.021-.013l-.18.129c-.013.013-.034.008-.039-.004a.215.215 0 0 1 .065-.24.4.4 0 0 1 .128-.065.7.7 0 0 0 .18-.107c.009-.008.026-.008.03 0 .129.18-.073.377-.274.45 0 0-.009-.004-.004-.008l.111-.142zm-4.517-.12q-.018.02.009.009c.231-.065.214-.022.403.008.043.009.077.013.09.009q.194-.019.072.086c-.342.3-.831.085-1.277.077-.025 0-.043-.022-.043-.039.159-.364.806-.381 1.252-.291.03.004.043.055.004.051-.171-.017-.403-.013-.514.086zm1.852.056.008.008a.3.3 0 0 1 .112.116c.017.026.008.073-.018.077-.205.06-.274-.133-.411-.313a.027.027 0 0 1 0-.042c.086-.176.343-.048.429.06q.044.064-.022.06a.2.2 0 0 1-.081-.039c-.017-.009-.022.051-.017.073m-3.228.716H9.06v.004c.035.129.04.264.013.394l-.009.009H9.04c-.12-.077-.27-.21-.253-.39.021-.172.06-.313.021-.485v-.012q.002-.013.009-.013l.008-.009h.013c.257.077.407.304.403.609l-.004.214c-.004.009-.009.009-.013.009h-.021v-.009a.6.6 0 0 0-.052-.206c-.017-.042-.056-.064-.077-.107 0-.004 0-.008-.009-.008m2.542-.498q-.062.039.004.052a.4.4 0 0 1 .137.068.06.06 0 0 1-.025.103c-.206.035-.266-.064-.395-.188a.1.1 0 0 0-.038-.026l-.064-.026c-.022-.008-.022-.021-.01-.034.125-.133.352-.086.494 0 .008 0 .013.009.017.013l.008.026v.017q0 .03-.025.017-.064-.04-.103-.017zm1.504.622a.1.1 0 0 0-.038.047.04.04 0 0 1-.026.026.4.4 0 0 0-.15.09c-.017.017-.047.004-.052-.017-.047-.455.27-.335.429-.63.009-.013.013-.013.021 0 .103.188.086.355-.047.514-.06.068-.188.124-.214.231-.021.129-.026.266-.056.395q-.045.211-.047.428c0 .296-.364.759-.553.999a.45.45 0 0 0-.081.343q.018.123.137.111c.407-.026.591-.291.763-.6.103-.184.557-.351.771-.399.022-.004.035-.034.018-.05l-.048-.052c-.085-.095.018-.33.005-.446 0-.017.017-.026.034-.021q.302.135.27.45c0 .025-.03.03-.056.03q-.05.001-.043-.043a.1.1 0 0 0-.017-.065q-.018-.031-.017 0l.017.129q0 .013.026.021c.308.043.583-.021.814-.205q.11-.09.064.038c-.06.167-.304.305-.471.356l-.351.056a1.26 1.26 0 0 0-.9.574c-.099.154-.189.309-.339.424a2.1 2.1 0 0 1-.609.343 2.37 2.37 0 0 0 .519 2.002h3.403a3 3 0 0 1-.904.857h-6.97c-.266-.193-.51-.6-.699-.858h3.318a2.56 2.56 0 0 0 .368-2.232c-.056-.206-.128-.36-.317-.485a2.7 2.7 0 0 0-.651-.321.34.34 0 0 1-.159-.099 2.15 2.15 0 0 0-.716-.514v-.026h.009c.397.106.777.269 1.127.485.21.12.369.227.544.278q.06.02.12.043c.155-.107.172-.351.159-.497-.004-.099-.107-.197-.15-.296a.4.4 0 0 1-.03-.154c-.017-.266-.193-.716-.527-.759-.206-.025-.386-.107-.57-.038-.017.008-.039 0-.043-.017-.026-.065 0-.107.077-.112.176 0 .364-.017.523.035a1.21 1.21 0 0 1 .793.792c.034.129-.005.326.056.455q.1.208.402.325h.039c.201-.055.214-.214.313-.355.128-.176.227-.365.296-.557q.03-.09.042-.258c.022-.214.137-.587.356-.703a.08.08 0 0 0 .043-.055c0-.026-.004-.03-.026-.013"/>
    <path fill="currentColor" d="M14.297 10.29c-.064.129-.21.206-.3.321-.021.03-.085.03-.102 0-.33-.42.248-.608.587-.878.017-.017.06-.013.073.008.08.112.162.223.15.352-.022.21-.155.373-.4.48q-.128.063-.072-.034l.137-.215c.013-.025-.06-.06-.073-.034m-4.255-.339q.031.083.09.095c.034.008.013.085-.009.098q-.14.085-.236-.043c-.047-.064-.085-.223-.171-.214-.017 0-.026-.039-.013-.056.103-.197.322-.09.424.035a.1.1 0 0 1 .022.064v.03q.006.038-.013.017c-.021-.017-.06-.073-.086-.069-.008.005-.017.026-.008.043m.638.305c-.008.077.056.27-.085.197q-.11-.052-.125-.193c-.008-.116.052-.292.052-.437 0-.013.017-.022.03-.017.244.107.3.343.265.583 0 .012-.034.017-.034 0a.2.2 0 0 0-.073-.146q-.025-.02-.03.013m1.757-.296c-.012.008-.017.026-.008.034a.4.4 0 0 0 .167.099c.026.013.026.06 0 .068-.334.073-.304-.077-.523-.214-.034-.021-.026-.077.013-.086.128-.025.381-.047.463.082q.031.046-.022.034c-.025-.004-.068-.026-.09-.017m2.722.334c0-.026-.052-.008-.056.013l-.021.129c-.005.043-.052.055-.086.034-.043-.034-.163-.146-.12-.214l.197-.343.008-.013a.04.04 0 0 1 .029-.01q.008 0 .014.006c.176.12.193.304.086.48q-.045.09-.051-.013zm.741.137c.052.09.077.189.086.292q0 .027-.03.017c-.146-.056-.309-.056-.386-.214-.064-.129 0-.305-.06-.463a.063.063 0 0 1 .065-.086c.304.026.59.227.527.557q-.007.034-.026.009l-.129-.146c-.021-.021-.055.009-.042.034zm-7.783.018a.34.34 0 0 1-.068.167c-.017.021-.065.025-.086.008-.214-.171.021-.27.107-.428.013-.018.047-.022.077-.013q.266.11.146.317a.13.13 0 0 1-.064.051c-.022.009-.03.005-.035-.008l-.004-.086c0-.021-.068-.03-.073-.009m3.455.15.055.192q.02.078-.055.052c-.202-.069-.395-.069-.377-.352a.9.9 0 0 0-.043-.325.07.07 0 0 1 .015-.064.07.07 0 0 1 .062-.022c.3.06.604.24.514.596q-.011.031-.03 0a1 1 0 0 0-.073-.112q-.115-.156-.064.034zm-1.612.02.116.395a.08.08 0 0 1-.009.056q-.038.04-.077-.004a3 3 0 0 0-.158-.172.2.2 0 0 1-.048-.103l-.085-.527v-.034a.1.1 0 0 1 .008-.03l.022-.017h.021q.332.066.395.557c.02.184 0 .188-.052.021l-.043-.102c-.017-.043-.043-.065-.068-.073q-.034-.006-.022.034m-1.046.532c-.034 0-.055.018-.042.035a.52.52 0 0 1 .107.334c0 .021-.022.03-.056.021-.287-.068-.574-.214-.591-.415-.013-.167.145-.223.008-.42-.021-.03.013-.065.064-.069a.7.7 0 0 1 .335.056q.592.244.484.694c-.004.03-.021.03-.043 0a1.2 1.2 0 0 0-.201-.206.13.13 0 0 0-.069-.03zm4.672.095-.086.27a.042.042 0 0 1-.073.009.6.6 0 0 1-.085-.382c.025-.18.171-.287.214-.48.004-.026.039-.039.06-.022.236.21.227.596.043.815q-.053.075-.035-.018c.009-.05.03-.158-.008-.197-.013-.017-.026-.012-.03.005m2.717-.06a.8.8 0 0 1-.214.274c-.005 0-.013 0-.013-.013q-.026-.347.116-.527a.5.5 0 0 1 .133-.099.5.5 0 0 0 .162-.18c.009-.012.022-.008.026.013.069.425-.103.789-.321.887q-.028.012-.009-.021c.056-.094.086-.206.133-.309.009-.013-.004-.038-.013-.025m-1.8-.245a1.2 1.2 0 0 0-.184.137c-.013.013-.043.01-.047-.008-.069-.159.034-.261.214-.339a.34.34 0 0 0 .128-.085c.018-.022.065-.013.073.012.043.138.013.25-.081.335a.4.4 0 0 1-.137.09c-.043.013-.047.004-.03-.022l.077-.111c.017-.021.008-.026-.013-.009m.883.305a.3.3 0 0 1-.021.085l-.086.159q-.033.063-.077.004c-.073-.107-.043-.407.043-.497.09-.094.192-.188.23-.334.01-.034.044-.039.057-.013.154.257.081.613-.078.823-.025.034-.038.064-.077.073-.013 0 .069-.249.035-.309-.013-.017-.022-.017-.026.009m-2.876-.155-.047.172a.05.05 0 0 1-.034.03.05.05 0 0 1-.047-.009c-.163-.154.008-.325.072-.476a.09.09 0 0 1 .073-.05.09.09 0 0 1 .078.042c.05.081.115.377-.01.424q-.019.008-.02-.017l-.01-.099q0-.027-.025-.034a.02.02 0 0 0-.017 0 .03.03 0 0 0-.013.017m-4.496.202.013.004c.112.03.215.082.3.15v.017c-.163.086-.403.129-.557.005-.107-.086-.188-.155-.33-.198-.021-.004-.026-.03-.013-.043.257-.205.69-.18.896.07q.012.018-.009.012c-.021-.004-.347-.086-.3-.017m3.866.043a.35.35 0 0 1-.06.154.04.04 0 0 1-.015.012.04.04 0 0 1-.053-.012c-.103-.154-.056-.257.06-.399.021-.03.03-.072.043-.107 0-.017.017-.025.034-.017.107.043.167.116.163.236 0 .077 0 .193-.073.244-.034.022-.034-.098-.039-.111-.004-.035-.051-.035-.06 0"/>
    <path fill="currentColor" d="m9.943 11.349.116-.258a.047.047 0 0 1 .068-.02l.018.02a.9.9 0 0 1 .115.258c.03.14-.197.274-.21.41 0 .035-.021.138-.086.087-.222-.215-.257-.45-.094-.712q.102-.167.069.026-.017.09-.017.184c0 .03.008.035.021 0zm5.04.09c.021-.03-.077-.013-.094.008-.009.013-.12.129-.146.086-.111-.18.034-.257.232-.364a.1.1 0 0 0 .03-.026l.025-.043c.005-.013.026-.013.035-.004.162.128.102.291-.048.411-.064.047-.085.043-.06-.021zm-4.286.158c0-.026-.042-.021-.042 0q-.025.095-.018.197.007.043-.038.047a.07.07 0 0 1-.06-.034.56.56 0 0 1-.124-.231.06.06 0 0 1 0-.043.7.7 0 0 0 .064-.3c0-.052.068-.086.111-.043q.276.256.167.557-.046.13-.06-.004a1 1 0 0 1 0-.146m5.503.214a1.5 1.5 0 0 1-.557.03c-.021 0-.034-.021-.021-.034.111-.129.377-.291.625-.257q.35.046.703.034c.017 0 .03.009.035.017 0 .077-.043.142-.116.197-.3.215-.656.228-1.072.18-.021 0-.021-.017-.004-.017.112-.025.369-.06.429-.133.012-.017.008-.02-.022-.017m-4.063.236a.3.3 0 0 0-.094.103.05.05 0 0 1-.09-.013c-.086-.266.129-.36.27-.531q.014-.02.034 0c.168.145.065.415-.077.54q-.07.058-.043-.03l.018-.056c0-.017 0-.021-.018-.013m1.08-.039-.01-.004a.03.03 0 0 0-.033.013l-.051.137c-.013.03-.043.043-.073.03-.086-.038-.086-.154-.073-.231.018-.099.112-.142.133-.257.009-.03.043-.043.069-.035.154.069.146.258.115.386q-.019.096-.051 0a.1.1 0 0 0-.026-.039m-4.101.09.141-.368.007-.009a.03.03 0 0 1 .022-.004q.005 0 .01.004c.188.185.24.446.073.665a.9.9 0 0 0-.167.36c0 .008-.013.017-.022.008-.373-.197-.373-.715-.116-.994q.038-.039.03.013a.9.9 0 0 0 0 .325c.009.022.013.022.022 0m-.789-.188c.129-.103.275-.176.429-.219.021-.004.03 0 .03.022q-.001.243-.137.416c-.193.244-.493.17-.733.325-.009.005-.022 0-.026-.013a.746.746 0 0 1 .673-.9q.066.002.017.047c-.103.095-.214.163-.266.313-.008.018 0 .022.013.009m6.686.377c.013-.013-.03-.026-.043-.013l-.163.15-.021.013c-.026.009-.056-.004-.06-.026-.013-.043-.043-.171.017-.214l.3-.188a.05.05 0 0 1 .06 0l.013.008c.086.163.047.3-.129.403-.077.056-.098.043-.051-.021a1 1 0 0 1 .077-.112m-3.853.013.116.27c0 .013-.009.03-.021.03a.42.42 0 0 1-.31-.15.33.33 0 0 1-.06-.167.8.8 0 0 0-.106-.313.049.049 0 0 1 .051-.073c.197.043.343.129.429.257.06.09.073.227.111.339.009.013-.034.025-.038.008a.35.35 0 0 0-.155-.214q-.037-.02-.017.017zm-1.461.128c.008.013.034.01.034-.008l.043-.201c.004-.04.021-.043.043-.013.257.274 0 .373-.056.643-.004.02 0 .077.004.167.022.248-.248.342-.351.544a.042.042 0 0 1-.064.004c-.189-.236-.06-.578.137-.758.047-.043.043.073.021.098a.2.2 0 0 0-.056.159c0 .043.048.03.056 0 .026-.103.086-.142.129-.223a.04.04 0 0 0 0-.043.6.6 0 0 1-.056-.394c.009-.069.047-.116.086-.176 0-.008.008-.008.013 0l.012.026v.004q-.07.089 0 .172zm5.854.31-.36-.014c-.026 0-.043-.034-.026-.06.168-.218.382-.261.63-.146.086.04.142.03.227.03a.043.043 0 0 1 .052.044.04.04 0 0 1-.009.025c-.141.279-.488.343-.762.261l-.003-.002v-.008l.003-.002a.3.3 0 0 1 .235-.086c.026 0 .03-.043.013-.043m-1.539.09c-.034.016-.055.042-.06.068 0 .012-.03.021-.042.008-.258-.18-.03-.283.132-.428.03-.026.095-.026.12 0 .129.137.112.265-.034.385-.017.013-.051.009-.051-.008a.04.04 0 0 0-.013-.022c-.013-.012-.03-.017-.047-.004zm-3.681.025a1.2 1.2 0 0 1-.017-.386c0-.008.013-.017.021-.008.159.115.287.23.27.462-.012.129-.115.245-.038.412.008.013 0 .025-.013.03a.15.15 0 0 1-.099-.017c-.287-.155-.33-.442-.295-.755q.01-.078.034-.004l.086.257c.008.013.06.043.051.009m4.179.291c0-.073-.022-.077-.048-.017l-.102.214c-.022.043-.073.03-.082-.017-.111-.488.107-.501.27-.835.017-.035.056-.043.082-.018.081.086.072.232.072.386q0 .336-.205.484c-.043.03-.047.022-.026-.03a.4.4 0 0 0 .043-.167zm.355.129a1.1 1.1 0 0 1-.06-.335q0-.031.026-.025c.386.094.249.548.326.883.004.013-.005.03-.017.025-.3-.077-.429-.342-.437-.72q-.002-.078.03-.008l.09.197c.008.021.047.004.042-.017m-4.161 4.2A6.4 6.4 0 0 1 9 16.714h6c-.574.317-1.114.617-1.744.763-.557.129-1.2.09-1.787.081a3.7 3.7 0 0 1-.763-.085"/>
    <path fill="currentColor" d="M18.12 15.956c.202-.309.06-.716-.274-.87a.7.7 0 0 0-.866.265A5.996 5.996 0 0 1 6 12a6 6 0 1 1 11.966.643c-.099-.184-.347-.262-.562-.184-.218.085-.321.3-.227.488l.712 1.402c.051.098.15.17.265.205.12.034.253.017.36-.038l1.419-.738c.206-.107.27-.334.146-.514-.125-.171-.386-.227-.596-.12l-.313.163a7.286 7.286 0 1 0-1.05 2.649"/>

        </>
      ) : (
        <>
          
    <path fill="#FF8E3A" d="M11.768 7.868q-.024.224-.094.43c-.026.063-.043.063-.064-.01l-.077-.308a.44.44 0 0 1 0-.214c.064-.27.184-.459.244-.742.004-.034.03-.043.047-.021.159.235.171.587.12.913q-.02.134-.154.437c-.005.017-.026-.017-.022-.039a.86.86 0 0 0 .043-.45c-.017-.107-.034-.107-.043.004m1.886-.128.086.231a.04.04 0 0 1-.007.04.04.04 0 0 1-.036.016.4.4 0 0 1-.266-.154.5.5 0 0 1-.064-.193.8.8 0 0 0-.107-.274.043.043 0 0 1 .021-.056.2.2 0 0 1 .146-.004q.385.128.403.514c0 .03-.005.034-.026.008l-.116-.15c-.013-.017-.043 0-.034.022m-.934.274c-.073.107-.082.232-.163.339-.009.008-.013.004-.017 0-.279-.42.043-.527.128-.875.009-.03.043-.042.06-.025a.36.36 0 0 1 .133.223.72.72 0 0 1-.141.642q-.019.02-.018-.012l.03-.283c0-.022 0-.022-.012-.005zm-1.856.403a.9.9 0 0 1-.21.343c-.004.004-.017 0-.021-.013a.67.67 0 0 1 .012-.411c.065-.176.236-.245.322-.42.008-.018.034-.018.043 0q.075.171.043.381c-.043.257-.129.334-.245.493-.03.034-.034.03-.021-.022l.103-.334c.004-.017-.018-.043-.026-.017m3.347.214a2 2 0 0 1-.394.095c-.017 0-.026 0-.022-.013q.028-.167.228-.249c.171-.077.402-.026.6-.103.03-.013.072 0 .077.022.043.145-.142.278-.326.347-.12.047-.283.056-.429.086-.013 0-.055-.018-.043-.022q.286-.084.326-.154c.009-.013 0-.017-.017-.009m-.998.099c.081.141-.026.236-.009.368.004.04-.009.043-.043.026-.146-.094-.3-.291-.236-.471q.085-.226.06-.485c0-.017.018-.03.03-.02.322.14.527.552.335.89q-.02.028-.026-.004c-.026-.098.004-.27-.094-.321-.026-.017-.035-.009-.018.017m-1.86.206q-.027-.091-.035.004c-.008.107-.077.184-.107.291a.03.03 0 0 1-.051.017c-.095-.098-.12-.304-.078-.428a.7.7 0 0 1 .108-.172.8.8 0 0 0 .128-.278q.007-.02.026-.009c.171.142.189.305.167.523-.013.133-.086.223-.159.343a.1.1 0 0 1-.034.039c-.017.004-.017 0-.013-.013a.45.45 0 0 0 .043-.317zm-1.333-.322.111.154c.009.013 0 .04-.013.043-.107.009-.231 0-.278-.141a.8.8 0 0 0-.137-.257c-.013-.009-.005-.035.008-.039.202-.06.347.03.437.262.009.017-.004.03-.017.021a.4.4 0 0 0-.098-.073q-.052-.02-.013.026zm2.7.502-.018.124c0 .021-.05.034-.085.021-.365-.128-.082-.261-.12-.428-.005-.013.03-.026.06-.017q.398.116.308.372c0 .013-.043.013-.06 0l-.008-.008c0-.017-.073-.099-.077-.064m1.761.004a.4.4 0 0 0-.133.098.06.06 0 0 1-.081 0c-.043-.05.008-.158.056-.205.068-.073.21-.129.3-.193q.017-.014.03 0c.15.146-.052.356-.202.441a.05.05 0 0 1-.034.005c-.013 0-.017-.009-.009-.018l.095-.11c.008-.014-.009-.027-.022-.018m-5.083-.082.215.13c.042.02.03.072-.022.085a.57.57 0 0 1-.42-.056c-.12-.073-.21-.214-.373-.309-.021-.017-.013-.042.017-.05.33-.074.72.016.87.24q.033.043-.025.016L9.445 9c-.03-.017-.081.021-.047.038m4.376.412c.013-.06 0-.064-.03-.009-.064.107-.154.172-.244.275q-.044.051-.069-.013c-.158-.497.317-.527.497-.802.026-.043.086-.03.099.017.077.33 0 .618-.292.81q-.167.104-.051-.05a.5.5 0 0 0 .086-.228zm1.183.124c0-.008-.013-.021-.022-.013l-.18.129c-.013.013-.034.008-.038-.004a.215.215 0 0 1 .064-.24.4.4 0 0 1 .129-.065.7.7 0 0 0 .18-.107c.008-.008.025-.008.03 0 .128.18-.073.377-.275.45 0 0-.008-.004-.004-.008l.112-.142zm-4.517-.12q-.018.02.008.009c.232-.065.214-.022.403.008.043.009.077.013.09.009q.194-.019.073.086c-.343.3-.832.085-1.277.077-.026 0-.043-.022-.043-.039.159-.364.806-.381 1.251-.291.03.004.043.055.005.051-.172-.017-.403-.013-.515.086zm1.851.056.009.008a.3.3 0 0 1 .111.116c.017.026.009.073-.017.077-.206.06-.274-.133-.412-.313a.03.03 0 0 1 0-.042c.086-.176.343-.048.43.06.03.042.02.064-.022.06a.2.2 0 0 1-.082-.039c-.017-.009-.021.051-.017.073m-3.227.716H9.06v.004a.86.86 0 0 1 .013.394l-.009.009h-.026c-.12-.077-.27-.21-.253-.39.022-.172.06-.313.022-.485v-.012q.001-.013.008-.013l.009-.009h.013c.257.077.407.304.403.609l-.005.214c-.004.009-.008.009-.012.009H9.2v-.009a.6.6 0 0 0-.051-.206c-.017-.042-.056-.064-.077-.107 0-.004 0-.008-.009-.008m2.541-.498c-.043.026-.038.043.005.052a.4.4 0 0 1 .137.068.06.06 0 0 1-.026.103c-.206.035-.266-.064-.394-.188a.1.1 0 0 0-.039-.026l-.064-.026c-.021-.008-.021-.021-.009-.034.125-.133.352-.086.493 0 .009 0 .013.009.017.013l.009.026v.017q0 .03-.026.017-.064-.04-.103-.017zm1.505.622a.1.1 0 0 0-.039.047.04.04 0 0 1-.026.026.4.4 0 0 0-.15.09c-.017.017-.047.004-.051-.017-.047-.455.27-.335.429-.63.008-.013.012-.013.021 0 .103.188.086.355-.047.514-.06.068-.189.124-.214.231-.022.129-.026.266-.056.395q-.047.211-.047.428c0 .296-.365.759-.553.999a.45.45 0 0 0-.082.343c.013.081.056.12.137.111.408-.026.592-.291.763-.6.103-.184.557-.351.772-.399.021-.004.034-.034.017-.05l-.047-.052c-.086-.095.017-.33.004-.446 0-.017.017-.026.034-.021q.303.135.27.45c0 .025-.03.03-.055.03q-.05.001-.043-.043a.1.1 0 0 0-.017-.065q-.019-.031-.018 0l.018.129q0 .013.025.021a1.03 1.03 0 0 0 .815-.205q.108-.09.064.038c-.06.167-.304.305-.472.356l-.35.056a1.26 1.26 0 0 0-.9.574c-.1.154-.19.309-.34.424a2.1 2.1 0 0 1-.608.343 2.37 2.37 0 0 0 .518 2.002h3.403a3 3 0 0 1-.904.857H8.413c-.266-.193-.51-.6-.699-.858h3.317a2.55 2.55 0 0 0 .369-2.232c-.056-.206-.129-.36-.318-.485a2.7 2.7 0 0 0-.65-.321.34.34 0 0 1-.16-.099 2.15 2.15 0 0 0-.715-.514v-.026h.008a4.2 4.2 0 0 1 1.128.485c.21.12.368.227.544.278q.06.02.12.043c.154-.107.171-.351.158-.497-.004-.099-.107-.197-.15-.296a.4.4 0 0 1-.03-.154c-.017-.266-.193-.716-.527-.759-.206-.025-.386-.107-.57-.038-.017.008-.038 0-.043-.017-.025-.065 0-.107.078-.112.175 0 .364-.017.522.035a1.21 1.21 0 0 1 .793.792c.035.129-.004.326.056.455q.102.208.403.325h.038c.202-.055.215-.214.313-.355.129-.176.227-.365.296-.557q.03-.09.043-.258c.021-.214.137-.587.355-.703a.08.08 0 0 0 .043-.055c0-.026-.004-.03-.025-.013"/>
    <path fill="#FF8E3A" d="M14.297 10.29c-.065.129-.21.206-.3.321-.022.03-.086.03-.103 0-.33-.42.248-.608.587-.878.017-.017.06-.013.073.008.081.112.163.223.15.352-.022.21-.154.373-.399.48q-.129.063-.072-.034l.137-.215c.013-.025-.06-.06-.073-.034m-4.257-.34q.032.083.09.095c.034.008.013.085-.008.098q-.141.085-.236-.043c-.047-.064-.086-.223-.172-.214-.017 0-.025-.039-.012-.056.102-.197.321-.09.424.035a.1.1 0 0 1 .021.064v.03q.007.038-.013.017c-.021-.017-.06-.073-.085-.069-.009.005-.018.026-.009.043m.639.305c-.009.077.055.27-.086.197q-.11-.052-.124-.193c-.009-.116.051-.292.051-.437 0-.013.017-.022.03-.017.244.107.3.343.266.583 0 .012-.034.017-.034 0a.2.2 0 0 0-.073-.146q-.025-.02-.03.013m1.757-.296c-.013.008-.017.026-.009.034a.37.37 0 0 0 .167.099c.026.013.026.06 0 .068-.334.073-.304-.077-.523-.214-.034-.021-.025-.077.013-.086.129-.025.382-.047.463.082q.031.046-.021.034c-.026-.004-.069-.026-.09-.017m2.721.334c0-.026-.051-.008-.056.013l-.02.129c-.005.043-.052.055-.087.034-.042-.034-.162-.146-.12-.214l.197-.343.009-.013a.04.04 0 0 1 .029-.01q.008 0 .014.006c.176.12.193.304.086.48q-.045.09-.052-.013zm.742.137q.075.136.085.292.002.027-.03.017c-.145-.056-.308-.056-.385-.214-.065-.129 0-.305-.06-.463a.063.063 0 0 1 .064-.086c.304.026.591.227.527.557q-.006.034-.026.009l-.128-.146c-.022-.021-.056.009-.043.034zm-7.783.018a.34.34 0 0 1-.069.167c-.017.021-.064.025-.085.008-.215-.171.021-.27.107-.428.013-.018.047-.022.077-.013q.266.11.146.317a.13.13 0 0 1-.065.051q-.03.013-.034-.008l-.004-.086c0-.021-.069-.03-.073-.009m3.454.15.056.192q.02.078-.056.052c-.201-.069-.394-.069-.377-.352a.9.9 0 0 0-.043-.325.07.07 0 0 1 .043-.083.1.1 0 0 1 .034-.003c.3.06.604.24.515.596q-.013.031-.03 0a1 1 0 0 0-.073-.112q-.117-.156-.065.034zm-1.611.02.115.395a.08.08 0 0 1-.008.056q-.04.04-.077-.004a3 3 0 0 0-.159-.172.2.2 0 0 1-.047-.103l-.086-.527v-.034a.1.1 0 0 1 .009-.03l.021-.017h.022c.223.043.351.231.394.557.021.184 0 .188-.052.021l-.042-.102q-.029-.063-.069-.073-.033-.006-.021.034m-1.046.532c-.034 0-.056.018-.043.035a.52.52 0 0 1 .107.334c0 .021-.021.03-.055.021-.288-.068-.575-.214-.592-.415-.013-.167.146-.223.009-.42-.022-.03.013-.065.064-.069a.7.7 0 0 1 .334.056q.593.244.485.694-.01.045-.043 0a1.2 1.2 0 0 0-.202-.206.13.13 0 0 0-.068-.03zm4.671.095-.085.27a.042.042 0 0 1-.073.009.6.6 0 0 1-.086-.382c.026-.18.172-.287.214-.48.005-.026.039-.039.06-.022.236.21.227.596.043.815q-.052.075-.034-.018c.008-.05.03-.158-.009-.197-.013-.017-.025-.012-.03.005m2.717-.06a.8.8 0 0 1-.214.274c-.004 0-.013 0-.013-.013q-.025-.347.116-.527a.5.5 0 0 1 .133-.099.5.5 0 0 0 .163-.18c.008-.012.021-.008.026.013.068.425-.103.789-.322.887q-.026.012-.008-.021c.055-.094.085-.206.132-.309.009-.013-.004-.038-.013-.025m-1.8-.245a1.2 1.2 0 0 0-.184.137c-.013.013-.043.01-.047-.008-.069-.159.034-.261.214-.339a.34.34 0 0 0 .129-.085c.017-.022.064-.013.073.012q.063.207-.082.335a.4.4 0 0 1-.137.09c-.043.013-.047.004-.03-.022l.077-.111c.018-.021.009-.026-.013-.009m.883.305c-.004.03-.008.064-.021.085l-.086.159q-.032.063-.077.004c-.073-.107-.043-.407.043-.497.09-.094.193-.188.231-.334.009-.034.043-.039.056-.013.154.257.082.613-.077.823-.026.034-.039.064-.077.073-.013 0 .068-.249.034-.309-.013-.017-.021-.017-.026.009m-2.875-.155-.047.172a.05.05 0 0 1-.035.03.05.05 0 0 1-.047-.009c-.163-.154.009-.325.073-.476a.09.09 0 0 1 .073-.05.09.09 0 0 1 .077.042c.051.081.116.377-.009.424q-.02.008-.021-.017l-.009-.099q0-.027-.025-.034a.02.02 0 0 0-.017 0l-.009.007zm-4.496.202.013.004c.111.03.214.082.3.15v.017c-.163.086-.403.129-.557.005-.107-.086-.189-.155-.33-.198-.022-.004-.026-.03-.013-.043.257-.205.69-.18.896.07q.011.018-.009.012c-.021-.004-.347-.086-.3-.017m3.866.043a.35.35 0 0 1-.06.154.043.043 0 0 1-.069 0c-.103-.154-.056-.257.06-.399.021-.03.03-.072.043-.107 0-.017.017-.025.034-.017.107.043.167.116.163.236 0 .077 0 .193-.073.244-.034.022-.034-.098-.038-.111-.005-.035-.052-.035-.06 0"/>
    <path fill="#FF8E3A" d="m9.943 11.349.115-.258a.05.05 0 0 1 .043-.027.05.05 0 0 1 .043.027.9.9 0 0 1 .116.258c.03.14-.197.274-.21.41 0 .035-.022.138-.086.087q-.337-.32-.094-.712.101-.167.068.026-.015.09-.017.184c0 .03.009.035.022 0zm5.04.09c.021-.03-.078-.013-.095.008-.008.013-.12.129-.146.086-.11-.18.035-.257.232-.364a.1.1 0 0 0 .03-.026l.026-.043c.004-.013.025-.013.034-.004.163.128.103.291-.047.411-.064.047-.086.043-.06-.021zm-4.286.158c0-.026-.043-.021-.043 0q-.024.095-.017.197.006.043-.039.047a.07.07 0 0 1-.06-.034.56.56 0 0 1-.124-.231.06.06 0 0 1 0-.043.7.7 0 0 0 .064-.3c0-.052.069-.086.112-.043q.276.256.167.557-.046.13-.06-.004a1 1 0 0 1 0-.146m5.503.214a1.5 1.5 0 0 1-.557.03c-.022 0-.035-.021-.022-.034.111-.129.377-.291.626-.257q.348.046.703.034c.017 0 .03.009.034.017 0 .077-.043.142-.116.197-.3.215-.655.228-1.071.18-.022 0-.022-.017-.005-.017.112-.025.37-.06.43-.133.012-.017.008-.02-.022-.017m-4.063.236a.3.3 0 0 0-.095.103.05.05 0 0 1-.09-.013c-.085-.266.13-.36.27-.531q.015-.02.035 0c.167.145.064.415-.077.54q-.07.058-.043-.03l.017-.056c0-.017 0-.021-.017-.013m1.08-.039-.011-.004a.03.03 0 0 0-.032.013l-.051.137c-.013.03-.043.043-.073.03-.086-.038-.086-.154-.073-.231.017-.099.111-.142.133-.257.008-.03.043-.043.068-.035.154.069.146.258.116.386q-.02.096-.052 0a.1.1 0 0 0-.025-.039m-4.102.09.142-.368.007-.009a.03.03 0 0 1 .021-.004q.006 0 .01.004c.189.185.24.446.073.665a.9.9 0 0 0-.167.36c0 .008-.013.017-.021.008-.373-.197-.373-.715-.116-.994q.037-.039.03.013a.9.9 0 0 0 0 .325c.009.022.013.022.021 0m-.788-.188c.128-.103.274-.176.428-.219.022-.004.03 0 .03.022q-.001.243-.137.416c-.193.244-.493.17-.733.325-.008.005-.021 0-.025-.013a.746.746 0 0 1 .673-.9c.042 0 .051.018.017.047-.103.095-.215.163-.266.313-.009.018 0 .022.013.009m6.685.377c.013-.013-.03-.026-.042-.013l-.163.15-.022.013c-.025.009-.055-.004-.06-.026-.012-.043-.043-.171.018-.214l.3-.188a.05.05 0 0 1 .06 0l.012.008c.086.163.047.3-.128.403-.077.056-.099.043-.052-.021a1 1 0 0 1 .077-.112m-3.852.013.115.27c0 .013-.008.03-.021.03a.42.42 0 0 1-.309-.15.33.33 0 0 1-.06-.167.8.8 0 0 0-.107-.313.049.049 0 0 1 .052-.073q.297.065.428.257c.06.09.073.227.112.339.008.013-.035.025-.039.008a.35.35 0 0 0-.154-.214q-.038-.02-.017.017zm-1.462.128c.009.013.035.01.035-.008l.042-.201q.01-.059.043-.013c.257.274 0 .373-.055.643-.005.02 0 .077.004.167.021.248-.249.342-.352.544l-.013.012a.04.04 0 0 1-.05-.008c-.19-.236-.06-.578.136-.758.047-.043.043.073.022.098a.2.2 0 0 0-.056.159c0 .043.047.03.056 0 .025-.103.085-.142.128-.223a.04.04 0 0 0 0-.043.6.6 0 0 1-.055-.394c.008-.069.047-.116.085-.176 0-.008.009-.008.013 0l.013.026v.004q-.07.089 0 .172zm5.855.31-.36-.014c-.026 0-.043-.034-.026-.06.167-.218.381-.261.63-.146.085.04.141.03.227.03a.043.043 0 0 1 .043.069c-.142.279-.489.343-.763.261l-.002-.002v-.008l.002-.002a.3.3 0 0 1 .236-.086c.025 0 .03-.043.013-.043m-1.539.09c-.034.016-.056.042-.06.068 0 .012-.03.021-.043.008-.257-.18-.03-.283.133-.428.03-.026.094-.026.12 0 .129.137.111.265-.034.385-.018.013-.052.009-.052-.008a.04.04 0 0 0-.013-.022c-.012-.012-.03-.017-.047-.004zm-3.681.025a1.2 1.2 0 0 1-.018-.386c0-.008.013-.017.022-.008.158.115.287.23.27.462-.013.129-.116.245-.039.412.009.013 0 .025-.013.03a.15.15 0 0 1-.098-.017c-.287-.155-.33-.442-.296-.755.009-.051.017-.055.034-.004l.086.257c.009.013.06.043.051.009m4.178.291c0-.073-.021-.077-.047-.017l-.103.214c-.021.043-.073.03-.081-.017-.112-.488.107-.501.27-.835.017-.035.055-.043.081-.018.082.086.073.232.073.386q0 .336-.206.484c-.043.03-.047.022-.025-.03a.4.4 0 0 0 .042-.167zm.356.129a1.1 1.1 0 0 1-.06-.335q0-.031.025-.025c.386.094.25.548.326.883.005.013-.004.03-.017.025-.3-.077-.428-.342-.437-.72q-.002-.078.03-.008l.09.197c.008.021.047.004.043-.017m-4.162 4.2A6.4 6.4 0 0 1 9 16.714h6c-.575.317-1.115.617-1.745.763-.557.129-1.2.09-1.787.081a3.7 3.7 0 0 1-.763-.085"/>
    <path fill="#FF8E3A" d="M18.12 15.956c.201-.309.06-.716-.275-.87a.7.7 0 0 0-.865.265A5.996 5.996 0 0 1 6 12a6 6 0 1 1 11.965.643c-.098-.184-.347-.262-.561-.184-.219.085-.322.3-.227.488l.711 1.402c.052.098.15.17.266.205.12.034.253.017.36-.038l1.419-.738c.205-.107.27-.334.145-.514-.124-.171-.386-.227-.595-.12l-.313.163a7.286 7.286 0 1 0-1.05 2.649"/>

        </>
      )}
    </BaseIcon>
));

IconCby.displayName = 'Cby';

export default IconCby;
