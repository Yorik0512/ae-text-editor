// Axios import.
import axios from 'axios'

// Endpoints.
const url = 'https://api.datamuse.com';
const synonymEndpoint = `${url}/words?rel_syn=`;

/**
 * SynonymService provides methods to get data of Datamuse api.
 */
class SynonymClass {
  /**
   * Get synonym word.
   * @param {string} word
   *  Current word.
   */
  getSynonym(word) {
    return axios
      .get(`${synonymEndpoint}${word}`)
      .then(response => response.data)
      .catch(error => console.log(error));
  }
}

/**
 * Init SynonymService object.
 */
const SynonymService = new SynonymClass();

/**
 * Export SynonymService object.
 */
export default SynonymService
