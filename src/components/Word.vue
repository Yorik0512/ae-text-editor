<template>
  <span
    @dblclick="wordDoubleClick(data)"
    @mouseover="synonymHandler(data.value)"
    :class="{
      'word': true,
      'is-bold': (data.styles || false).bold,
      'is-italic': (data.styles || false).italic,
      'is-underlined': (data.styles || false).underlined,
    }"
  >{{ data.value }}</span>
</template>

<script>
  import _ from 'lodash'
  import SynonymService from '../services/synonym.service'

  export default {
    name: "Word",
    computed: {
      textData: function () {
        // Get words data from global store.
        return this.$store.getters.getWordsData;
      }
    },
    props: ['data'],
    methods: {
      /**
       * Word double click handler.
       * @param {object} word
       *  Current word data.
       */
      wordDoubleClick: function (word) {
        this.$store.dispatch('addSelectedWord', word);
      },
      /**
       * Get Synonym handler.
       * @param {string} word
       *  Current word value.
       */
      synonymHandler: _.debounce(function (word) {
        SynonymService.getSynonym(word).then(data => {
          this.$store.dispatch('updateSynonymDialogData', {
            dialogVisible: true,
            dialogSynonym: data,
            wordData: this.data
          });
          return data;
        });
      }, 4000),
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
