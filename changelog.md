## 更新日志

### 2.3.0

*2017-12-02*

- 优化 当loading为true时，将按钮加上disable样式

- 新增 新增headers属性，用于配置xhr的请求头

### 2.2.0

*2017-11-27*

- 新增 当loading为true时，禁用上传按钮

### 2.1.2

*2017-11-17*

- 修复 importer中的ct-adc-importer类移动到最外层

### 2.1.1

*2017-09-30*

- 修复 importer中样式影响到全局的bug

### 2.1.0

*2017-09-30*

- 新增 importer中加入hasInput参数 配置是否需要input

### 2.0.0

*2017-09-06*

- 优化 依赖的webuploader版本从0.1.5改为0.1.6
- 优化 importer / img-uploader中的 error事件和runtime-error事件中必要时暴露出http状态码，具体请查看readme

### 1.1.5

*2017-08-18*

- 修改 importer 当组件mounted之后自动刷新(refresh)

### 1.1.4

*2017-07-05*

- 修复 importer/img-uploader中部分属性修改后不能修改uploader对象本身

### 1.1.3

*2017-06-02*

- 修复 样式集成到vue组件中渲染失败的bug（加入命名空间代替scoped,因为scoped对动态的dom不生效）

### 1.1.2

*2017-05-31*

- 修复 loading动画不执行

### 1.1.1

*2017-05-31*

- 修复 importer中tip重复声明为data

### 1.1.0

*2017-05-30*

- 优化 为按钮加上disable状态,并给出提示的配置

### 1.0.2

*2017-05-23*

- 优化 将chunked改为可配置

### 1.0.1

*2017-05-22*

- 修复 导入文件组件中server动态改变时同步到webUploader对象

- 新增 添加在线demo

### 1.0.0

*2017-04-24*

- 新增 图片上传组件

- 脚手架更换为ct-adc/webpack

- 优化 将importer中的extensions配置项改为accept

### 0.0.9

*2017-03-17*

- 新增 stop方法
- 修复 ERRORS无法获取

### 0.0.8

ct-adc-uploader发布
