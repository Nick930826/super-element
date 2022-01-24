const inquirer = require('inquirer')

module.exports = async () => {
  // FooBar --> foo-bar
  const kebabCase = string => string
  .replace(/([a-z])([A-Z])/g, "$1-$2")
  .replace(/[\s_]+/g, '-')
  .toLowerCase();
  const res = await inquirer.prompt([
    {
      type: 'input',
      name: 'compName',
      message: '请输入组件名称（纯英文，大写开头）'
    },
    {
      type: 'input',
      name: 'compZhName',
      message: '请输入组件中文名称'
    },
    {
      type: 'input',
      name: 'compDesc',
      message: '请输入组件描述'
    },
  ])

  const { compName } = res
  res.compClassName = kebabCase(compName)

  return res
}