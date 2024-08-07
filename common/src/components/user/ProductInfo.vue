<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({
      img: '',
      title: '',
      description: '',
      subtitle: '',
      price: 0,
    }),
  },
});

</script>

<template>
  <v-col cols="12" lg="3" md="4" sm="6">
    <v-card border flat rounded="lg">
      <v-hover v-slot:default="{ isHovering, props: hoverProps }">
        <v-card
          class="mx-auto"
          v-bind="hoverProps"
          flat
          link
          :ripple="false"
          rounded="b-0"
        >
          <v-img
            :aspect-ratio="1"
            block
            cover
            :src="props.product.img"
          >
            <template #placeholder>
              <v-skeleton-loader style="width: 100%; height: 100%" />
            </template>
          </v-img>

          <v-overlay
            class="align-center justify-center"
            contained
            :value="isHovering"
            persistent
            scrim="surface"
          />
        </v-card>
      </v-hover>

      <div class="pa-3">
        <p class="text-body-1">{{ props.product.title }}</p>
        <p class="text-caption font-italic">{{ props.product.description }}</p>
        <p class="text-body-2 text-medium-emphasis mt-1">{{ props.product.subtitle }}</p>
        <p class="font-weight-bold text-body-2 mt-1">¥{{ props.product.price }}</p>

        <v-chip
          class="text-none mr-2"
          color="primary"
          size="x-small"
          text="Tag1"
          variant="flat"
        />
        <v-chip
          class="text-none mr-2"
          color="primary"
          size="x-small"
          text="Tag2"
          variant="flat"
        />
      </div>
    </v-card>
  </v-col>
</template>

<style scoped>
</style>
