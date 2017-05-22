<template>
    <span ref="root">
        <i class="glyphicon glyphicon-import"></i>
        <span class="title">{{ buttonText }}</span>
    </span>
</template>

<script type="es6">
    import utility from 'ct-utility';
    var ERRORS = {
        Q_EXCEED_NUM_LIMIT: '文件数量超出限制',
        Q_EXCEED_SIZE_LIMIT: '文件总大小超出限制!',
        Q_TYPE_DENIED: '文件类型不正确!'
    };
    export default {
        name: 'importer',
        props: {
            buttonText: {
                type: String,
                default: '导入文件'
            },
            server: {
                type: String,
                default: ''
            },
            method: {
                type: String,
                default: 'GET'
            },
            accept: {
                type: Object,
                default(){
                    return {
                        extensions:'',
                        mimeTypes:''
                    }
                }
            },
            fileSizeLimit: {
                type: Number
            },
            formData: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data () {
            return {
                loading: false
            };
        },
        mounted () {
            var that = this;
            that.uploader = WebUploader.create({
                pick: {
                    id: that.$refs.root
                },
                auto: true,
                chunked: true,
                server: that.server,
                method: that.method,
                accept: that.accept,
                fileSizeLimit: that.fileSizeLimit
            });
            that.uploader.on('uploadBeforeSend', function(object, data, headers) {
                utility.base.extend(data, that.formData);
            })
            that.uploader.on('uploadStart', function() {
                that.$emit('start');
                that.loading = true;
            });

            that.uploader.on('uploadSuccess', function(file, response) {
                that.$emit('success', response);
            });

            that.uploader.on('uploadError', function() {
                that.$emit('error', '上传失败，请重试！');
            });

            that.uploader.on('error', function(code) {
                var msg = ERRORS[code] || '上传失败，请重试！';
                that.loading = false;
                that.$emit('error', msg);
            });

            that.uploader.on('uploadComplete', function() {
                that.loading = false;
                that.uploader.reset();
            })
        },
        methods: {
            refresh () {
                this.uploader.refresh();
            },
            stop(){
                this.loading = false;
                this.uploader.stop(true);
            }
        },
        watch: {
            loading(isLoading) {
                var $webuploaderPick = this.$refs.root.querySelector('.webuploader-pick');
                if (isLoading) {
                    $webuploaderPick.innerHTML = '<i class="glyphicon glyphicon-refresh importing"></i><span class="title">' + '上传中...' + '</span>';
                } else {
                    $webuploaderPick.innerHTML = '<i class="glyphicon glyphicon-import"></i><span class="title">' + this.buttonText + '</span>';
                }
            },
            server: function(server) {
                this.uploader.option('server',server);
            }
        }
    }
</script>

<style scoped>
    .webuploader-pick .importing {
        animation: importing .8s infinite linear;
    }

    .webuploader-pick .glyphicon {
        margin-right: 5px;
    }

    @keyframes importing {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>