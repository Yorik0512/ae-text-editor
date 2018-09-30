/**
 * @file
 * Contains implementation of Vuex storage mutations.
 */

/**
 * Set words to store.
 * @param {object} state
 *   Vuex state.
 * @param {Array} items
 *   Array of words data.
 */
export const ADD_WORDS = (state, items) => {
  state.wordsData = items;
};

/**
 * Update word in global store of wordsData.
 * @param {object} state
 *   Vuex state.
 * @param {Array} word
 *   Object of word data.
 */
export const UPDATE_WORD = (state, word) => {
  return [...state.wordsData, ...word];
};

/**
 * Update word name in global store of wordsData.
 * @param {object} state
 *   Vuex state.
 * @param {Array} word
 *   Object of word data.
 */
export const UPDATE_WORD_NAME = (state, word) => {
  const wordsData = state.wordsData.map(item => {
    if (item.key === word.key) {
      item.value = word.value;
      return item;
    }
    return item;
  });
  return [...state.wordsData, ...wordsData];
};

/**
 * Add selected word data to global store.
 * @param {object} state
 *   Vuex state.
 * @param {object} word
 *   Object of word data.
 */
export const ADD_SELECTED_WORD = (state, word) => {
  state.selectedWord = word;
};

/**
 * Update synonym dialog data.
 * @param {object} state
 *   Vuex state.
 * @param {object} data
 *   Object of data.
 */
export const UPDATE_SYNONYM_DIALOG_DATA = (state, data) => {
  state.synonymDialog = data;
};
