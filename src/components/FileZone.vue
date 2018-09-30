<template>
   <div id="file-zone">
        <div id="file">
          <template v-for="word in textData">
            <word :data="word"/>&nbsp;
          </template>
        </div>
    </div>
</template>

<script>
import Word from './Word'

export default {
  name: "FileZone",
  computed: {
    textData: function () {
      // Get words data from global store.
      return this.$store.getters.getWordsData;
    }
  },
  components: {
    Word
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
