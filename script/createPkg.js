const fsExtra = require('fs-extra')
const path = require('path')

// 生成组件的 package.json 文件
const createPackageJson = (name) => {
  const fileStr = `{
  "name": "super-element-ui",
  "description": "这是一个组件库",
  "version": "0.0.1",
  "main": "index.umd.js",
  "module": "index.es.js",
  "style": "style.css",
  "author": "chennick",
  "license": "ISC"
}`

  fsExtra.outputFile(
    path.resolve(__dirname, '../dist/package.json'),
    fileStr,
    'utf-8'
  )
}

createPackageJson()