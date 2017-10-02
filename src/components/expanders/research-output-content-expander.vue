<!-- research-output-content-expander -->

<template id="research-output-content-expander">
  <v-card flat class="text-xs-center ml-0">
    <v-card flat fluid class="ml-2">
      <v-form ref="contentform">
        <v-text-field label="Enter Abstract Here" full-width multi-line v-model="report.additional_info">
        </v-text-field>
        <v-divider></v-divider>
        <v-text-field label="Enter Report Text Here" multi-line full-width v-model="report.text">
        </v-text-field>
        <v-divider></v-divider>
        <div class="text-xs-left">
          <v-btn flat>
            <file-upload ref="upload" v-model="files" post-action="/upload-pdf" put-action="/upload-pdf" @input-file="inputFile" @input-filter="inputFilter">
              Attach file
            </file-upload>
          </v-btn>
        </div>

      </v-form>
    </v-card>
  </v-card>
</template>

<script>
import VueUploadComponent from 'vue-upload-component';

export default {

  name: 'research-output-content-expander',
  props: ['report'],
  data() {
    return {
      files: [],
    };
  },
  watch: {
    files(newFiles) {
      console.log(newFiles);
    },
    file_link(newFileLink) {
      this.report.pdf_link = newFileLink;
    },
  },
  computed: {
    file_link() {
      // this.props.report.pdf_link = this.files[0].blob;
      return this.files[0].blob;
    },
  },
  methods: {
    clear() {
      // clear form data
      this.$refs.contentform.reset();
    },
    /**
    * Has changed
    * @param  Object|undefined   newFile   Read only
    * @param  Object|undefined   oldFile   Read only
    * @return undefined
    */
    inputFile(newFile, oldFile) {
      if (newFile && oldFile && !newFile.active && oldFile.active) {
        // Get response data
        console.log('response', newFile.response);
        if (newFile.xhr) {
          //  Get the response status code
          //  Required html5 support
          console.log('status', newFile.xhr.status);
        }
      }
    },
    /**
     * Pretreatment
     * @param  Object|undefined   newFile   Read and write
     * @param  Object|undefined   oldFile   Read only
     * @param  Function           prevent   Prevent changing
     * @return undefined
     */
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Filter non-image file
        if (!/\.(jpeg|jpe|jpg|gif|png|webp|pdf)$/i.test(newFile.name)) {
          return prevent();
        }
      }

      // Create a blob field
      newFile.blob = '';
      const URL = window.URL || window.webkitURL;
      if (URL && URL.createObjectURL) {
        newFile.blob = URL.createObjectURL(newFile.file);
      }
    },
  },
  watch: {
    clearReport() {
      // watch global variable to fire local clear
      if (this.$store.getters.clearReport === true) {
        this.clear();
      }
    },
  },
  components: {
    VueUploadComponent,
    FileUpload: VueUploadComponent,
  },
};
</script>
