<template>
  <div class="expandable-image" :class="{ expanded }" @click="expanded = true">
    <i v-if="expanded" class="close-button">
      <svg style="width:50px;height:50px" viewBox="0 0 24 24" class="mr-5">
        <path fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
      </svg>
    </i>
    <i v-else class="expand-button">
      <svg style="width:24px;height:24px"
        viewBox="0 0 24 24"
      >
      <path fill="#000000" d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"  class="opacity-50" />
      </svg>
    </i>
    <img v-bind="$attrs">
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
      closeButtonref: null
    }
  },
  inheritAttrs: false,
  methods: {
    closeImage (event) {
      this.expanded = false
      event.stopPropagation()
    },
    freezeVp (e) {
      e.preventDefault()
    }
  },
  watch: {
  expanded (expanded) {
    this.$nextTick(() => {
      // Run this if when we're expanding the image
      if (expanded) {
        // Clone the entire expandable-image element
        this.cloned = this.$el.cloneNode(true)
        // Store a reference for the close button
        this.closeButtonRef = this.cloned.querySelector('.close-button')
        // Call closeImage when the close button is clicked
        this.closeButtonRef.addEventListener('click', this.closeImage)
        // Add the cloned element into <body>
        document.body.appendChild(this.cloned)
        // Prevent the page from scrolling
        document.body.style.overflow = 'hidden'
        setTimeout(() => {
          // Show the cloned element
          this.cloned.style.opacity = 1
        }, 0)
      } else {
        // This section will run when the image is closing
        // Hide the expanded image
        this.cloned.style.opacity = 0
        setTimeout(() => {
          // Then, remove the click event listener from the close button
          this.closeButtonRef.removeEventListener('click', this.closeImage)
          // Remove the cloned element and the references
          this.cloned.remove()
          this.cloned = null
          this.closeButtonRef = null
          // Re-enable the scrolling
          document.body.style.overflow = 'auto'
        }, 250)
      }
    })
  }
}

}
</script>

<style>
.expandable-image {
  position: relative;
  transition: 0.25s opacity;
  cursor: zoom-in;
}
body > .expandable-image.expanded {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  opacity: 0;
  padding-bottom: 0 !important;
  cursor: default;
}
body > .expandable-image.expanded > img {
  width: 100%;
  max-width: 1200px;
  max-height: 100%;
  object-fit: contain;
  margin: 0 auto;
}
body > .expandable-image.expanded > .close-button {
  display: block;
}
.close-button {
  position: fixed;
  top: 10px;
  right: 10px;
  display: none;
  cursor: pointer;
}
svg {
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.5));
}
svg path {
  fill: #FFF;
}
.expand-button {
  position: absolute;
  z-index: 999;
  right: 10px;
  top: 10px;
  padding: 0px;
  align-items: center;
  justify-content: center;
  padding: 3px;
  opacity: 0;
  transition: 0.2s opacity;
}
.expandable-image:hover .expand-button {
  opacity: 1;
}
.expand-button svg {
  width: 20px;
  height: 20px;
}
.expand-button path {
  fill: #FFF;
}
.expandable-image img {
  width: 100%;
}
</style>