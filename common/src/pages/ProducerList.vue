<template>
  <v-app>
    <v-layout>
      <navigation title="P主列表"></navigation>
      <v-main scrollableh>
        <v-container>
          <p-info></p-info>
          <p-info></p-info>
          <p-info></p-info>
          <p-info></p-info>
          <p-info></p-info>
          <p-info></p-info>
          <p-info></p-info>
          <p-info></p-info>
        </v-container>
      </v-main>
      <c-footer></c-footer>
    </v-layout>
  </v-app>
</template>

<script>
import PInfo from "@/components/ProducerInfo.vue";
import Exhibit from "@/components/Exhibit.vue";
import Navigation from "@/components/Navigation.vue";
import CFooter from "@/components/FishFooter.vue";

export default {
  components: {CFooter, Navigation, Exhibit, PInfo},
};

</script>
