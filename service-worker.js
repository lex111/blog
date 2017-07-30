/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/03/06/Tree-shaking-with-Webpack-2-TypeScript-and-Babel/index.html","14d117330710414e9d9c9b9513301ef8"],["/2017/03/23/Apollo-GraphQL-and-Nuxt-shenanigans/diagram.jpg","ec2bcaaffcce307a2d51c8f33f82275e"],["/2017/03/23/Apollo-GraphQL-and-Nuxt-shenanigans/hackaton.jpg","5e5855dbd8cfef639d7ef0a7f31f3821"],["/2017/03/23/Apollo-GraphQL-and-Nuxt-shenanigans/index.html","7f2e57cebe4982f5a07b30712f96f0e9"],["/2017/04/11/Typescript-Lookup-Types-type-safe-properties/index.html","b70bb93898ed4ac194446da1bcc69f08"],["/2017/06/12/Use-Prettier-with-TSLint-and-be-happy/index.html","0975c930841bf90e36435d65583d97ac"],["/2017/06/12/Use-Prettier-with-TSLint-and-be-happy/parrot.jpg","51cd901492d986ef0c43df9482ea4644"],["/2017/06/28/Integrate-TypeScript-in-your-Vue-project/index.html","877dba9a52f8851c30709fa6a196dbe6"],["/2017/06/28/Integrate-TypeScript-in-your-Vue-project/love.jpg","183c88499db8b77b8b949e872928eff5"],["/2017/07/16/Lazy-load-in-Vue-using-Webpack-s-code-splitting/axe.jpg","d67dcd8d17ea98c73212bda65aaf4091"],["/2017/07/16/Lazy-load-in-Vue-using-Webpack-s-code-splitting/index.html","a1bc4f13860a60b7d470f3e703094275"],["/2017/07/25/Apply-infinite-operations-to-an-RxJS-Observable/rxjs.png","803dfb381dbe3ed32a65d9375f562711"],["/2017/07/28/Top-4-tips-to-be-a-happier-developer/happy.jpg","59750c699adc3a459e083e3ed7d1da82"],["/about/index.html","5eff481fff2de5c882c6c4c8c714075b"],["/about/kiara.jpg","6103ce28d65d27b4265fd245c5d6acac"],["/about/kiara2.jpg","4b7873939dbe33275ea3833a2209c4a4"],["/about/nature.jpg","a02949467ff64813c7cbfc6376a0006e"],["/about/salzburg.jpg","153a085bc91e69e2a85fe1d24ded2ff7"],["/alex.jpg","c5f0a8b0939135686807cb4f4fcebed6"],["/archives/index.html","5f3e021ace1aa37602c874fceefa83e9"],["/bigimgs/meetup1.jpg","8d4107484e4682bcf72f1a70b9c65192"],["/css/blueprint-dark.png","fd85a7a074ae27d9d84a5bbe3064e4ed"],["/css/bootstrap-theme.css","e5f6fb08f469dc836cb3609e23694b3a"],["/css/bootstrap-theme.min.css","f0c8fc013c87173a395444fce28cb123"],["/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/highlight.css","b8ffef85700fca68a28bed03eb9114ef"],["/css/main-minimal.css","3af5086a9733e4548c687f80305c31e4"],["/css/main.css","e1d9be2a6f3f0ce5199de4c737fa17d1"],["/css/normalize.css","5743a1a1d31e36b25475d22bf64166e5"],["/css/normalize.min.css","a683993d26e90277c5152e15c3865811"],["/css/prism-okaidia.css","c0c58648a0b32ea5d700452d81483cb9"],["/css/pygment_highlights.css","085bd4c57f9b27110c34f00ce5bf26c7"],["/images/icons/icon-128x128.png","b8d8977dac3ea49767ff6ce7656608c1"],["/images/icons/icon-144x144.png","8adecac063d707dee8b9a624a92d5519"],["/images/icons/icon-152x152.png","634f1fe258bb411102b3dee33f67c866"],["/images/icons/icon-192x192.png","b5b1f886cfdf4e2452b5c41b66cdf046"],["/images/icons/icon-384x384.png","e2fab62947dc47946d668d24b224e986"],["/images/icons/icon-512x512.png","6948608e49bccf882db24fbce618a0f8"],["/images/icons/icon-72x72.png","e0656e32e6673cdb79f4b37885f50da4"],["/images/icons/icon-96x96.png","110b75f339c41ca7f0e6455f5629253d"],["/index.html","17dc3a9953717c4a639d39b337f1f07c"],["/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/js/highlight.min.js","ab5905324441f5be364659b29b23e580"],["/js/jquery-1.11.2.min.js","5790ead7ad3ba27397aedfa3d263b867"],["/js/main.js","b5f92647c6c9fc5592b238f35ea4ec2f"],["/js/sw-register.js","58f672c4ff5ce3707ab400bd7b0544c6"],["/tags/Apollo/index.html","763c5392f8666c6bb46e3a6f34ea9e0a"],["/tags/GraphQL/index.html","763c5392f8666c6bb46e3a6f34ea9e0a"],["/tags/Jest/index.html","63cd8ae211757caff595940cc68b580b"],["/tags/Personal/index.html","763c5392f8666c6bb46e3a6f34ea9e0a"],["/tags/TypeScript/index.html","0254fe6b343e6e71d0b3afa8bb0f30aa"],["/tags/Vue/index.html","be3c9b05f81c69ed43ab01e30987bdf4"],["/tags/Vuex/index.html","c92775c101fe8b25d1cdf702417dc042"],["/tags/Webpack/index.html","73ab0c2f4e99c25a2de24b045c958d3f"],["/tags/index.html","03c5135ca4255ef068dbffe1920f1f36"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});






