<template>
    <span ref="root">
        <i class="glyphicon glyphicon-import"></i>
        <span class="title" ref="title">{{loading ? '导入中...' : this.buttonText}}</span>
    </span>
</template>

<script type="es6">
    export default {
        name: 'importer',
        props: {
            buttonText:{
                type:String,
                default:'导入文件'
            },
            server: {
                type:String,
                default:''
            },
            extensions:{
                type:String,
                default:''
            },
            fileSizeLimit:{
                type:Number
            },
            isValid:{
                type:Function,
                default(response){
                    return response.Status;
                }
            },
            message:{
                type:String,
                default:'Message'
            },
            formData:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        data(){
            return {
                loading: false
            }
        },
        mounted(){
            var that = this;
            var uploader = WebUploader.create({
                pick: {
                    id: that.$refs.root
                },
                auto: true,
                formData:this.formData,
                chunked: true,
                server: that.server,
                accept: {
                    extensions:that.extensions
                },
                fileSizeLimit:that.fileSizeLimit
            });
            uploader.on('startUpload', function () {
                that.loading = true;
            });
            uploader.on('uploadSuccess', function (file, response) {
                if (that.isValid(response)) {
                    that.$emit('success', response);
                } else {
                    that.$emit('error', response[that.message]);
                }
            });
            uploader.on('uploadError', function (file,code) {
                that.$emit('error','上传失败');
            });
            uploader.on('error', function (code) {
                var msg={
                    Q_EXCEED_NUM_LIMIT:'文件数量超出限制',
                    Q_EXCEED_SIZE_LIMIT:'文件总大小超出限制!',
                    Q_TYPE_DENIED:'文件类型不正确!'
                };
                that.$emit('error',msg[code]);
            });
            uploader.on('uploadComplete', function () {
                that.loading = false;
                uploader.reset();
            })
        }
    }
</script>




