
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSavg = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M13.877 5.156a5 5 0 0 0-.57.111l-.253.052q-.398.088-.801.154a2 2 0 0 1-.339.043 2 2 0 0 0-.6.141q-.376.136-.775.163a.3.3 0 0 0-.125.026 1 1 0 0 1-.145.047q-.301.072-.583.201a4 4 0 0 0-.639.322 2 2 0 0 0-.347.274c-.051.043-.099.086-.154.12q-.42.265-.793.591c-.086.086-.172.18-.206.206-.051.052-.12.163-.223.364a2 2 0 0 1-.098.172c-.047.064-.052.073-.026.12a.5.5 0 0 1 .021.184c0 .274.022.532.043.583.026.064.077.09.21.103.159.017.227.056.227.124 0 .026.022.06.069.112.086.094.09.098.12.09a.15.15 0 0 1 .069.012c.042.018.06.056.064.129.004.099.004.099.047.116l.107.021c.099.013.15.03.189.069.025.03.055.043.12.051.09.017.137.034.248.112.095.064.116.094.116.171 0 .056.009.073.043.116.043.06.064.064.137.034.056-.026.18-.03.219-.009a.3.3 0 0 1 .068.099.6.6 0 0 0 .082.124.8.8 0 0 0 .231.15l.146.043c.077.017.107.022.12.009.017-.018.317-.018.398 0q.182.095.386.12c.133.025.274.06.304.077.056.021.309.107.455.15a.6.6 0 0 0 .158.021c.06 0 .103.009.15.034l.172.06.154.043a.5.5 0 0 0 .116.03.4.4 0 0 1 .111.03l.116.047.137.056a1 1 0 0 0 .154.056q.201.053.394.129.243.07.476.171c.202.098.377.176.386.176q.186.08.347.201c.184.142.253.223.304.343.013.026.03.039.065.043.085.017.094.021.158.12.099.154.094.291-.013.471-.12.202-.253.3-.737.545a1 1 0 0 0-.154.094.4.4 0 0 1-.086.06q-.198.097-.394.197l-.094.043-.108.051-.711.287-.206.082c-.081.03-.175.064-.214.073a.3.3 0 0 0-.111.051.6.6 0 0 1-.15.069l-.232.077-.283.09q-.318.09-.634.193l-.686.214c-.265.086-.428.141-1.097.386q-.71.255-1.363.634a3.3 3.3 0 0 0-1.011.814c-.12.112-.244.266-.244.3 0 .022-.035.077-.086.137a.2.2 0 0 0-.043.069 2.4 2.4 0 0 0-.176.343c-.008.03-.004.038.03.055.043.026.043.043.022.1-.009.02.055.05.12.05.055 0 .077.03.073.116 0 .035 0 .073.008.077.026.013.013.043-.03.073a.13.13 0 0 0-.056.077l-.017.056.065-.009c.072-.008.102.013.102.086l.005.112v.064l.068.009q.098.011.292-.086a.3.3 0 0 1 .137-.026c.086 0 .094 0 .167-.06a.4.4 0 0 0 .077-.064c0-.017.094-.056.129-.056q.051-.002 0 .047l-.026.03.043.022c.03.012.064.021.077.017h.047c.026.021.009.06-.077.171-.103.137-.086.137.086.005.073-.056.15-.095.15-.069a.1.1 0 0 1-.022.034c-.025.035-.025.047 0 .047.013 0 .026-.012.035-.025.017-.035.085-.065.141-.065.034 0 .043 0 .034.026-.013.03-.013.03.073-.009.069-.03.206-.12.262-.17a.3.3 0 0 1 .077-.044q.128-.045.248-.107c.026 0 .005.043-.03.064-.03.022-.034.035-.025.047.012.018.025.013.085-.017.116-.06.172-.064.112-.008q-.026.022-.026.043a.4.4 0 0 1-.103.115l-.094.103c.008.009.12-.043.146-.064q.217-.152.458-.262c.137-.05.253-.107.3-.15.026-.03.052-.038.112-.042q.075-.001.068-.022c0-.008 0-.021.013-.03.043-.03.309-.107.386-.107.025 0 .025 0 .017.021q-.026.044.026.043c.03 0 .03.017 0 .043-.03.03-.206.112-.262.125a.5.5 0 0 0-.184.085c0 .017.086 0 .176-.034.15-.056.372-.116.385-.107.009.013-.017.034-.06.056-.06.03-.06.051.009.051q.088-.001.008.056c-.034.025-.034.03-.017.03.06 0 .189-.039.223-.065a.4.4 0 0 1 .112-.047c.085-.025.184-.077.184-.094 0-.009-.034-.013-.077-.017a.3.3 0 0 1-.086-.017.3.3 0 0 0-.103 0c-.064 0-.086 0-.086-.009 0-.026.078-.056.163-.06q.078-.002.073-.017c-.008-.021.129-.069.24-.086q.096-.007.129-.034c.03-.034.107-.056.184-.056q.051 0 .077-.026c.034-.038.112-.068.214-.085l.172-.043a.7.7 0 0 1 .137-.043c.081-.021.069-.043-.021-.043-.043.009-.073 0-.078-.008-.004-.013.056-.039.202-.086a.4.4 0 0 0 .111-.043l.099-.043a.3.3 0 0 0 .081-.03.9.9 0 0 1 .322-.077.6.6 0 0 0 .15-.017l.193-.021c.081-.009.15-.022.158-.026a.07.07 0 0 1 .043-.017q.027 0-.017-.013a.13.13 0 0 0-.06-.005c-.03 0-.056 0-.086-.008l-.107-.021c-.03 0-.051-.013-.051-.018 0-.017.15-.06.235-.072l.189-.052a1 1 0 0 1 .154-.047q.234-.111.489-.15a1 1 0 0 0 .171-.043c.043-.034.12-.06.386-.124q.296-.098.608-.129a.3.3 0 0 1 .108-.008c.042.008.06-.009.03-.03-.03-.017.012-.052.154-.12.176-.086.266-.112.373-.112a.5.5 0 0 0 .128-.013q.293-.097.566-.24a.3.3 0 0 0 .081-.043 4 4 0 0 0 .318-.244.4.4 0 0 0 .094-.056c.06-.042.086-.064.09-.094.017-.073.163-.154.291-.154.065 0 .095-.004.12-.026l.03-.025h-.094c-.073.004-.099 0-.103-.013-.008-.022.103-.129.159-.15q.044-.022.043-.043c0-.017.017-.043.03-.052l.068-.068a.3.3 0 0 1 .073-.052c.03-.008.034-.03.009-.042-.03-.009-.026-.039.004-.06a.1.1 0 0 0 .034-.056.4.4 0 0 1 .034-.077c.026-.052.043-.15.022-.18-.017-.03 0-.112.03-.138l.06-.042c.098-.06.137-.09.158-.138a.2.2 0 0 0 .026-.072q.034-.08.064-.159c.039-.073.133-.197.172-.214.026-.013.034-.013.043 0 .013.017.004.098-.013.154q-.005.033.008.021c.009 0 .013-.02.013-.034 0-.017.017-.043.043-.064q.051-.05.052-.197c-.009-.214 0-.266.03-.326.042-.077.042-.086 0-.129-.026-.03-.03-.042-.018-.064.022-.047 0-.085-.042-.081-.06.013-.086-.013-.108-.107l-.025-.086.034-.043c.039-.043.043-.051.034-.098 0-.018.017-.056.039-.086a.16.16 0 0 0 .034-.129.2.2 0 0 0-.021-.094.15.15 0 0 1-.026-.073.2.2 0 0 0-.03-.09.2.2 0 0 1-.034-.077.4.4 0 0 0-.065-.142l-.025-.064a.4.4 0 0 0-.06-.094l-.155-.206a3.4 3.4 0 0 0-.784-.771c-.026-.043-.146-.133-.253-.193a2 2 0 0 1-.184-.129 3 3 0 0 0-.321-.214l-.172-.107-.313-.184a18 18 0 0 0-1.783-.917 6 6 0 0 0-.968-.3q-.285-.056-.566-.129c-.184-.034-.287-.081-.287-.137 0-.013.017-.03.039-.043l.042-.026-.042-.043c-.022-.021-.043-.051-.043-.06 0-.038.073-.085.244-.18q.265-.13.519-.287l.214-.128q.186-.118.386-.215.098-.044.184-.094a.6.6 0 0 1 .171-.073c.086 0 .155-.038.463-.244.197-.129.236-.15.373-.197.154-.056.189-.073.274-.129.03-.025.163-.103.296-.171l.3-.172c.086-.072.171-.192.27-.394l.094-.146a.6.6 0 0 0 .082-.145c.017-.043.043-.112.068-.146.047-.086.043-.129-.017-.296-.06-.154-.094-.193-.184-.218-.107-.03-.129-.043-.146-.086l-.03-.043c-.111.056-.163.064-.317.043a1 1 0 0 0-.189-.009.36.36 0 0 1-.188-.03q-.404-.061-.81-.025zm-4.183 5.258a.5.5 0 0 0 .103.047c.086.03.116.06.06.06a.24.24 0 0 1-.098-.043.5.5 0 0 0-.125-.055c-.034-.009-.064-.022-.068-.03-.005-.026.085-.009.128.021m.995.802c-.043.008-.039.085.012.107.069.034.292.056.429.047l.129-.009-.086-.03a.5.5 0 0 1-.124-.064.2.2 0 0 0-.069-.043 2 2 0 0 0-.291-.008m6.437.595c.043.022.064.056.111.193a.3.3 0 0 0 .043.095c.09.055.129.137.124.257-.008.094-.038.103-.12.025a1 1 0 0 0-.098-.081.2.2 0 0 1-.047-.052c-.026-.038-.06-.072-.09-.107a.6.6 0 0 1-.086-.107.5.5 0 0 0-.026-.086c-.03-.077-.034-.137-.013-.158.043-.03.125-.021.202.021m.257.797c0 .03-.043.043-.069.03-.021-.017-.021-.072 0-.085s.065.025.065.055zm.57.292c-.026.026-.017.06.013.056.03-.009.043-.026.03-.052q-.012-.037-.043-.004m-.257.261c.017.018 0 .099-.026.12-.03.026-.069 0-.086-.051-.013-.052 0-.077.026-.086s.069 0 .086.017m-.257.043c.038.043.034.043.012.103-.017.056-.042.094-.064.086-.017 0-.06-.129-.06-.167 0-.073.056-.086.107-.026zm-.146.343-.009.086c0 .034-.013.051-.03.064-.047.03-.06.013-.051-.064.013-.082.043-.129.073-.129.025 0 .025.005.017.043m-.142 1.676a.15.15 0 0 0-.051.055l-.051.086-.026.047.043-.025a.4.4 0 0 0 .085-.095c.06-.085.06-.098 0-.068m-2.507.998c0 .017-.043.026-.077.022q-.027-.008-.021-.022c.013-.012.098-.012.098 0m-.248.163c-.013.035-.146.069-.257.069-.116 0-.15-.013-.086-.043.09-.039.351-.056.343-.026m-.579.039c-.008.017-.086.03-.128.021l-.026-.004.03-.013c.043-.021.137-.021.128-.004zm-.908.068c-.005.022-.069.035-.103.026-.026-.008-.026-.008 0-.026.025-.021.111-.021.103 0m.437-.008c.025.004.047.017.047.026s.013.017.026.021l-.086.013a.3.3 0 0 1-.137 0 .2.2 0 0 0-.086-.009c-.069.009-.12-.017-.103-.043.013-.017.253-.021.339-.008m.66.013c-.017.021-.09.025-.09.008s.03-.026.077-.03c.026 0 .026 0 .013.022m-.142.004c0 .034-.201.06-.308.043l-.065-.013.078-.009.128-.021c.06-.013.167-.013.167 0m-.99.12c.103 0-.355.171-.535.206q-.18.02-.36 0c-.035-.009-.035-.009-.013-.026a.3.3 0 0 1 .09-.034l.214-.047c.377-.086.484-.112.523-.103zm.099.167-.077.026c-.125.034-.257.017-.155-.017.035-.017.245-.022.232-.009m-1.11.017c0 .009-.017.013-.026.013q-.02 0-.013-.013.009-.012.03-.013.014 0 .009.013m-.377.146a.6.6 0 0 1-.206.064c-.056 0-.034-.017.056-.051.077-.026.171-.035.15-.013m.188.026c-.043.034-.553.193-.578.18-.026-.009.137-.073.265-.107.073-.018.146-.043.172-.052a.4.4 0 0 1 .154-.043q.02-.002-.013.022m.755-.013c0 .021-.048.055-.112.073a.2.2 0 0 0-.086.047.8.8 0 0 1-.162.086c-.146.06-.159.06-.343.072-.197.013-.257.005-.257-.034q0-.02.034-.034a4.3 4.3 0 0 1 .703-.21c.103-.013.223-.017.223 0m-1.488.548a.12.12 0 0 1-.068.022c-.034 0-.039 0-.013-.022a.13.13 0 0 1 .064-.021c.043 0 .043 0 .017.021"/>

        </>
      ) : (
        <>
          
    <path fill="url(#SAVG__a)" d="M13.877 5.156a5 5 0 0 0-.57.111l-.253.052q-.399.088-.802.154a2 2 0 0 1-.338.043 2 2 0 0 0-.6.141q-.377.136-.776.163a.3.3 0 0 0-.124.026 1 1 0 0 1-.146.047q-.301.072-.583.201a4 4 0 0 0-.638.322 2 2 0 0 0-.347.274c-.052.043-.1.086-.155.12q-.419.265-.793.591c-.085.086-.171.18-.205.206-.052.052-.12.163-.223.364-.03.06-.073.138-.099.172-.047.064-.051.073-.025.12a.5.5 0 0 1 .02.184c0 .274.022.532.044.583.026.064.077.09.21.103.158.017.227.056.227.124 0 .026.021.06.069.112.085.094.09.098.12.09.02 0 .042 0 .068.012.043.018.06.056.064.129.005.099.005.099.048.116l.107.021c.098.013.15.03.188.069.026.03.056.043.12.051.09.017.137.034.249.112.094.064.116.094.116.171 0 .056.008.073.042.116.043.06.065.064.138.034.055-.026.18-.03.218-.009a.3.3 0 0 1 .069.099.6.6 0 0 0 .081.124.8.8 0 0 0 .232.15l.145.043c.077.017.107.022.12.009.017-.018.317-.018.399 0q.181.095.386.12c.132.025.274.06.304.077.056.021.308.107.454.15a.6.6 0 0 0 .159.021c.06 0 .103.009.15.034l.171.06.154.043a.5.5 0 0 0 .116.03.4.4 0 0 1 .111.03l.116.047.137.056a1 1 0 0 0 .155.056q.2.053.394.129.242.07.476.171c.201.098.377.176.385.176q.186.08.348.201c.184.142.252.223.304.343.013.026.03.039.064.043.086.017.094.021.159.12.098.154.094.291-.013.471-.12.202-.253.3-.737.545a1 1 0 0 0-.155.094.4.4 0 0 1-.085.06q-.198.097-.395.197l-.094.043-.107.051-.711.287-.206.082a3 3 0 0 1-.214.073.3.3 0 0 0-.112.051.6.6 0 0 1-.15.069l-.231.077-.283.09q-.32.09-.634.193l-.686.214c-.266.086-.429.141-1.097.386q-.711.255-1.363.634a3.3 3.3 0 0 0-1.012.814c-.12.112-.244.266-.244.3 0 .022-.034.077-.086.137a.2.2 0 0 0-.042.069 2.4 2.4 0 0 0-.176.343c-.009.03-.004.038.03.055.043.026.043.043.021.1-.008.02.056.05.12.05.056 0 .077.03.073.116 0 .035 0 .073.009.077.025.013.013.043-.03.073a.13.13 0 0 0-.056.077l-.017.056.064-.009c.073-.008.103.013.103.086l.004.112v.064l.069.009q.098.011.291-.086a.3.3 0 0 1 .137-.026c.086 0 .095 0 .168-.06a.4.4 0 0 0 .077-.064c0-.017.094-.056.128-.056q.053-.002 0 .047l-.025.03.042.022c.03.012.065.021.078.017h.047c.025.021.008.06-.077.171-.103.137-.086.137.085.005.073-.056.15-.095.15-.069a.1.1 0 0 1-.021.034c-.026.035-.026.047 0 .047.013 0 .026-.012.034-.025.017-.035.086-.065.142-.065.034 0 .042 0 .034.026-.013.03-.013.03.073-.009.068-.03.205-.12.261-.17a.3.3 0 0 1 .077-.044 2 2 0 0 0 .249-.107c.026 0 .004.043-.03.064-.03.022-.034.035-.026.047.013.018.026.013.086-.017.116-.06.171-.064.111-.008q-.025.022-.025.043a.4.4 0 0 1-.103.115l-.095.103c.009.009.12-.043.146-.064q.217-.152.459-.262c.137-.05.253-.107.3-.15.025-.03.051-.038.111-.042q.077-.001.069-.022c0-.008 0-.021.013-.03.042-.03.308-.107.385-.107.026 0 .026 0 .017.021q-.025.044.026.043c.03 0 .03.017 0 .043-.03.03-.206.112-.261.125a.5.5 0 0 0-.185.085c0 .017.086 0 .176-.034.15-.056.373-.116.386-.107.008.013-.017.034-.06.056-.06.03-.06.051.008.051.06 0 .06.017.009.056-.034.025-.034.03-.017.03.06 0 .188-.039.223-.065a.4.4 0 0 1 .111-.047c.086-.025.184-.077.184-.094 0-.009-.034-.013-.077-.017a.3.3 0 0 1-.085-.017.3.3 0 0 0-.103 0c-.065 0-.086 0-.086-.009 0-.026.077-.056.163-.06q.078-.002.073-.017c-.009-.021.128-.069.24-.086q.096-.007.128-.034c.03-.034.107-.056.184-.056q.052 0 .078-.026c.034-.038.111-.068.214-.085l.171-.043a.7.7 0 0 1 .137-.043c.082-.021.07-.043-.02-.043-.044.009-.074 0-.078-.008-.004-.013.056-.039.201-.086a.4.4 0 0 0 .112-.043l.098-.043a.3.3 0 0 0 .082-.03.9.9 0 0 1 .321-.077.6.6 0 0 0 .15-.017l.193-.021a1 1 0 0 0 .159-.026.07.07 0 0 1 .042-.017q.027 0-.017-.013a.13.13 0 0 0-.06-.005c-.03 0-.055 0-.085-.008l-.107-.021c-.03 0-.052-.013-.052-.018 0-.017.15-.06.236-.072l.188-.052a1 1 0 0 1 .155-.047q.233-.111.488-.15a1 1 0 0 0 .172-.043c.043-.034.12-.06.385-.124q.298-.098.609-.129a.3.3 0 0 1 .107-.008c.043.008.06-.009.03-.03-.03-.017.013-.052.154-.12.176-.086.266-.112.373-.112a.5.5 0 0 0 .129-.013q.291-.097.566-.24a.3.3 0 0 0 .08-.043 4 4 0 0 0 .318-.244.4.4 0 0 0 .094-.056c.06-.042.086-.064.09-.094.017-.073.163-.154.292-.154.064 0 .094-.004.12-.026l.03-.025h-.095c-.072.004-.098 0-.102-.013-.009-.022.102-.129.158-.15q.044-.022.043-.043c0-.017.017-.043.03-.052l.069-.068a.3.3 0 0 1 .073-.052c.03-.008.034-.03.008-.042-.03-.009-.026-.039.004-.06a.1.1 0 0 0 .035-.056.4.4 0 0 1 .034-.077c.026-.052.043-.15.021-.18-.017-.03 0-.112.03-.138l.06-.042c.099-.06.137-.09.159-.138a.2.2 0 0 0 .026-.072q.034-.08.064-.159c.038-.073.133-.197.171-.214.026-.013.035-.013.043 0 .013.017.005.098-.013.154q-.005.033.009.021c.009 0 .013-.02.013-.034 0-.017.017-.043.043-.064q.051-.05.051-.197c-.009-.214 0-.266.03-.326.043-.077.043-.086 0-.129-.026-.03-.03-.042-.017-.064.021-.047 0-.085-.043-.081-.06.013-.086-.013-.107-.107l-.026-.086.034-.043c.04-.043.043-.051.035-.098 0-.018.017-.056.038-.086a.16.16 0 0 0 .035-.129.2.2 0 0 0-.022-.094.15.15 0 0 1-.025-.073.2.2 0 0 0-.03-.09.2.2 0 0 1-.035-.077.4.4 0 0 0-.064-.142l-.026-.064a.4.4 0 0 0-.06-.094l-.154-.206a3.4 3.4 0 0 0-.784-.771c-.026-.043-.146-.133-.253-.193a2 2 0 0 1-.184-.129 3 3 0 0 0-.322-.214l-.171-.107-.313-.184a18 18 0 0 0-1.783-.917 6 6 0 0 0-.969-.3 10 10 0 0 1-.565-.129c-.185-.034-.287-.081-.287-.137 0-.013.017-.03.038-.043l.043-.026-.043-.043c-.021-.021-.043-.051-.043-.06 0-.038.073-.085.245-.18q.266-.13.518-.287l.214-.128q.188-.118.386-.215c.064-.03.129-.06.184-.094a.6.6 0 0 1 .172-.073c.085 0 .154-.038.463-.244.197-.129.235-.15.373-.197.154-.056.188-.073.274-.129.03-.025.163-.103.296-.171l.3-.172c.085-.072.17-.192.27-.394l.094-.146a.6.6 0 0 0 .081-.145c.017-.043.043-.112.069-.146.047-.086.043-.129-.017-.296-.06-.154-.095-.193-.185-.218-.107-.03-.128-.043-.145-.086l-.03-.043c-.112.056-.163.064-.318.043a1 1 0 0 0-.188-.009.36.36 0 0 1-.189-.03q-.404-.061-.81-.025zm-4.183 5.258a.5.5 0 0 0 .103.047c.085.03.115.06.06.06a.24.24 0 0 1-.099-.043.5.5 0 0 0-.124-.055c-.034-.009-.064-.022-.069-.03-.004-.026.086-.009.129.021m.994.802c-.043.008-.039.085.013.107.069.034.291.056.428.047l.13-.009-.087-.03a.5.5 0 0 1-.124-.064.2.2 0 0 0-.069-.043 2 2 0 0 0-.29-.008m6.437.595c.043.022.064.056.112.193a.3.3 0 0 0 .043.095c.09.055.128.137.124.257-.009.094-.039.103-.12.025a1 1 0 0 0-.099-.081.2.2 0 0 1-.047-.052c-.026-.038-.06-.072-.09-.107a.6.6 0 0 1-.086-.107.5.5 0 0 0-.025-.086c-.03-.077-.035-.137-.013-.158.043-.03.124-.021.201.021m.257.797c0 .03-.043.043-.068.03-.022-.017-.022-.072 0-.085s.064.025.064.055zm.57.292c-.025.026-.017.06.013.056.03-.009.043-.026.03-.052q-.011-.037-.043-.004m-.257.261c.017.018 0 .099-.026.12-.03.026-.068 0-.085-.051-.013-.052 0-.077.026-.086s.068 0 .085.017m-.257.043c.039.043.034.043.013.103-.017.056-.043.094-.064.086-.018 0-.06-.129-.06-.167 0-.073.055-.086.107-.026zm-.146.343-.008.086c0 .034-.013.051-.03.064-.047.03-.06.013-.052-.064.013-.082.043-.129.073-.129.026 0 .026.005.017.043m-.141 1.676a.15.15 0 0 0-.052.055q-.024.044-.05.086l-.027.047.043-.025a.4.4 0 0 0 .086-.095c.06-.085.06-.098 0-.068m-2.507.998c0 .017-.043.026-.077.022q-.027-.008-.022-.022c.013-.012.099-.012.099 0m-.249.163c-.013.035-.146.069-.257.069-.116 0-.15-.013-.086-.043.09-.039.352-.056.343-.026m-.578.039c-.009.017-.086.03-.129.021l-.026-.004.03-.013c.043-.021.137-.021.129-.004zm-.909.068c-.004.022-.069.035-.103.026-.025-.008-.025-.008 0-.026.026-.021.112-.021.103 0m.437-.008c.026.004.047.017.047.026s.013.017.026.021l-.086.013a.3.3 0 0 1-.137 0 .2.2 0 0 0-.085-.009c-.07.009-.12-.017-.103-.043.013-.017.252-.021.338-.008m.66.013c-.017.021-.09.025-.09.008s.03-.026.077-.03c.026 0 .026 0 .013.022m-.141.004c0 .034-.202.06-.309.043l-.064-.013.077-.009.129-.021c.06-.013.167-.013.167 0m-.99.12c.103 0-.356.171-.536.206q-.18.02-.36 0c-.034-.009-.034-.009-.013-.026a.3.3 0 0 1 .09-.034l.215-.047c.377-.086.484-.112.522-.103zm.098.167-.077.026c-.124.034-.257.017-.154-.017.034-.017.244-.022.231-.009m-1.11.017c0 .009-.017.013-.025.013q-.02 0-.013-.013c.004-.008.017-.013.03-.013q.014 0 .008.013m-.377.146a.6.6 0 0 1-.205.064q-.082 0 .055-.051c.077-.026.172-.035.15-.013m.189.026c-.043.034-.553.193-.579.18-.026-.009.137-.073.266-.107.073-.018.146-.043.171-.052a.4.4 0 0 1 .155-.043q.019-.002-.013.022m.754-.013c0 .021-.047.055-.111.073a.2.2 0 0 0-.086.047.8.8 0 0 1-.163.086c-.146.06-.159.06-.343.072-.197.013-.257.005-.257-.034q.001-.02.034-.034a4.3 4.3 0 0 1 .703-.21c.103-.013.223-.017.223 0m-1.487.548a.12.12 0 0 1-.069.022c-.034 0-.038 0-.012-.022a.13.13 0 0 1 .064-.021c.043 0 .043 0 .017.021"/>
    <defs>
        <linearGradient id="SAVG__a" x1="12" x2="12" y1="5.143" y2="18.858" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4E4E4E"/>
            <stop offset="1" stopColor="#0C0C0C"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconSavg.displayName = 'Savg';

export default IconSavg;
