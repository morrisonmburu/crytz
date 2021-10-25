<template>
  <v-container>
    <div class="head">
      <div class="text-lg-h5">Detect Facial Manipulated Deepfake Videos</div>
      <div class="text-lg-h6">Click the upload button or drag and drop to upload</div>
    </div>
    <div class="d-flex justify-center">
      <div @dragover="dragover" @dragleave="dragleave" @drop="drop" class="upload" :style="{ backgroundColor: backColor, }">
        <div class="d-flex justify-center">
          <v-img style="cursor: pointer" @click="upload()" src="https://cdn-icons-png.flaticon.com/512/4506/4506353.png" width="200"/>
        </div>
        <div style="text-align: center" class="text-md-h6">Upload</div>
      </div>
    </div>
    <input
      type="file"
      ref="uploader"
      class="d-none"
      accept="video/mp4, video/avi"
      style="visibility: hidden"
      @change="uploadFile()"
    />
  </v-container>
</template>

<style>
  .upload {
    align-content: center;
    border: 5px dotted #CACFD2;
    border-radius: 7%;
    padding: 5%;
  }
  .head {
    text-align: center;
    margin-top: 10%;
    margin-bottom: 2%;
  }
</style>
<script>
import call from '../http/index.js'
export default {
  name: 'Upload',
  data: () => ({
    backColor: '#ffffff'
  }),
  methods: {
    upload () {
      this.$refs.uploader.click()
    },
    async uploadFile () {
      const data = new FormData()
      data.append('file', this.$refs.uploader.files[0])
      const res = await call('post', 'upload', data)
      console.log(res)
    },
    dragover (event) {
      event.preventDefault()
      this.backColor = '#BBDEFB'
    },
    dragleave (event) {
      event.preventDefault()
      this.backColor = '#ffffff'
    },
    drop (event) {
      event.preventDefault()
      this.$refs.uploader.files = event.dataTransfer.files
      this.uploadFile()
      this.backColor = '#ffffff'
    }
  }
}
</script>
