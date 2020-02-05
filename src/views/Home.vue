<template>
  <div>
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropzoneOptions"
      @vdropzone-complete='onComplete'
    />
    <div v-if='imageList && imageList.length >= 1' class='galleryContainer'>
      <button @click='onDownload'>Download</button>
      <Gallery
        :imageList='imageList'
        :isRemoveButton='true'
        :onRemove='onRemove'
      />
    </div>
  </div>
</template>

<script>
import vueDropzone from 'vue2-dropzone'
import Gallery from '../components/Gallery'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: 'uploadContainer',
  components: {
    vueDropzone,
    Gallery
  },
  data: function () {
    return {
      dropzoneOptions: {
          url: '/apis/files/upload?isExtractFace=true&resize=80',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" }
      },
      imageList: []
    }
  },
  methods: {
    onComplete: function (e) {
      const res = JSON.parse(e.xhr.response)
      if(!res.files || !res.files.length) return 
      
      this.imageList = [...this.imageList, ...res.files]
    },
    onRemove: function(_url) {
      this.imageList = this.imageList.filter(item => item !== _url)
    },
    onDownload: function() {

      function download(urls) {
        var url = urls.pop();

        var a = document.createElement("a");
        a.setAttribute('href', url);
        a.setAttribute('download', '');
        a.setAttribute('target', '_blank');
        a.click();

      }

      download(this.imageList)
      // this.imageList.forEach(url => {
      //   console.log('onDownload', url)
      //   window.open(`localhost:1337${url}`)
      // })
    }
    
  }
}
</script>
<style scoped>
.galleryContainer button{
  background: #42b983;
  color: darkslategray;
  margin: 10px 0;
}
</style> 