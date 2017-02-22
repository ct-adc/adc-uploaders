/**
 * @author rubyisapm
 */
import Vue from 'vue';
import uploaders from '../../index.js';

new Vue({
    el: '#app',
    data: {
        formData: {},
        fileSizeLimit:1000000,
        server: '/api/patch/uploadPatch'
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
        }


    }
});
