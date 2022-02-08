# Vue 3 + Typescript + Vite 开发基于Element-Plus的业务组件

## 运行打包
```bash
npm run build:lib
```
- 打包前需手动修改`script/createPkg.js`的组件版本号`version`。
- 打包后生成`dist`目录，进入`dist`目录执行`npm login && npm publish`发布组件库。
## 打包更新文档
```bash
npm run build:doc
```
- 打包后，将项目推送到github仓库，然后切换到gh-pages分支，将main分支合并到gh-pages分支。文档会自动获取docs目录的更新。
- 文档地址：https://nick930826.github.io/super-element/#/components/Button
## 自动化添加一个新的组件模板
```bash
npm run add
```

