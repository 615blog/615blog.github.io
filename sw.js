/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/07/09/hello-world/index.html","f86adf6db0c3c9f4192447badda96617"],["/2022/07/31/data_line/index.html","1f244db0e0d6198bbe8f9b260637709e"],["/2022/07/31/earphone/index.html","5b21406411b6ee052ec1a380a8db0329"],["/2022/07/31/socket/index.html","d29c611ac912ba2bfdc9d83d98eb3bc9"],["/2022/08/07/fan/index.html","760ab672ffa28e387a52eb0305c7e7bb"],["/2022/08/07/hair dryer/index.html","2496fa80afdb01316cfe623c90f4b61b"],["/2022/08/07/kettle/index.html","1260b1f2902e6aa86d11566e9517aaec"],["/2022/08/07/power Bank/index.html","de8420a0550e8e094c5e54a48d9d8715"],["/2022/08/09/computer/index.html","e1f4867c2a0e131dd811c80e9373c6cf"],["/2022/08/09/iphone/index.html","f8d54fe386355bb899716516baaf5d62"],["/2022/08/11/capacitor/index.html","9e3b6e1beec773a43049492b0edbaad8"],["/2022/08/11/diode/index.html","2110174f3aa31d8701d32bd02b04e808"],["/404.html","621633606afafd189379ed0968717d2e"],["/about/index.html","ae54979a70d90aaf05850b08461f75c5"],["/archives/2022/07/index.html","f33435999ae42b43492a4f42f6cb91a9"],["/archives/2022/08/index.html","e8286bf624a4fad350997faee7610e4f"],["/archives/2022/index.html","74810bf94759dc70fc3f812a5f1da3a7"],["/archives/2022/page/2/index.html","b38e08cf72793645d706335ebfa301aa"],["/archives/index.html","48230014951d2736d6d7505e1ef12892"],["/archives/page/2/index.html","8733a4ed2ddfa76c527859de139d9de7"],["/artitalk/index.html","daec9a8b8fe302f797020f4555ff3dc7"],["/categories/index.html","d9dfb8ba8fd39c79d11085a4ca4777d0"],["/categories/妙笔生花/index.html","f7f8b4554da2c89c5a3c42045d85d11c"],["/categories/技术文章/index.html","6b7a738dbcdb0a936459b0673549e2d8"],["/categories/技术文章/page/2/index.html","a9837c28cd0e343f36ddb4fb3d0cbacd"],["/categories/技术文章/中级篇/index.html","fddc8e39356a6b00c82c801257b6d0a9"],["/categories/技术文章/基础篇/index.html","ee536ff465b9cdb2b48efb97661a43a6"],["/categories/技术文章/电子器件/index.html","5a34c1a4b3070a1306db71ca35d8a6c7"],["/categories/技术文章/电子器件/二极管/index.html","b73c17bdfd3f5df0f825bb7ee064b3cd"],["/categories/技术文章/电子器件/电容/index.html","4fdc6970de47676da95c9510b69d148a"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","71bcbb7001c2eaa69e230c8387af6d08"],["/css/style.8c8d7957.css","8c8d795718362ba125a618a477a83b3e"],["/index.html","6c596e50951292a72237f62547b48c3a"],["/js/app.af2d54c8.js","af2d54c8bf1bde36cc35777647f0e7bd"],["/js/plugins/aplayer.dbe5eea9.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.8bf0ab10.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.d9437285.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.1aa99ff1.js","1aa99ff13016d89c3e759ebc7eda395e"],["/js/plugins/tags/contributors.aec80453.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.f372da57.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.76bf19b8.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.0e52f222.js","0e52f22209d509c1fb48fc490396c1de"],["/page/2/index.html","9b03553e5759886090096a8860d46d48"],["/service-worker.js","e6c49a06c6115f69d8a3a0e00e7d8eb7"],["/sw-register.js","df751f91084ad345cc31144a39afd4e0"],["/tags/index.html","293b22501a5b7136ab669297cd02de9a"],["/tags/二极管/index.html","d4e25a711b1e1ba2a8276cf21734c7b2"],["/tags/元器件/index.html","2173317b0ca2f53e82f26e3ac86eb1b5"],["/tags/充电宝/index.html","ae50d0460997922c020aafddfa7f7537"],["/tags/吹风机/index.html","5fc7d825533009b99bdb6b02f71f2e49"],["/tags/宣传/index.html","d8b7c491f272e38d26e93ca7f3eb5680"],["/tags/手机/index.html","cc55f162f0eb9715932eb4fffa69a32a"],["/tags/插排/index.html","38879d1a40807fcb7a9cce9078243e04"],["/tags/数据线/index.html","580a1614e2b43b867b3a5ec8c19724c7"],["/tags/热水壶/index.html","21cb1bb34c11103669d5f2414b17776a"],["/tags/电容/index.html","a8202af5eac6a64d94a1d0a7c1eaf4c6"],["/tags/电脑/index.html","b72462bbd33a119c4e8a1fd68467d36e"],["/tags/维修经验/index.html","3b5b1e56edc80d3c8b7bde07dd1cb3b5"],["/tags/耳机/index.html","a0f8313ab07d155e6fa835d5348e9cfd"],["/tags/风扇/index.html","8204fe14e42da06467b36776a08fd1fe"],["/workbox-6da860f9.js","b6041e96e78b5058b66b6acfbaf3d2ea"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
