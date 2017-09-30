# 导入文件组件

## [在线demo](https://codepen.io/rubyisapm/pen/WjYVPp){:target="_blank"}

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
chunked | 是否分片上传文件 | Boolean | true
disabled | 按钮是否可用 | Boolean | true
tip | disabled为false时生效。当tip为''时不显示tip框 | String | ''
direction | tip的方向 | String | 'left'/'right'/'top'/'bottom'
hasInput | 是否需要input框 | Boolean | false

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

失败后的回调，参数为错误信息。
错误信息为字符串，内容不固定。
如果是http且状态码需要客户端解析(状态码除去[200,300)和[500,600)后其他的状态码)，会返回如"http-401"这种错误。
如需解析，请先解析状态码，如果无状态码信息，则提示默认的提示如“上传失败，请重试”

ps: 上传后的逻辑层面的失败需要在外部处理。

