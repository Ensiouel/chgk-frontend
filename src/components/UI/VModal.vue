<template>
  <div
      class="modal fade"
      :id="id"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"><slot name="title"></slot></h5>
          <button
              v-if="default_dismiss"
              type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Modal",
  props: {
    backdrop_static: {
      default: false,
      type: Boolean
    },
    id: {
      type: String,
      required: true
    },
    default_dismiss: {
      default: true,
      type: Boolean
    }
  },
  computed: {
    isBackdrop() {
      return this.backdrop_static ? 'static' : ''
    }
  }
}
</script>

<style scoped>

</style>