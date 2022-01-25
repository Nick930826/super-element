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

module.exports = (meta) => {
  compFilesTplReplacer(meta)
}

