### NPM script

有些命令比较长，我们想给它起一个简单的外号（别名），便于手敲。设置的位置 就是在　package.json 文件的　script （脚本）这一部分。所以这个知识点 叫做　NPM Script 。

比如我们有这样一个命令：
```
webpack --config webpack.config.dev.js
```

这个命令太长，现在我们可以把它写到　package.json 之中
```
"scripts": {
  "build": "webpack --config webpack.config.dev.js"
},
```
这样，每次我想执行上面这个命令的时候，只需要

```
cd project
npm run build
```
注意，上面的 run 是必须要加的。但是如果有下面的代码

```
"scripts": { "start": "node devServer.js" },
```
由于 start 是特殊名字，执行命令，我们可以用
```
npm run start
```
但是页可以省略 run 。
