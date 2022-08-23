/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/07/09/hello-world/index.html","2373c08bfea8772811c413d92635c85c"],["/2022/07/31/data_line/index.html","731802ddbc9b0a400a01122fa171d987"],["/2022/07/31/earphone/index.html","bea317f1b22492fe9f467db47887aaeb"],["/2022/07/31/socket/index.html","d77182af61e6d795fbca7460a422a3f3"],["/2022/08/07/fan/index.html","ee43f5d3203affb06336624d5cb69b01"],["/2022/08/07/hair dryer/index.html","945dad947835b982efc15801e0f9d8ac"],["/2022/08/07/kettle/index.html","8370e313cc328128e03a155c3e218ee7"],["/2022/08/07/power Bank/index.html","6eabfc82cfb9f5df8b9e3e4e5780c69c"],["/2022/08/09/computer/index.html","ed08a0fbfae12411e1b724e18ca9268e"],["/2022/08/09/iphone/index.html","eed56789562fb5663728c9006d0fb1ad"],["/2022/08/11/capacitor/index.html","ee202263f3e4b0ad5d5afb2318013b84"],["/2022/08/11/diode/index.html","3ae1d34ddfc748f9b6ce78bbda5b6502"],["/404.html","885d45ae3719c07c11029884d12bb7f3"],["/about/index.html","8773f0e76f95abdb012bf862e1655821"],["/archives/2022/07/index.html","aa3ee80b38526ba94bc68dd0fad0928d"],["/archives/2022/08/index.html","e2faa5517441a1bc89ec0c7af4d46b2d"],["/archives/2022/index.html","1745f47939a0e9b37c143c9b30750885"],["/archives/2022/page/2/index.html","ae413cc53f2fece8f5af103ce8103e95"],["/archives/index.html","bafa99dcc0a3400240994294625d097e"],["/archives/page/2/index.html","bedd57638faa548fa7a04e6121195d87"],["/artitalk/index.html","83f952636bf0d0ec42368349da38e1cd"],["/categories/index.html","72f74f75f474361656777bdfc08d9cab"],["/categories/妙笔生花/index.html","fadd0a8d12065ed6e413866919f68611"],["/categories/技术文章/index.html","33ae33ad92d7d7862fb2343c13e7d502"],["/categories/技术文章/page/2/index.html","34d8fcda39d1f363e9790b380f880836"],["/categories/技术文章/中级篇/index.html","06492bdeee2c448db8534c9ff580bca1"],["/categories/技术文章/基础篇/index.html","fd69da8b1a9be0bb1bc713cb6d2d814e"],["/categories/技术文章/电子器件/index.html","63915698b29c70a0e11a92f7adc0ce6b"],["/categories/技术文章/电子器件/二极管/index.html","9bd93150b83f80a8f107688680a2c99d"],["/categories/技术文章/电子器件/电容/index.html","699122d1f83fb0c1779f653a6ef067f7"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","71bcbb7001c2eaa69e230c8387af6d08"],["/css/style.8c8d7957.css","8c8d795718362ba125a618a477a83b3e"],["/index.html","d94ad1706fd7311225404224fa8d59d7"],["/js/app.af2d54c8.js","af2d54c8bf1bde36cc35777647f0e7bd"],["/js/plugins/aplayer.dbe5eea9.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.8bf0ab10.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.d9437285.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.1aa99ff1.js","1aa99ff13016d89c3e759ebc7eda395e"],["/js/plugins/tags/contributors.aec80453.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.f372da57.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.76bf19b8.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.0e52f222.js","0e52f22209d509c1fb48fc490396c1de"],["/page/2/index.html","b4e5527577d4a0b3dbb5e94ba9ebbe7b"],["/service-worker.js","ee45ddf0c13c3ae5f67d89a1c35414af"],["/sw-register.js","c8227ac5cb1689eca304ec47f86cfc90"],["/tags/index.html","592145993f3a71269687a911fd8158db"],["/tags/二极管/index.html","cc3ed96400c1a5ecc19fd3de59a12040"],["/tags/元器件/index.html","3198c1968568dc4e7306895f6d0dfd3f"],["/tags/充电宝/index.html","533d4daa8d195e7a74a54eb4c4c73fc0"],["/tags/吹风机/index.html","65f8cde9bbb6f737f7d305aa2c49a9a2"],["/tags/宣传/index.html","77162d07db9fc56b2853e2dde2393074"],["/tags/手机/index.html","adff21f011de8787f9d716f31eafaa71"],["/tags/插排/index.html","ad53eab4b6c81c5ae51b6415bd82edcc"],["/tags/数据线/index.html","dfb4229c43368180338cdd7592014714"],["/tags/热水壶/index.html","8b29e87bc709f75ccd76a9702c15d133"],["/tags/电容/index.html","76c7e33aacf4cdb0228576daa04b624f"],["/tags/电脑/index.html","449a70d0c63801b12dfd11cbab478879"],["/tags/维修经验/index.html","a3f6abf273d41101d9824d19bf33148f"],["/tags/耳机/index.html","7d6672c0433fc76e799215d279fbfc78"],["/tags/风扇/index.html","2b88bb739227ab630ef06c8ea65f3175"],["/workbox-6da860f9.js","b6041e96e78b5058b66b6acfbaf3d2ea"]];
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
