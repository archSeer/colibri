import Ember from 'ember';

/**
 * Formats seconds into a time string hh:mm:ss.
 * @param {Number} seconds seconds to format as string
 * @return {String} formatted time string
 */
export function formatTimecode(seconds) {
  var hours = parseInt(seconds / 3600, 10) % 24;
  var minutes = parseInt(seconds / 60, 10) % 60;
  var secs = parseInt(seconds % 60, 10);
  var result, fragment = (minutes < 10 ? "0" + minutes : minutes) + ":" + (secs  < 10 ? "0" + secs : secs);
  if (hours > 0) {
    result = (hours < 10 ? "0" + hours : hours) + ":" + fragment;
  } else {
    result = fragment;
  }
  return result;
}

export default Ember.Helper.helper(formatTimecode);
