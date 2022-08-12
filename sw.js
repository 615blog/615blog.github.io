/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/07/09/hello-world/index.html","91e7007a2c65ddb60be6f0ef51c44180"],["/2022/07/31/data_line/index.html","7a1fa108079d0cde5de31e26ac0e0a4f"],["/2022/07/31/earphone/index.html","037b93b296b57936f9c7f87e03f92df3"],["/2022/07/31/socket/index.html","53e291c64f88d33d451558771fae08fa"],["/2022/08/07/fan/index.html","48a6d26043d013cb407190aae5ce380d"],["/2022/08/07/hair dryer/index.html","96cc55c798d16b154c5f8d3064bf3c4d"],["/2022/08/07/kettle/index.html","38a452bb8a921e5ed8aa396f3ed9e984"],["/2022/08/07/power Bank/index.html","47e54951d0c27565b155666ed37d8e36"],["/2022/08/09/computer/index.html","c06930b7cf4597e330dea8b8dbf666bb"],["/2022/08/09/iphone/index.html","1a8f7229a208add96dcef3d80d24a9a4"],["/2022/08/11/capacitor/index.html","bb4880ae5f24fadf48701ecab93d6270"],["/2022/08/11/diode/index.html","088648172b39d3bc9faaadfa58e79e2d"],["/404.html","d2021d361951b20931b4a6b609a19e0b"],["/about/index.html","ece2b33887bccd9243c4eab9fdee765c"],["/archives/2022/07/index.html","806fdd19e3b4682552be83b8a814f553"],["/archives/2022/08/index.html","a128539c3c9b1aec07b2b6c6acc482de"],["/archives/2022/index.html","2386f58d9192b22e454b2a73bd85930a"],["/archives/2022/page/2/index.html","a3988eb911cdfdc0b4272728a3e512c7"],["/archives/index.html","d060b4f575b211559088f3e7c0077a0e"],["/archives/page/2/index.html","40c31c09e524abcfe2448fbdcb6ff8b3"],["/artitalk/index.html","5017f6324d8721803b3b3adb8427c168"],["/categories/index.html","232b66e5ec8f59ce0a8652745f8c7a7e"],["/categories/妙笔生花/index.html","b7164442e906c2724413fccd9a4123aa"],["/categories/技术文章/index.html","010b746afeed29c984ae79fbc6856381"],["/categories/技术文章/page/2/index.html","91effd366c329e1d94a28fbc88cfad60"],["/categories/技术文章/中级篇/index.html","73ceb2fbaaf6347e1c1c558959358e90"],["/categories/技术文章/基础篇/index.html","51e68904d9956f77d7f76d68adc628f8"],["/categories/技术文章/电子器件/index.html","c561def81c5be4dcead7fd00a1db2f6d"],["/categories/技术文章/电子器件/二极管/index.html","971b202a645ec7b0c6c641bbff570864"],["/categories/技术文章/电子器件/电容/index.html","b97af6a603b885c56b819eb93c634c7a"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","71bcbb7001c2eaa69e230c8387af6d08"],["/css/style.8c8d7957.css","8c8d795718362ba125a618a477a83b3e"],["/index.html","f05d11950cc6112b79e66059168083e0"],["/js/app.af2d54c8.js","af2d54c8bf1bde36cc35777647f0e7bd"],["/js/plugins/aplayer.dbe5eea9.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.8bf0ab10.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.d9437285.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.1aa99ff1.js","1aa99ff13016d89c3e759ebc7eda395e"],["/js/plugins/tags/contributors.aec80453.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.f372da57.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.76bf19b8.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.0e52f222.js","0e52f22209d509c1fb48fc490396c1de"],["/page/2/index.html","f14349f149d40d43a3c4f2beff554356"],["/service-worker.js","9079011235b1284b41e8cc8d76835f6a"],["/sw-register.js","cb984b8535066806e5d7decd1d6cfff0"],["/tags/index.html","bf43af948003d9324ed691836771a7a7"],["/tags/二极管/index.html","a4a7837e197dab762b20fdb260b1de56"],["/tags/元器件/index.html","5fe5144d7451f2b677ad6a7cc0f3f1a3"],["/tags/充电宝/index.html","59147ef862d0f2c3efec18ee35d3307d"],["/tags/吹风机/index.html","d0b3225e506f32aa0cd017711d8d4361"],["/tags/宣传/index.html","3292dc379037e0fc869851a1dbf3021f"],["/tags/手机/index.html","9211a86fa8c3b0e9b898a58b4c77d6a6"],["/tags/插排/index.html","28bbbfdccd13edaf3e42b1a624b012ec"],["/tags/数据线/index.html","d1ca27642b14555a02755d969866af2f"],["/tags/热水壶/index.html","487827c7cc3c94694a65fb4f863e6d88"],["/tags/电容/index.html","d7d82e8e83f8dc88c37943bb03b77564"],["/tags/电脑/index.html","5a1d55464ce0fad72573dc8251debfd4"],["/tags/维修经验/index.html","f79b7d7ba091d8c086e4b778b5eb8c76"],["/tags/耳机/index.html","289e711fcee1baca7170b7e19391c8be"],["/tags/风扇/index.html","b5d2cef8681c00c799b00b360110e6f2"],["/workbox-6da860f9.js","b6041e96e78b5058b66b6acfbaf3d2ea"]];
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
