/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/07/09/hello-world/index.html","bac7de32e946fe8a8ad890921979f852"],["/2022/07/31/data_line/index.html","1eb979e0f4a57d2a9e0fde17698a0d4b"],["/2022/07/31/earphone/index.html","df9ada0c25bcdd05c451d1262d60c3e0"],["/2022/07/31/socket/index.html","e3b2f9dceddb11bceb33e02e8d4df749"],["/2022/08/07/fan/index.html","ff0bc675d7c4c53059ab88d83b73f38c"],["/2022/08/07/hair dryer/index.html","c21cd581baab76c6eb19085bbcb6fb68"],["/2022/08/07/kettle/index.html","88b44eb4dc0989d46a6e818dcc6075de"],["/2022/08/07/power Bank/index.html","705dfdce022ee63e1fedec27e091b8c0"],["/2022/08/09/computer/index.html","1362ed75dea12f27d5e9a26b5fffbf05"],["/2022/08/09/iphone/index.html","45a38d51ef536ccfd30b84b4c42f46b2"],["/2022/08/11/capacitor/index.html","7ffca44c8e4f65dca796802609aa39da"],["/2022/08/11/diode/index.html","ae8e6a9af7e66156ced0abcd3cf5651a"],["/2022/08/23/IGBT/index.html","bbb9209067be680201a4bd5830d62a3d"],["/2022/08/23/induction cooker/index.html","d8c37bb424448dbdf0ff6ab0a2eab58b"],["/404.html","98b28dc8d9fc66dfa4382bda155e13f7"],["/about/index.html","8c8f067448d3ce3e8a91eddfbf6e7db8"],["/archives/2022/07/index.html","3b0f91c2190d74b31c81691288d3ff34"],["/archives/2022/08/index.html","7b34df4547dfda3350dacdc95395cec8"],["/archives/2022/index.html","fcc6bc5fb3d96fbc1b28bb612d2f8628"],["/archives/2022/page/2/index.html","2bdb856a958d21080b32d67e6b641614"],["/archives/index.html","b5451287ce6fe98ce507b5231d8c9a17"],["/archives/page/2/index.html","eb28e6b8d878bad6a42d721f8c2965f3"],["/artitalk/index.html","43ecd52264d1e9d6b7d7fdba9e146f73"],["/categories/index.html","e67020857bc8be417dc801b2dde62d5f"],["/categories/妙笔生花/index.html","4ee3a51f5a4ed72f8f72f1edb1f62c71"],["/categories/技术文章/index.html","694a14bc9f324b98bd6a8c695bf4d4f1"],["/categories/技术文章/page/2/index.html","2cb8a39c0751a5d1f70c8cbf61113c54"],["/categories/技术文章/中级篇/index.html","0c38007d14cbed95972f52a5283456df"],["/categories/技术文章/基础篇/index.html","ebf93a69573fa7a170111f4b978a6f30"],["/categories/技术文章/电子器件/IGBT/index.html","42d6e39284c668cb14dc29915274f061"],["/categories/技术文章/电子器件/index.html","f207a9221cc360f12b71bd6ec8c0fc8c"],["/categories/技术文章/电子器件/二极管/index.html","ba0be8288a98638cf792a966252378df"],["/categories/技术文章/电子器件/电容/index.html","7788231559ac8cab453b63d5eab442bb"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","71bcbb7001c2eaa69e230c8387af6d08"],["/css/style.8c8d7957.css","8c8d795718362ba125a618a477a83b3e"],["/index.html","983db5fade64c3aee032b86bc7b8c9c7"],["/js/app.af2d54c8.js","af2d54c8bf1bde36cc35777647f0e7bd"],["/js/plugins/aplayer.dbe5eea9.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.8bf0ab10.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.d9437285.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.1aa99ff1.js","1aa99ff13016d89c3e759ebc7eda395e"],["/js/plugins/tags/contributors.aec80453.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.f372da57.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.76bf19b8.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.0e52f222.js","0e52f22209d509c1fb48fc490396c1de"],["/page/2/index.html","d42468335555719023519ac04786548a"],["/service-worker.js","4e1a4d3444f74413757c5a547e5ccc0d"],["/sw-register.js","1f05ee7360ca997126b08fa876897d4f"],["/tags/IGBT/index.html","0c381b6ebf1244e9fc83314106f73a29"],["/tags/index.html","ee22286a14746a0a6122594135750451"],["/tags/二极管/index.html","8084fb58876a6f3b777eb838a6979f1a"],["/tags/元器件/index.html","29e171a8c4c38d78712601d001a9d3fc"],["/tags/充电宝/index.html","ba31f473bce4189267f789a58ff4d217"],["/tags/吹风机/index.html","391837d704a0e831d176dcb3fd828a6f"],["/tags/宣传/index.html","d1c116117548e1a11ef66b45da4b0667"],["/tags/手机/index.html","de26132523dfe8263f98e187012cf091"],["/tags/插排/index.html","82d4d7e0b4de7b0c452595a1a8e040d6"],["/tags/数据线/index.html","191fddf3f40479ac5d957f1e4948b567"],["/tags/热水壶/index.html","fe1a5096b3550302242864d152699f79"],["/tags/电容/index.html","329d7279387316ce9a19fb235d827530"],["/tags/电磁炉/index.html","945ad99d0af4afb2b689efd08589c23f"],["/tags/电脑/index.html","2a971fb145ba4f3b11a7ee6fe37058ea"],["/tags/维修经验/index.html","0f3fa314af1beba76a4b243bd30d9df2"],["/tags/耳机/index.html","b9ff4cad0debb1595f9737e38ee381c5"],["/tags/风扇/index.html","eeef47b73336728bc8b4006a8c499028"],["/workbox-6da860f9.js","b6041e96e78b5058b66b6acfbaf3d2ea"]];
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
