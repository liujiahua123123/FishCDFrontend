<script setup lang="ts">

</script>

<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card class="mx-auto">
        <v-row no-gutters class="pa-3">
          <v-col cols="12">
            <v-chip rounded="0" color="primary">
              1
            </v-chip>
            <span class="title px-2" >bilibili P</span>
          </v-col>
          <v-col cols="12">
            <v-col cols="12" class="ma-0 pa-0 mb-2" style="text-align:center">
              <div style="width: 100%; height: 1px; background-image: linear-gradient(to right, transparent, rgba(85, 166, 213, 0.85) 50%, transparent 100%, transparent)"></div>
            </v-col>
          </v-col>
          <v-col cols="12" sm="4">
            <v-img
              src="https://imagedelivery.net/CRHKaup6UVEaPqVojXiGNg/b8b9f023-aeaa-4988-002e-7cacb61ae800/small"
              alt="bilibiliGoods Image"
              class="align-center rounded-lg"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="8">
            <v-card-text class="pa-0 px-3">
              <v-row pa="0">
                <v-col cols="12" class="pb-1">
                  <p>
                    「bilibiliP」は「bilibili」傘下のグッズブランドです。bilibiliGoodsブースではUWAシリーズ痛バッグやぬいぐるみキーホルダーなど、初音ミクたちのさまざまな新商品を販売いたします。ぜひお立ち寄りください。
                  </p>
                </v-col>
                <v-col cols="12" class="my-0 py-1">
                  <v-chip class="rounded-sm mr-2" color="red">2027/07/31</v-chip>
                  <v-chip class="rounded-sm mr-2" color="white">2027/07/32</v-chip>
                </v-col>
                <v-col cols="12"  class="my-0 py-1">
                  <v-btn
                    color="primary"
                    href="https://twitter.com/bilibiliGoods"
                    target="_blank"
                    variant="outlined"
                    class="mr-2"
                  >
                    公式X
                  </v-btn>
                  <v-btn
                    color="primary"
                    href="https://twitter.com/bilibiliGoods"
                    target="_blank"
                    variant="outlined"
                    class="mr-2"
                  >
                    CD LIST
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
