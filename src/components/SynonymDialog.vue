<template>
  <el-dialog
    title="Synonyms"
    :visible.sync="dialogData.dialogVisible"
    width="30%"
    :before-close="handleClose">
    <ul v-for="synonym in dialogData.dialogSynonym">
      <li @click="synonymClickHandler(synonym.word)">{{ synonym.word }}</li>
    </ul>
  </el-dialog>
</template>

<script>
  export default {
    name: "SynonymDialog",
    computed: {
      dialogData: function () {
        // Get synonym dialog data.
        return this.$store.getters.getSynonymDialogData;
      }
    },
    methods: {
      /**
       * Dialog close handler.
       */
      handleClose() {
        this.$store.dispatch('updateSynonymDialogData', {
          dialogVisible: false,
          dialogSynonym: {}
        });
      },
      /**
       * Synonym click handler..
       * @param {string} synonym
       *  Current word.
       */
      synonymClickHandler(synonym) {
        const updateWordData = {...this.dialogData.wordData};
        updateWordData.value = synonym;
        this.$store.dispatch('updateWordName', updateWordData);
        this.$store.dispatch('updateSynonymDialogData', {
          dialogVisible: false,
          dialogSynonym: {},
          wordData: {}
        });
      }
    }
  };
</script>
<style scoped>
  #file-zone {
    background-color:#f1f0f0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
  }

  #file {
    width: 600px;
    flex-grow: 1;
    background-color: #fff;
    border: 1px solid #e4dede;
  }

  .word.is-bold {
    font-weight: bold;
  }

  .word.is-italic {
    font-style: italic;
  }

  .word.is-underlined {
    text-decoration: underline;
  }
</style>
