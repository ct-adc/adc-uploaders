/**
 * @author rubyisapm
 */
import Vue from 'vue';
import uploaders from '../../../../index.js';

new Vue({
    el: '#app',
    data: {
        formData: {
            os: 1
        },
        fileSizeLimit: 10 * 1024 * 1024,
        server: '/api/patch/uploadPatch',
        method: 'POST',
        accept: {
            extensions: 'csv',
            mimeTypes: 'csv'
        },
        disabled: true,
        tip: '错误提示',
        direction: 'bottom'
    },
    components: {
        importer: uploaders.Importer
    },
    methods: {
        importSuccess(response){
            console.log(response);
        },
        importError(error){
            console.log(error);
        },
        changeFormData(){
            this.formData = {
                os: 2
            };
        },
        changeMethod(){
            this.method = 'GET';
        },
        changeServer(){
            this.server = '/Api/patch/uploadPatch';
        },
        changeStatus(){
            this.disabled = !this.disabled;
        },
        changeTip(){
            this.tip = '错误提示2';
        },
        resetTip(){
            this.tip = '';
        }
    }
});
