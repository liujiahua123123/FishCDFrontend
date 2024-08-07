<script setup lang="ts">
const props = defineProps({
  num: {
    type: Number,
    required: true,
  },
  producer: {
    type: Object,
    required: true,
    default: () => ({
      img: '',
      title: '',
      description: '',
      buttons: [],
      tags: [],
    }),
  },
});
</script>

<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card class="mx-auto">
        <v-row no-gutters class="pa-3">
          <v-col cols="12">
            <v-chip rounded="0" color="primary">
              {{num}}
            </v-chip>
            <span class="title px-2" >{{ props.producer.title }}</span>
          </v-col>
          <v-col cols="12">
            <v-col cols="12" class="ma-0 pa-0 mb-2" style="text-align:center">
              <div style="width: 100%; height: 1px; background-image: linear-gradient(to right, transparent, rgba(85, 166, 213, 0.85) 50%, transparent 100%, transparent)"></div>
            </v-col>
          </v-col>
          <v-col cols="12" sm="4">
            <v-img
              :src="props.producer.img"
              alt="Image"
              class="align-center rounded-lg"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="8">
            <v-card-text class="pa-0 px-3">
              <v-row pa="0">
                <v-col cols="12" class="pb-1">
                  <p>
                    {{props.producer.description}}
                  </p>
                </v-col>
                <v-col cols="12" class="my-0 py-1">
                  <v-chip class="rounded-sm mr-2" :color="tag.color" v-for="tag in props.producer.tags">{{ tag.text }}</v-chip>
                </v-col>
                <v-col cols="12"  class="my-0 py-1">
                  <v-btn
                    :href="button.link"
                    target="_blank"
                    variant="outlined"
                    class="mr-2"
                    :color="button.color"
                    v-for="button in props.producer.buttons"
                  >
                    {{button.text}}
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.title {
  font-weight: bold;
}
</style>
