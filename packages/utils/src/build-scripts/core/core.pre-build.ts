import { generateMetadataTs } from './core-generate-metadata'
import { generateSvgModule } from './core-generate-svgs-module'
import { optimizeSVGs } from './core-optimize-svgs'

function preBuild() {
  optimizeSVGs()
  generateSvgModule()
  generateMetadataTs()
}

preBuild()
