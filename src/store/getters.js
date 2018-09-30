/**
 * @file
 * Contains implementation of Vuex storage getters.
 */

/**
 * Get words.
 * @returns {Array}
 *   Array of words.
 */
export const getWordsData = state => {
  return state.wordsData;
};

/**
 * Get selected word.
 * @returns {object}
 *   Object of word data.
 */
export const getSelectedWordData = state => {
  return state.selectedWord;
};

/**
 * Get synonym dialog data.
 * @returns {object}
 *   Object of data.
 */
export const getSynonymDialogData = state => {
  return state.synonymDialog;
};
