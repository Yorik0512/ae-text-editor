<template>
  <div id="app">
    <Header/>
    <main>
      <ControlPanel/>
      <FileZone/>
      <SynonymDialog/>
    </main>
  </div>
</template>

<script>
import ControlPanel from './components/ControlPanel'
import FileZone from './components/FileZone'
import Header from './components/Header'
import SynonymDialog from './components/SynonymDialog'
// Service import.
import getMockText from './services/text.service';

export default {
  name: 'App',
  mounted: function () {
    // Add Service data to global store.
    getMockText().then(data => {
      const textData = data.split(" ").map((item, key) => {
        return {
          key,
          value: item,
          'styles': {
            'bold': false,
            'italic': false,
            'underlined': false,
          }
        };
      });
      this.$store.dispatch('addWords', textData);
      return data;
    });
  },
  components: {
    Header,
    ControlPanel,
    FileZone,
    SynonymDialog
  }
}
</script>

<style>
#app {
  display: flex;
  height: 100%;
  flex-direction: column;
}
main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
