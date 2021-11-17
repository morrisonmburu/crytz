<template>
    <div>
        <div class="head">
            <div class="text-lg-h5">Deepfake detection system</div>
            <div class="text-lg-h6">Output</div>
        </div>
        <v-row>
          <v-col md="6">
            <div class="d-flex justify-center">
              <v-img
                :src="`http://127.0.0.1:8887/result/${results.video_name}.gif`"
                :lazy-src="`http://127.0.0.1:8887/result/${results.video_name}.gif`"
                aspect-ratio="1"
                height="530"
                width="720"
                class="grey lighten-2"
              ></v-img>
            </div>
          </v-col>
          <v-col md="6">
            <v-card class="mx-auto">
              <v-card-title>
                <div class="text-lg-h6">Deepfake detection output</div>
              </v-card-title>
              <v-card-text>
                <v-alert :type="results.prediction === 1 ? 'error': 'success'" :icon="results.prediction === 1 ? 'error_outline' : 'done'">
                  <div class="text-lg-h6">{{ results.prediction === 1 ? 'Deepfake Detected' : 'No Deepfake detected' }}</div>
                </v-alert>
                <div class="mt-3">
                  <v-list dense>
                    <v-list-item>
                      <div>{{ `File Name: ${results.video_fn}` }}</div>
                    </v-list-item>
                    <v-list-item>
                      <div>{{ `Prediction Output: ${JSON.parse(results.output_list)[0]}, ${JSON.parse(results.output_list)[1]}` }}</div>
                    </v-list-item>
                  </v-list>
                </div>
              </v-card-text>
            </v-card>
            <div class="text-lg-h6">Click the download button to download the prediction file</div>
              <div class="d-flex justify-center">
                <div class="download" :style="{ backgroundColor: backColor, }">
                    <div class="d-flex justify-center">
                      <a :href="'http://127.0.0.1:8887/'+results.video_fn">
                        <v-img style="cursor: pointer" src="https://cdn-icons-png.flaticon.com/512/892/892634.png" width="100"/>
                      </a>
                    </div>
                    <div style="text-align: center" class="text-md-h6">Download Output</div>
                </div>
              </div>
          </v-col>
        </v-row>
    </div>
</template>
<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Results',
  props: { results: Object },
  data: () => ({
    backColor: '#ffffff'
  }),
  mounted () {
  }
}
</script>
