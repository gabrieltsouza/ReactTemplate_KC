var ComponentCommunication = (function() {
  var AUTH_API_URL = "http://0.0.0.0:8080";

  var getAuthAPIUrl = function() {
    return AUTH_API_URL;    // Or pull this from cookie/localStorage
  };

  var setAuthAPIUrl = function(AuthAPIUrl) {
    AUTH_API_URL = AuthAPIUrl;     
    // Also set this in cookie/localStorage
  };

  return {
    getAuthAPIUrl: getAuthAPIUrl,
    setAuthAPIUrl: setAuthAPIUrl
  }

})()

export default ComponentCommunication;