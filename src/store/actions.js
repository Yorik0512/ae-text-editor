/**
 * @file
 * Contains implementation of Vuex storage actions.
 */

/**
 * Add words.
 * @param {array} words
 *   Object of words.
 */
export const addWords = ({commit}, words) => {
  commit('ADD_WORDS', words);
};

/**
 * Update word in global store of wordsData.
 * @param {array} word
 *   Object of word data.
 */
export const updateWord = ({commit}, word) => {
  commit('UPDATE_WORD', word);
};

/**
 * Update word name in global store of wordsData.
 * @param {array} word
 *   Object of word data.
 */
export const updateWordName = ({commit}, word) => {
  commit('UPDATE_WORD_NAME', word);
};

/**
 * Add selected word data.
 * @param {object} words
 *   Object of word data.
 */
export const addSelectedWord = ({commit}, word) => {
  commit('ADD_SELECTED_WORD', word);
};

/**
 * Update synonym dialog data.
 * @param {object} data
 *   Object of data.
 */
export const updateSynonymDialogData = ({commit}, data) => {
  commit('UPDATE_SYNONYM_DIALOG_DATA', data);
};
