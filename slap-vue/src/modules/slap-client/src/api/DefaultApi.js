/**
 * Song Lyrics & Popularity (SLAP)
 * This API provides the metrics and the metadata of songs in order to analyze Lyrics & Popularity
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Genre from '../model/Genre';
import HttpError from '../model/HttpError';
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse2001 from '../model/InlineResponse2001';
import InlineResponse2002 from '../model/InlineResponse2002';
import InlineResponse2003 from '../model/InlineResponse2003';
import Song from '../model/Song';
import SongMetrics from '../model/SongMetrics';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listSongWordFrequencyPlots operation.
     * @callback module:api/DefaultApi~listSongWordFrequencyPlotsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} songId 
     * @param {module:api/DefaultApi~listSongWordFrequencyPlotsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    listSongWordFrequencyPlots(songId, callback) {
      let postBody = null;
      // verify the required parameter 'songId' is set
      if (songId === undefined || songId === null) {
        throw new Error("Missing the required parameter 'songId' when calling listSongWordFrequencyPlots");
      }

      let pathParams = {
        'song_id': songId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/songs/{song_id}/word-frequency/plot', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listWordRandomizations operation.
     * @callback module:api/DefaultApi~listWordRandomizationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~listWordRandomizationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    listWordRandomizations(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2003;
      return this.apiClient.callApi(
        '/songs/words/randomize', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listWords operation.
     * @callback module:api/DefaultApi~listWordsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A list of words in the given song lyrics
     * @param {String} songId 
     * @param {module:api/DefaultApi~listWordsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    listWords(songId, callback) {
      let postBody = null;
      // verify the required parameter 'songId' is set
      if (songId === undefined || songId === null) {
        throw new Error("Missing the required parameter 'songId' when calling listWords");
      }

      let pathParams = {
        'song_id': songId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/songs/{song_id}/words', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveRepetitionMatrixPlot operation.
     * @callback module:api/DefaultApi~retrieveRepetitionMatrixPlotCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View to list all users in the system.  * Requires token authentication. * Only admin users are able to access this view.
     * @param {String} songId 
     * @param {module:api/DefaultApi~retrieveRepetitionMatrixPlotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    retrieveRepetitionMatrixPlot(songId, callback) {
      let postBody = null;
      // verify the required parameter 'songId' is set
      if (songId === undefined || songId === null) {
        throw new Error("Missing the required parameter 'songId' when calling retrieveRepetitionMatrixPlot");
      }

      let pathParams = {
        'song_id': songId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/csv'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/plot/rep-matrix/{song_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveSong operation.
     * @callback module:api/DefaultApi~retrieveSongCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Song} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * An API endpoint that allows songs to be viewed.
     * @param {String} id A unique integer value identifying this song.
     * @param {module:api/DefaultApi~retrieveSongCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Song}
     */
    retrieveSong(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling retrieveSong");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Song;
      return this.apiClient.callApi(
        '/songs/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the slapFlaskPublicControllersSongsGetParameterizedWordPopularitySingle operation.
     * @callback module:api/DefaultApi~slapFlaskPublicControllersSongsGetParameterizedWordPopularitySingleCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2002>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns word popularity index
     * @param {String} songId The ID of the song
     * @param {Number} wordCountWeight The given weight of word count
     * @param {Number} popularityWeight The given popularity index of word count
     * @param {Object} opts Optional parameters
     * @param {String} opts.popularityIndicator The given popularity indicator
     * @param {module:api/DefaultApi~slapFlaskPublicControllersSongsGetParameterizedWordPopularitySingleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2002>}
     */
    slapFlaskPublicControllersSongsGetParameterizedWordPopularitySingle(songId, wordCountWeight, popularityWeight, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'songId' is set
      if (songId === undefined || songId === null) {
        throw new Error("Missing the required parameter 'songId' when calling slapFlaskPublicControllersSongsGetParameterizedWordPopularitySingle");
      }
      // verify the required parameter 'wordCountWeight' is set
      if (wordCountWeight === undefined || wordCountWeight === null) {
        throw new Error("Missing the required parameter 'wordCountWeight' when calling slapFlaskPublicControllersSongsGetParameterizedWordPopularitySingle");
      }
      // verify the required parameter 'popularityWeight' is set
      if (popularityWeight === undefined || popularityWeight === null) {
        throw new Error("Missing the required parameter 'popularityWeight' when calling slapFlaskPublicControllersSongsGetParameterizedWordPopularitySingle");
      }

      let pathParams = {
        'song_id': songId
      };
      let queryParams = {
        'word_count_weight': wordCountWeight,
        'popularity_weight': popularityWeight,
        'popularity_indicator': opts['popularityIndicator']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [InlineResponse2002];
      return this.apiClient.callApi(
        '/song/{song_id}/word_popularity', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the slapFlaskPublicControllersSongsGetSong operation.
     * @callback module:api/DefaultApi~slapFlaskPublicControllersSongsGetSongCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Song>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a song matching the query
     * @param {String} title The title of a song
     * @param {String} artist The artist of a song
     * @param {module:api/DefaultApi~slapFlaskPublicControllersSongsGetSongCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Song>}
     */
    slapFlaskPublicControllersSongsGetSong(title, artist, callback) {
      let postBody = null;
      // verify the required parameter 'title' is set
      if (title === undefined || title === null) {
        throw new Error("Missing the required parameter 'title' when calling slapFlaskPublicControllersSongsGetSong");
      }
      // verify the required parameter 'artist' is set
      if (artist === undefined || artist === null) {
        throw new Error("Missing the required parameter 'artist' when calling slapFlaskPublicControllersSongsGetSong");
      }

      let pathParams = {
      };
      let queryParams = {
        'title': title,
        'artist': artist
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Song];
      return this.apiClient.callApi(
        '/song', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the slapFlaskPublicControllersSongsGetSongGenres operation.
     * @callback module:api/DefaultApi~slapFlaskPublicControllersSongsGetSongGenresCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Genre>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all genres
     * @param {module:api/DefaultApi~slapFlaskPublicControllersSongsGetSongGenresCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Genre>}
     */
    slapFlaskPublicControllersSongsGetSongGenres(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Genre];
      return this.apiClient.callApi(
        '/song/genres', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the slapFlaskPublicControllersSongsGetSongMetrics operation.
     * @callback module:api/DefaultApi~slapFlaskPublicControllersSongsGetSongMetricsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SongMetrics>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns song metrics
     * @param {String} songId The ID of the song
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.forGraph Whether to return additional parameters for making a graph
     * @param {module:api/DefaultApi~slapFlaskPublicControllersSongsGetSongMetricsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SongMetrics>}
     */
    slapFlaskPublicControllersSongsGetSongMetrics(songId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'songId' is set
      if (songId === undefined || songId === null) {
        throw new Error("Missing the required parameter 'songId' when calling slapFlaskPublicControllersSongsGetSongMetrics");
      }

      let pathParams = {
        'song_id': songId
      };
      let queryParams = {
        'for_graph': opts['forGraph']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [SongMetrics];
      return this.apiClient.callApi(
        '/song/{song_id}/metrics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the slapFlaskPublicControllersSongsGetSongs operation.
     * @callback module:api/DefaultApi~slapFlaskPublicControllersSongsGetSongsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all songs
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number
     * @param {String} opts.title The partial title of this song
     * @param {module:api/DefaultApi~slapFlaskPublicControllersSongsGetSongsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    slapFlaskPublicControllersSongsGetSongs(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'title': opts['title']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/songs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the slapListRepetitionPopularityPlots operation.
     * @callback module:api/DefaultApi~slapListRepetitionPopularityPlotsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a list of all users.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.popFacet The page number
     * @param {Number} opts.repFacet The page number
     * @param {module:api/DefaultApi~slapListRepetitionPopularityPlotsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    slapListRepetitionPopularityPlots(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'pop_facet': opts['popFacet'],
        'rep_facet': opts['repFacet']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/plot/rep-pop', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
