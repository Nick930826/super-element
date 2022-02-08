const fs = require('fs-extra')
const { resolve } = require('path')
const handlebars = require('handlebars')

// 获取读路径和写路径，meta为用户新建组件时，传入的参数，格式如下
/**
 * {
 *    compName: '组件名称',
 *    compZhName: '组件中文名称',
 *    compDesc: '组件描述',
 *    compClassName: '组件类名'
 * }
*/
// 组件需要操作四个文件
const getTplFilePath = (meta) => ({
  // docs目录中的readme
  readme: {
    from: './.template/docs/README.md.tpl',
    to: `../../packages/${meta.compName}/docs/README.md`
  },
  demo: {
    from: './.template/docs/demo.vue.tpl',
    to: `../../packages/${meta.compName}/docs/demo.vue`
  },
  // src目录中的index.vue
  vue: {
    from: './.template/src/index.vue.tpl',
    to: `../../packages/${meta.compName}/src/index.vue`
  },
  // 根目录下的index.ts
  install: {
    from: './.template/index.ts.tpl',
    to: `../../packages/${meta.compName}/index.ts`
  }
})

// 生成packages文件夹下的组件目录
const compFilesTplReplacer = (meta) => {
  const filePaths = getTplFilePath(meta)
  Object.keys(filePaths).forEach(key => {
    // 读取模板文件
    const fileTpl = fs.readFileSync(resolve(__dirname, filePaths[key].from), 'utf-8')
    // 根据用户传入的替换内容
    const fileContent = handlebars.compile(fileTpl)(meta)
    // 替换之后，将内容写入文件
    fs.outputFile(resolve(__dirname, filePaths[key].to), fileContent, (err) => {
      if (err) console.log('错误提示', err)
    })
  })
}

// 生成packages文件夹下的list.json文件，并且替换
const listJsonTplReplacer = (meta) => {
  const CompJson = JSON.parse(fs.readFileSync(resolve(__dirname, '../../packages/list.json'), 'utf-8'))
  CompJson.push({
    compName: meta.compName,
    compZhName: meta.compZhName,
    compDesc: meta.compDesc,
    compClassName: meta.compClassName
  })
  const newCompJson = JSON.stringify(CompJson, null, 2)
  // 替换之后，将内容写入文件
  fs.outputFile(resolve(__dirname, '../../packages/list.json'), newCompJson, (err) => {
    if (err) console.log('错误提示', err)
  })
  return CompJson
}

// 生成packages文件夹下的index.ts文件，注册组件
const packageRootIndexReplacer = (CompJson) => {
  // 读取模板文件
  const fileTpl = fs.readFileSync(resolve(__dirname, './.template/install.ts.tpl'), 'utf-8')
  // 生成参数
  const params = {
    importPlugins: CompJson.map(cur => `import { ${cur.compName}Plugin } from './${cur.compName}';`).join('\n'),
    installPlugins: CompJson.map(cur => `${cur.compName}Plugin.install?.(app)`).join('\n    '), // 空四格
    exportPlugins: CompJson.map(cur => `export * from './${cur.compName}';`).join('\n')
  }
  // 替换操作
  const fileContent = handlebars.compile(fileTpl, { noEscape: true })(params)
  // 替换之后，将内容写入文件
  fs.outputFile(resolve(__dirname, '../../packages/index.ts'), fileContent, (err) => {
    if (err) console.log('错误提示', err)
  })
}

// 生成新的路由
const routerFileReplacer = (CompJson) => {
  const routerFileFrom = './.template/router.ts.tpl'
  const routerFileTo = '../../src/router.ts'
  const routerFileTpl = fs.readFileSync(resolve(__dirname, routerFileFrom), 'utf-8')
  const routerMeta = {
    routes: CompJson.map(comp => {
      return `{
    title: '${comp.compZhName}',
    name: '${comp.compName}',
    path: '/components/${comp.compName}',
    component: () => import('packages/${comp.compName}/docs/README.md'),
  }`
    })
  }
  routerMeta.routes.unshift(`
    {
      path: '/',
      redirect: '/components/Button'
    }
  `)
  const routerFileContent = handlebars.compile(routerFileTpl, { noEscape: true })(routerMeta)
  fs.outputFile(resolve(__dirname, routerFileTo), routerFileContent, err => {
    if (err) console.log(err)
  })
}


module.exports = (meta) => {
  compFilesTplReplacer(meta)
  const CompJson = listJsonTplReplacer(meta)
  packageRootIndexReplacer(CompJson)
  routerFileReplacer(CompJson)
}

