<template>
   <div id="control-panel">
        <div id="format-actions">
            <button
              @click="formatWordHandler('bold')"
              :class="{
                'format-action': true,
                'active': (this.wordData.styles || false).bold
              }"
              type="button"
            >
              <b>B</b>
            </button>
            <button
              :class="{
                'format-action': true,
                'active': (this.wordData.styles || false).italic
              }"
              type="button"
              @click="formatWordHandler('italic')"
            >
              <i>I</i>
            </button>
            <button
              :class="{
                'format-action': true,
                'active': (this.wordData.styles || false).underlined
              }"
              type="button"
              @click="formatWordHandler('underlined')"
            >
              <u>U</u>
            </button>
        </div>
    </div>
</template>

<script>
export default {
  name: "ControlPanel",
  computed: {
    wordData: function () {
      // Get words data from global store.
      return this.$store.getters.getSelectedWordData;
    }
  },
  methods: {
    /**
     * Format word on click handler.
     * @param {object} type
     *  Type of style.
     */
    formatWordHandler: function (type) {
      this.wordData.styles[type] = !this.wordData.styles[type];
      this.$store.dispatch('updateWord', this.wordData);
    }
  }
};
</script>
<style scoped>
    #control-panel {
        background-color: #fff;
        height: 25px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 5px;
    }
    #format-actions {
        width: 200px;
        margin-right: 400px;
    }
    .format-action.active {
      background: yellow;
    }
</style>
