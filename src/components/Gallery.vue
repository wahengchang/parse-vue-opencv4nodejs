<template>
  <div class="galleryContainer">
    <div class="itemBox" v-for='(url, index) in imageList' :key='index'>
      <button v-if='isRemoveButton' @click='onRemove(url)'>x</button>
      <img
        :src='url'
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    imageList: Array,
    isRemoveButton: Boolean,
    onRemove: Function
  },
}
</script>

<style scoped lang="scss">
.galleryContainer {
  display: flex;
  flex-wrap: wrap;
}
.itemBox {
}
.itemBox button{
  position: absolute;
}
.itemBox img{
}
</style>
