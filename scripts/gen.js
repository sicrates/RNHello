const fs = require('fs')

const imageFileNames = () => {
  const array = fs
    .readdirSync('../src/R/images/')
    .filter((file) => {
      return file.endsWith('.png')
    })
    .map((file) => {
      return file.replace('@2x.png', '').replace('@3x.png', '').replace('.png', '')
    })
return Array.from(new Set(array))
}
const generate = () => {
  let properties = imageFileNames()
    .map((name) => {
      return `${name}: require('./${name}.png')`
    })
    .join(',\n  ')
const string = `const images = {
  ${properties}
}
export default images
`
fs.writeFileSync('../src/R/images/index.js', string, 'utf8')
}
generate()
console.log('generated ../src/R/images/index.js')


const components = () => {
  const array = fs
    .readdirSync('../src/components')
    .filter((file) => {
      if(file != 'index.js')
      return file.endsWith('.js')
    })
    .map((file) => { return file.replace('.js', '') })
  return Array.from(new Set(array))
}

let imp = components()
  .map((name) => { return `import { ${name} } from './${name}'` })
  .join('\n  ')

let exp = components()
  .map((name) => { return ` ${name}` })
  .join(',\n  ')

const string = `
  ${imp}

  export { 
  ${exp}
  }
  `
fs.writeFileSync('../src/components/index.js', string, 'utf8')
console.log('generated ../src/components/index.js')


const genStyles = () => {
  const styles = () => {
    const array = fs
      .readdirSync('../src/R/styles')
      .filter((file) => {
        if (file != 'index.js')
          return file.endsWith('.js')
      })
      .map((file) => { return file.replace('.js', '') })
    return Array.from(new Set(array))
  }

  let imp = styles()
    .map((name) => { return `import ${name} from './${name}'` })
    .join('\n  ')

  let exp = styles()
    .map((name) => { return ` ${name}` })
    .join(',\n  ')

  const string = `
  ${imp}

  const styles = {
  ${exp}
  }

  export default styles
  `
  fs.writeFileSync('../src/R/styles/index.js', string, 'utf8')
}
genStyles()
console.log('generated ../src/R/styles/index.js')