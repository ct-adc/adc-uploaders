# 导入文件组件

## [在线demo](https://codepen.io/rubyisapm/pen/WjYVPp)

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
accept | 和webuploader中accept配置项一致，包含extensions和mimeTypes两项。 | Object | ''
fileSizeLimit | 可以接受的文件大小(单位为B) | Number | undefined
formData | 随文件上传的参数 | Object | {}

### accept

accept参数为一个对象，包含两项：
* extensions

以‘,’隔开 如 jpg,png,gif

* mimeTypes

文件类型,如'image/jpeg'. 请具体列出文件类型，避免类似'image/*'这样的写法。

## 事件说明

### success 

成功后的回调，参数为服务端响应内容

### error

失败后的回调，参数为错误信息

ps: 上传后的逻辑层面的失败需要在外部处理。

