<template>
  <v-container>
    <div class="upload">
      <v-btn
          color="blue-grey"
          large
          class="ma-2 white--text"
          @click="upload()"
        >
          Upload
          <v-icon
            right
            dark
          >
            cloud_upload
          </v-icon>
        </v-btn>
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
    margin: 30% 30% 30% 45%;
  }
</style>
<script>
import call from '../http/index.js'
export default {
  name: 'Upload',
  data: () => ({}),
  methods: {
    upload () {
      this.$refs.uploader.click()
    },
    async uploadFile () {
      const data = new FormData()
      data.append('file', this.$refs.uploader.files[0])
      console.log('file', data)
      const res = await call('post', 'upload', data)
      console.log(res)
    }
  }
}
</script>
