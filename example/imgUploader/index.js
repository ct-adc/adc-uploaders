/**
 * @author rubyisapm
 */
import Vue from 'vue';
import ImgUploader from '../../src/imgUploader/imgUploader.vue';
new Vue({
    el:'#uploader',
    components:{
        ImgUploader
    },
    data:{
        error:''
    },
    methods:{
        resultFilter(res){
            if(res.IsFinish){
                return {
                    status:true,
                    path:res.ReturnPath
                };
            }else{
                return {
                    status:false,
                    msg:res.msg
                }
            }
        },
        showError(error){
            this.error=error;
        },
        getImgList(){
            console.log(this.$refs.imgUploader.getUrls());
        },
        setImgList(){

        }
    }
});