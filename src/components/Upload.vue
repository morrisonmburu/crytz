<template>
  <v-container>
        <div v-if="!show">
          <div class="head">
            <div class="text-lg-h5">Detect Facial Manipulated Deepfake Videos</div>
            <div class="text-lg-h6">Click the upload button or drag and drop to upload</div>
          </div>
          <div class="d-flex justify-center">
            <div v-if="!loading" @dragover="dragover" @dragleave="dragleave" @drop="drop" class="upload" :style="{ backgroundColor: backColor, }">
              <div class="d-flex justify-center">
                <v-img style="cursor: pointer" @click="upload()" src="https://cdn-icons-png.flaticon.com/512/4506/4506353.png" width="200"/>
              </div>
              <div style="text-align: center" class="text-md-h6">Upload</div>
            </div>
            <div v-if="loading">
              <v-progress-circular
                :size="100"
                :width="5"
                color="primary"
                indeterminate
              ></v-progress-circular>
              <div class="text-lg-h5" style="text-align: center; padding-top: 10px;">processing ......</div>
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
        </div>
        <Results v-if="show" :results="results" />
  </v-container>
</template>

<style>
  .upload {
    align-content: center;
    border: 5px dotted #CACFD2;
    border-radius: 7%;
    padding: 5%;
  }
  .download {
    align-content: center;
    border: 5px dotted #CACFD2;
    border-radius: 5%;
    padding: 10% 33% 7% 33%;
  }
  .head {
    text-align: center;
    margin-top: 5%;
    margin-bottom: 2%;
  }
</style>
<script>
/* eslint-disable vue/multi-word-component-names */
import call from '../http/index.js'
import Results from './Results.vue'
export default {
  name: 'Upload',
  components: { Results },
  data: () => ({
    backColor: '#ffffff',
    show: false,
    results: {},
    loading: false
  }),
  mounted () {},
  methods: {
    upload () {
      this.$refs.uploader.click()
    },
    async uploadFile () {
      this.loading = true
      const data = new FormData()
      data.append('file', this.$refs.uploader.files[0])
      const res = await call('post', 'upload', data)
      console.log(res)
      this.results = res.data
      this.loading = false
      this.show = true
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
