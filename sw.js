/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/07/09/hello-world/index.html","06f6b3d8b3eb9ba76f38bea3159d7a3d"],["/2022/07/31/data_line/index.html","88788926a84eceea190bbf78ba24deff"],["/2022/07/31/earphone/index.html","3bb9fd6b0c0d9584858bb6ac5053cb2d"],["/2022/07/31/socket/index.html","b2cc0c842101e193e150ff304a3bfa2f"],["/2022/08/07/fan/index.html","fba6aa03257b361ccc80303cbd94dffe"],["/2022/08/07/hair dryer/index.html","d04ec3f9b43bbca8f27f9cb6f380eb93"],["/2022/08/07/kettle/index.html","42c68cf5cfd15d6f44ca61e073bd5426"],["/2022/08/07/power Bank/index.html","dc28390779aa249e0379db685ea4d15a"],["/2022/08/09/computer/index.html","df23786dec4eb9364df74d0e0c958d33"],["/2022/08/09/iphone/index.html","2f25d3d9143c52a16cdf67ef2dc727f3"],["/2022/08/11/capacitor/index.html","865c9dee856857a936e4d9eb65fcdb90"],["/2022/08/11/diode/index.html","08f9bfaef165c2a9554e54aaf6889199"],["/2022/08/23/IGBT/index.html","4575c4e64beb3eb77459fdf1ffa99f46"],["/2022/08/23/induction cooker/index.html","eb2c8a14f129e9319b080d8ff7e710b5"],["/404.html","2acb8b8cd14b58f7131a522040949750"],["/about/index.html","b4ff770b92c376e7d02287c7e16ef13d"],["/archives/2022/07/index.html","858d2d545d01ebf97f0a31650c1b00ef"],["/archives/2022/08/index.html","412af244b500a3c7e85e3873ad785e01"],["/archives/2022/index.html","cd21f924afa621f8e40d935c6c2adc07"],["/archives/2022/page/2/index.html","4318fc4c2a30ebac557c66180774867d"],["/archives/index.html","c179f02b7605f2626fe03619f37c7f2d"],["/archives/page/2/index.html","9a8e243b21fa9119b42dbfba2ac9daec"],["/artitalk/index.html","ca4fdde2681e3f926e3f0bb67b0ec682"],["/categories/index.html","66f2d7150c68e34c89a1630a9c1710c4"],["/categories/妙笔生花/index.html","bdcb9a7551ec46d0c02b8aacc2a69467"],["/categories/技术文章/index.html","b7e3894e07ce8629bc8b57fab6f897b3"],["/categories/技术文章/page/2/index.html","37353eaecda66ef93de31def2dbed26e"],["/categories/技术文章/中级篇/index.html","71104574318aedcc819d9c91ff5fd8f6"],["/categories/技术文章/基础篇/index.html","0d4ec7951c5e108323e1f2d2469add06"],["/categories/技术文章/电子器件/IGBT/index.html","0956d038b19a034ed60887a47940db4e"],["/categories/技术文章/电子器件/index.html","cbeaa39bab9dca800b94a6c8e51cfb2c"],["/categories/技术文章/电子器件/二极管/index.html","71bdaabf45552a6c8bb842d136d74666"],["/categories/技术文章/电子器件/电容/index.html","2a787793df22196bd7a773cf76eb19b3"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","71bcbb7001c2eaa69e230c8387af6d08"],["/css/style.8c8d7957.css","8c8d795718362ba125a618a477a83b3e"],["/index.html","bb61a195b077b0d643da6e7f97bc1a01"],["/js/app.af2d54c8.js","af2d54c8bf1bde36cc35777647f0e7bd"],["/js/plugins/aplayer.dbe5eea9.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.8bf0ab10.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.d9437285.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.1aa99ff1.js","1aa99ff13016d89c3e759ebc7eda395e"],["/js/plugins/tags/contributors.aec80453.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.f372da57.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.76bf19b8.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.0e52f222.js","0e52f22209d509c1fb48fc490396c1de"],["/page/2/index.html","4887fdd292ba0a9a98d7ce9f67af1577"],["/service-worker.js","7823a8fedab1feb62be20e40e70f4eb2"],["/sw-register.js","9c480c5593d6f1393f01eaa1133fdc22"],["/tags/IGBT/index.html","6a30ec0b324325d5b6cd0e76f2dd35d2"],["/tags/index.html","445f0b056e6987bd4559abad6c20177b"],["/tags/二极管/index.html","bff35f1c56074c7513d343f0f06dff05"],["/tags/元器件/index.html","214eabf0c7a356e6e1e16e0a5109fe01"],["/tags/充电宝/index.html","c9dad1bdf4d438e34a1dbfdea15d5fae"],["/tags/吹风机/index.html","8d7d852e9d3f85609688693c6946ac3f"],["/tags/宣传/index.html","9d9ec95d69361750560ba839d2516291"],["/tags/手机/index.html","c61692bed48da1af713962267175b7d9"],["/tags/插排/index.html","a567874c36cc365b37419d74ade6dfad"],["/tags/数据线/index.html","b152012b340f608d93cdffdb0a91921b"],["/tags/热水壶/index.html","ac30bedfdeb0ee8b7161d64e9a75b9f1"],["/tags/电容/index.html","7240548a9ae09bd00dd11bfcbc17a0de"],["/tags/电磁炉/index.html","8e0b14e79fa7f407a1d9b461f3603cee"],["/tags/电脑/index.html","89856bb6aa429aaf688797012633845b"],["/tags/维修经验/index.html","bc07ae95689998bf94a3c1c161370024"],["/tags/耳机/index.html","c3a4b1368d263c213c64ac1ea92069a1"],["/tags/风扇/index.html","2bcd5302c82dd005c40cccba0d9955a2"],["/workbox-6da860f9.js","b6041e96e78b5058b66b6acfbaf3d2ea"]];
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
