/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/07/09/hello-world/index.html","747b21e70e64d9f90b06a551d3da8e22"],["/2022/07/31/data_line/index.html","70c616a7894731cc68c9f7f0841f5640"],["/2022/07/31/earphone/index.html","9dd640a4236561725c323fbcff859b42"],["/2022/07/31/socket/index.html","2341b68135b4691b57859ff0b1d9742c"],["/2022/08/07/fan/index.html","460040ba2a32073bceb6a78366c03b83"],["/2022/08/07/hair dryer/index.html","fa57102b52a6209dee665c229c5f0762"],["/2022/08/07/kettle/index.html","5345152740b49bb152c3640806a56b26"],["/2022/08/07/power Bank/index.html","c9658d6d5330cf899995293fa5cdacc1"],["/2022/08/09/computer/index.html","def920ee9d72046a805a726d4b8abd83"],["/2022/08/09/iphone/index.html","e090ff6989d503a883abc32ebca72889"],["/2022/08/11/capacitor/index.html","1f70d1bfcf872d95b364807fd51d54d5"],["/2022/08/11/diode/index.html","7d9b36bd429d59a09496b2cf56b0f4fd"],["/2022/08/23/IGBT/index.html","26c4f8117c19f90d847d5d5950e57e71"],["/2022/08/23/induction cooker/index.html","1334a0316a36e236087dae0d9745c6ef"],["/404.html","da05355e903a2ae4a54442826ebffe65"],["/about/index.html","a1b0c3f0b9a478cca9d714da65c5d489"],["/archives/2022/07/index.html","e5b67b7ace61f281331f00599cfee8e4"],["/archives/2022/08/index.html","527cc54a5467517ca792bf4fb01d722f"],["/archives/2022/index.html","7a70f07ee47947c45a96e2022a1e3df9"],["/archives/2022/page/2/index.html","c5627ef257c2e81ac16bfe364e3731c4"],["/archives/index.html","56e11bb2e17a9d17abe7c9f536b6a75e"],["/archives/page/2/index.html","8b8e01b6fdf2908ac20173f5eb83f9fc"],["/artitalk/index.html","03b35413f99e5646b0d7ded591e81868"],["/categories/index.html","1b28ad3a267ce6022b2458d1e5806f09"],["/categories/妙笔生花/index.html","b333420896cf0293088df0befb8565f7"],["/categories/技术文章/index.html","3fa934658330443093703ed5b48bde19"],["/categories/技术文章/page/2/index.html","8fe2db7cfbf83a0b747df5ed3141cf99"],["/categories/技术文章/中级篇/index.html","59abbc0651dfef00a0ba21af0a656b79"],["/categories/技术文章/基础篇/index.html","bae69dd0a949593e4bb05fb60cace057"],["/categories/技术文章/电子器件/index.html","598294112a392206098f04ef391a4462"],["/categories/技术文章/电子器件/二极管/index.html","eb4f91f54a389e702a03f503cda31820"],["/categories/技术文章/电子器件/电容/index.html","dee1301df0e4bf3120c624ee4aa19145"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","71bcbb7001c2eaa69e230c8387af6d08"],["/css/style.8c8d7957.css","8c8d795718362ba125a618a477a83b3e"],["/index.html","c2abda581568d4f9826332a28b892753"],["/js/app.af2d54c8.js","af2d54c8bf1bde36cc35777647f0e7bd"],["/js/plugins/aplayer.dbe5eea9.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.8bf0ab10.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.d9437285.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.1aa99ff1.js","1aa99ff13016d89c3e759ebc7eda395e"],["/js/plugins/tags/contributors.aec80453.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.f372da57.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.76bf19b8.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.0e52f222.js","0e52f22209d509c1fb48fc490396c1de"],["/page/2/index.html","e29fd6262a56d0a7ab3c027cb9343dbd"],["/service-worker.js","8cab3818cd5858a4c6800e5c5aefc5dd"],["/sw-register.js","28cfc6582af14afd1f32cff8e5a963b0"],["/tags/index.html","b32fcb682dc48ed5af71f06b87ff04cc"],["/tags/二极管/index.html","38067a196e833afa34e55ab166c49a05"],["/tags/元器件/index.html","31cfc510d62779bb45fc1ba230cacc64"],["/tags/充电宝/index.html","1e3cc28d1f2cb73d3dd449e9b6d2e1d7"],["/tags/吹风机/index.html","0867546a3f6face5cffd80964f3478c3"],["/tags/宣传/index.html","a1e0cb3881450172e2f5a5f69373ce59"],["/tags/手机/index.html","d7ac91148c486f3eccf8249b22cee5e2"],["/tags/插排/index.html","6c36500398ab6157786f979fc50212f5"],["/tags/数据线/index.html","0a50b2c2bec5462d5173f4034aa887c5"],["/tags/热水壶/index.html","b6b104ac711c08b836cab5a5457ae505"],["/tags/电容/index.html","096074fabb05455360dfc6e663a2a992"],["/tags/电磁炉/index.html","c91aa9c79cef3493200ce217354fabb7"],["/tags/电脑/index.html","bad1a62f7d7227dc39730fc8c4032dd1"],["/tags/维修经验/index.html","79bb124d5db10d4c98481a8ec7f2806d"],["/tags/耳机/index.html","d415751b3edead6255c82f109832402b"],["/tags/风扇/index.html","bf2c2f4513f7134ff39eaca478da8393"],["/workbox-6da860f9.js","b6041e96e78b5058b66b6acfbaf3d2ea"]];
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
