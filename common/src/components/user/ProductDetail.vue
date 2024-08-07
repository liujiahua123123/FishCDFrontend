<template>
  <v-layout height="600">
    <v-container class="pa-md-12 fill-height d-flex align-center">
      <v-responsive class="mx-auto" max-width="250">
        <v-hover v-slot="{ isHovering, props: hoverProps }">
          <v-card
            class="mx-auto"
            flat
            rounded="lg"
            v-bind="hoverProps"
          >
            <v-img
              :aspect-ratio="4/5"
              block
              class="cursor-pointer"
              cover
              :src="item.img"
            />

            <v-overlay
              class="align-center justify-center"
              contained
              :model-value="isHovering"
              no-click-animation
              persistent
              scrim="surface"
            >
              <v-btn
                class="text-none"
                text="See more info"
                variant="flat"
                @click="dialog = true"
              />
            </v-overlay>
          </v-card>
        </v-hover>

        <div class="text-body-1 d-flex justify-space-between font-weight-bold mt-3">
          <p>{{ item.title }}</p>

          <p>${{ item.price }}</p>
        </div>
      </v-responsive>

      <v-dialog v-model="dialog" contained max-width="850">
        <v-card rounded="lg">
          <v-container class="pa-md-6" fluid>
            <v-row>
              <v-col class="px-md-4 d-flex flex-column " cols="12" md="6">
                <div class="text-md-h4 font-weight-bold mb-2 text-h5">CD名字</div>

                <div class="d-flex ga-4 align-center mb-4 flex-wrap">
                  <p class="text-body-1 font-weight-bold mt-1">$价格</p>

                  <v-divider vertical />

                  <p class="text-body-1 font-weight-bold mt-1">P名字</p>

                  <v-btn
                    class="text-caption mt-1 px-0"
                    density="compact"
                    :ripple="false"
                    slim
                    text="p链接1"
                    variant="plain"
                  />
                  <v-btn
                    class="text-caption mt-1 px-0"
                    density="compact"
                    :ripple="false"
                    slim
                    text="p链接2"
                    variant="plain"
                  />
                </div>

                <div class="d-flex ga-2 text-caption mb-4">
                  <v-icon color="success" icon="mdi-check" />
                  <p>购买渠道</p>
                </div>

                <div style="height: 300px; overflow: scroll">
                  <p class="text-caption font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!</p>

                  <p class="text-body-2 text-medium-emphasis mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!</p>

                  <v-list density="compact">
                    <v-list-item >
                      <template v-slot:prepend>
                        <v-icon icon="mdi-music" size="x-small"></v-icon>
                      </template>
                      <v-list-item-title>歌1</v-list-item-title>
                      <v-list-item-subtitle>作者1</v-list-item-subtitle>
                      <template v-slot:append>
                        <v-icon icon="mdi-play" size="x-small"></v-icon>
                      </template>
                    </v-list-item>
                    <v-list-item >
                      <template v-slot:prepend>
                        <v-icon icon="mdi-music" size="x-small"></v-icon>
                      </template>
                      <v-list-item-title>歌1</v-list-item-title>
                      <v-list-item-subtitle>作者1</v-list-item-subtitle>
                      <template v-slot:append>
                        <v-icon icon="mdi-play" size="x-small"></v-icon>
                      </template>
                    </v-list-item>
                    <v-list-item >
                      <template v-slot:prepend>
                        <v-icon icon="mdi-music" size="x-small"></v-icon>
                      </template>
                      <v-list-item-title>歌1</v-list-item-title>
                      <v-list-item-subtitle>作者1</v-list-item-subtitle>
                      <template v-slot:append>
                        <v-icon icon="mdi-play" size="x-small"></v-icon>
                      </template>
                    </v-list-item>
                    <v-list-item >
                      <template v-slot:prepend>
                        <v-icon icon="mdi-music" size="x-small"></v-icon>
                      </template>
                      <v-list-item-title>歌1</v-list-item-title>
                      <v-list-item-subtitle>作者1</v-list-item-subtitle>
                      <template v-slot:append>
                        <v-icon icon="mdi-play" size="x-small"></v-icon>
                      </template>
                    </v-list-item>
                    <v-list-item >
                      <template v-slot:prepend>
                        <v-icon icon="mdi-music" size="x-small"></v-icon>
                      </template>
                      <v-list-item-title>歌1</v-list-item-title>
                      <v-list-item-subtitle>作者1</v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item >
                      <template v-slot:prepend>
                        <v-icon icon="mdi-music" size="x-small"></v-icon>
                      </template>
                      <v-list-item-title>歌1</v-list-item-title>
                      <v-list-item-subtitle>作者1</v-list-item-subtitle>
                    </v-list-item>
                  </v-list>

                  <div>
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
                </div>

                <v-img
                  class="hidden-md-and-up mb-4 mt-4"
                  color="surface-light"
                  cover
                  :height="$vuetify.display.mdAndUp ? 600 : 200"
                  rounded="lg"
                  :src="item.img"
                />
                <div class="hidden-md-and-up">
                  <div class="text-right">
                    <v-btn
                      class="text-none"
                      rounded="lg"
                      text="发售页面"
                      variant="text"
                    />
                    <v-btn
                      class="text-none"
                      rounded="lg"
                      text="专辑试听"
                      variant="text"
                    />
                  </div>
                </div>
              </v-col>

              <v-col
                class="hidden-sm-and-down"
                cols="12"
                md="6"
              >
                <div class="d-flex flex-column ga-2">
                  <v-img
                    color="surface-light"
                    cover
                    height="auto"
                    rounded="lg"
                    :src="item.img"
                  />

                  <div class="text-right">
                    <v-btn
                      class="text-none"
                      rounded="lg"
                      text="发售页面"
                      variant="text"
                    />
                    <v-btn
                      class="text-none"
                      rounded="lg"
                      text="专辑试听"
                      variant="text"
                    />
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
    </v-container>
  </v-layout>
</template>

<script setup>
import { shallowRef } from 'vue'

const dialog = shallowRef(true)

const item = {
  title: 'Devk',
  subtitle: 'Travel',
  price: 240,
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqzTH3qKJ_ecGTUc5FUU84KP-YLly5ud3OQ&s',
}
const selectedSize = shallowRef(1)
</script>
