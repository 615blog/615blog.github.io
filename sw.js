/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/07/09/hello-world/index.html","22003452a331cccd709496e008cb5e95"],["/2022/07/31/data_line/index.html","ee7a135f730a497de5349db3b782f3f4"],["/2022/07/31/earphone/index.html","197806ea3252ce3fa2caa01339aaa4e1"],["/2022/07/31/socket/index.html","136b55da98d9f93852a556e087f09c85"],["/2022/08/07/fan/index.html","03cee43e4a53c3aa1345c31334f80095"],["/2022/08/07/hair dryer/index.html","bb7a3b19be12696139d7eb69e52d8183"],["/2022/08/07/kettle/index.html","02e92208f4ae66ffc5004b4d13ddccc0"],["/2022/08/07/power Bank/index.html","d166c48cfb1abcea2047617930e8d117"],["/2022/08/09/computer/index.html","62c7480ddd14ce08d0106388000ddf99"],["/2022/08/09/iphone/index.html","72b1aa61a655b7933b1b6dbf004ed60d"],["/2022/08/11/capacitor/index.html","c2f3d82139b46a93622ea031ee43f420"],["/2022/08/11/diode/index.html","aac49f194b1848dfdc4e03c4879429e1"],["/2022/08/23/induction cooker/index.html","377c11120542a0784c351a025b9a9954"],["/404.html","b15df2a6ebc9e32ba80eb0854380d0d1"],["/about/index.html","44684a1c0815d0c3781b5eb90013bb59"],["/archives/2022/07/index.html","eea6a8020370322464a4d505117b51a8"],["/archives/2022/08/index.html","0ada35bbcdf76a1d880edec84ca77cb1"],["/archives/2022/index.html","8532881e76c984ec872fc835fe3f0ecf"],["/archives/2022/page/2/index.html","52ab306ab6501b58376161274a44e419"],["/archives/index.html","906420ea5ee3607040cd16a490b50d16"],["/archives/page/2/index.html","8c1db5b3ca7efe1b61d0ea66a022ebe7"],["/artitalk/index.html","c5e442f0d22986297d48d7850f2f3fd4"],["/categories/index.html","fd9c98ab1e100239a66e65cded52d1e9"],["/categories/妙笔生花/index.html","89d377a15e8cab2e0a9be3c72243b6d7"],["/categories/技术文章/index.html","f1786cbe63ac87a7967ea838156e1932"],["/categories/技术文章/page/2/index.html","63997412c6f1df19d3a65728fc9f377d"],["/categories/技术文章/中级篇/index.html","0f72f4ea5a40e7e354a48ee7d9dfc458"],["/categories/技术文章/基础篇/index.html","6bea69cc13f1174ac6acada5c06af94b"],["/categories/技术文章/电子器件/index.html","e6aad63e3d963a00346535c0d86d791b"],["/categories/技术文章/电子器件/二极管/index.html","8326919d282dd2ac489da858bb0ccde4"],["/categories/技术文章/电子器件/电容/index.html","54944c1cdf78e0ba0e2a230d96074f67"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","71bcbb7001c2eaa69e230c8387af6d08"],["/css/style.8c8d7957.css","8c8d795718362ba125a618a477a83b3e"],["/index.html","82d1f137f4e2a5775fda7c11f3f4f141"],["/js/app.af2d54c8.js","af2d54c8bf1bde36cc35777647f0e7bd"],["/js/plugins/aplayer.dbe5eea9.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.8bf0ab10.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.d9437285.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.1aa99ff1.js","1aa99ff13016d89c3e759ebc7eda395e"],["/js/plugins/tags/contributors.aec80453.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.f372da57.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.76bf19b8.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.0e52f222.js","0e52f22209d509c1fb48fc490396c1de"],["/page/2/index.html","78852b9464c25da43a1e0fc7a7a5b8f3"],["/service-worker.js","1cc88b477655e71d79d347d55602b442"],["/sw-register.js","4504c893b694ebe6e96464f91b25ed90"],["/tags/index.html","8b3518488d1e8c650be74eb371fc0c4a"],["/tags/二极管/index.html","653f3dfc75a24caf8870ef49d81f5349"],["/tags/元器件/index.html","cf7d19b849a6b79be754570b998b6fca"],["/tags/充电宝/index.html","42bb9cb91b260c10ba2cd8dcca8d1c55"],["/tags/吹风机/index.html","a7518e1b163e072f509a4af83eceb62c"],["/tags/宣传/index.html","b7030f1fd990a42a261f9f2192a6b1b2"],["/tags/手机/index.html","44e84d8ba0458bb14e2325ce90259b01"],["/tags/插排/index.html","194325a7bed3be37dd57b00b95e5ea1b"],["/tags/数据线/index.html","0c38869da6268520dbcb76f7bc661926"],["/tags/热水壶/index.html","1f5e40a6e5179df1b86e92b09f406276"],["/tags/电容/index.html","e2a089f6dd428e0003672ce794644134"],["/tags/电磁炉/index.html","62329b99ae8cec640406c920c004bd64"],["/tags/电脑/index.html","344385d006028b451aa1744771007eae"],["/tags/维修经验/index.html","7db4d15d9fa39330a1776682dc32f27a"],["/tags/耳机/index.html","ecc1f20588f00cebb3af104def6f5d13"],["/tags/风扇/index.html","1d09446bc277f689a397513352569d1e"],["/workbox-6da860f9.js","b6041e96e78b5058b66b6acfbaf3d2ea"]];
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
