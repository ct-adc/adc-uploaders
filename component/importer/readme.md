# 导入文件组件

## 使用

从npm安装`ct-adc-uploaders`
```
npm install ct-adc-uploaders
```
在代码中引用
```
import uploaders from 'ct-adc-uploaders';
var Importer=uploaders.Importer;
Vue.component(Importer.name,Importer);
```
## 参数说明

参数|描述|类型|默认值
--- | --- | --- | --- |
buttonText | 按钮文字 | String | '导入文件'
server | 上传接口地址 | String | ''
extensions | 可以接受的文件后缀，以‘,’隔开 如 jpg,png,gif | String | ''
fileSizeLimit | 可以接受的文件大小(单位为B) | Number | undefined
formData | 随文件上传的参数 | Object | {}


## 事件说明

### success 

成功后的回调，参数为服务端响应内容

### error

失败后的回调，参数为错误信息

ps: 上传后的逻辑层面的失败需要在外部处理。

