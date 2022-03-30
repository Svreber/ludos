<template>
  <div class="games-import">

    <a-upload accept=".csv"
              name="file"
              :custom-request="dummyRequest"
              :show-upload-list="false"
              @change="parseFile">
      <a-button :loading="isUploading">
        <font-awesome-icon icon="upload" />
        <span>Upload games</span>
      </a-button>
    </a-upload>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { BatchService } from "../services/BatchService";

const emit = defineEmits<{
  (e: 'change'): void
}>();

const isUploading = ref<boolean>(false);

const dummyRequest = (): void => {
  // Required to avoid the upload component to throw some http request
  // https://medium.com/@mattcroak718/managing-file-uploads-with-ant-design-6d78e592f2c4
}

const parseFile = async (arg: {file: {originFileObj: File}}): Promise<void> => {
  isUploading.value = true;
  await BatchService.parseCsv(arg.file.originFileObj);
  isUploading.value = false;
  emit('change');
}
</script>


<style lang="less" scoped>
  .games-import {
  }
</style>
