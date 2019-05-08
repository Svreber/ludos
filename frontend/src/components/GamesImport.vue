<template>
  <div class="games-import">

    <a-upload accept=".csv"
              name="file"
              :custom-request="dummyRequest"
              :show-upload-list="false"
              @change="parseFile">
      <a-button :loading="isUploading">
        <a-icon type="upload" /> Upload games
      </a-button>
    </a-upload>

  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {BatchService} from '@/services/BatchService';

  @Component({
    name: GamesImport.tag
  })
  export class GamesImport extends Vue {
    static tag = 'GamesImport';

    isUploading: boolean = false;

    dummyRequest(): void {
      // Required to avoid the upload component to throw some http request
      // https://medium.com/@mattcroak718/managing-file-uploads-with-ant-design-6d78e592f2c4
    }

    async parseFile(arg: {file: {originFileObj: File}}): Promise<void> {
      this.isUploading = true;
      await BatchService.parseCsv(arg.file.originFileObj);
      this.isUploading = false;
      this.$emit('change');
    }
  }

  export default GamesImport;
</script>

<style lang="scss" scoped>
  .games-import {
  }
</style>
