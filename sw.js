/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/07/09/hello-world/index.html","38b105a1259ff43c2deabee8b4497756"],["/2022/07/31/data_line/index.html","dbc6c5266c2a605328d8aed18319ff0f"],["/2022/07/31/earphone/index.html","8067527ea35753419e98917baf1731fd"],["/2022/07/31/socket/index.html","398ac6ccedffef8e2b991225404c66e3"],["/2022/08/07/fan/index.html","ce05b283872713132c9296e33f6b07b8"],["/2022/08/07/hair dryer/index.html","e79df5655c0fe134dd7ec23bfd082f2e"],["/2022/08/07/kettle/index.html","8ec04e18e4df0b57fa3db26efaa8427e"],["/2022/08/07/power Bank/index.html","160fc426dd8993de99451e3782183155"],["/2022/08/09/computer/index.html","18ea72ceceab6109dad3e0247f2bb5c3"],["/2022/08/09/iphone/index.html","464faf66fdac2d20e60d0077ed20f3b2"],["/2022/08/11/capacitor/index.html","76ce6166c31a4024b985fa092bf94e90"],["/2022/08/11/diode/index.html","51c2967f6a9be2ba7570eeaff84c6a6b"],["/2022/08/23/IGBT/index.html","dfe7da221aa5ce0481e98cae7e40bbf9"],["/2022/08/23/induction cooker/index.html","a27c27565ce587411f21a11ed7d25a7b"],["/404.html","814fc911ef22dd00bd6969f22ca64625"],["/about/index.html","7d2ff7d86ebdfdb4d4944d9f70aa7a20"],["/archives/2022/07/index.html","628d950d66218e3b630af3298c17cd79"],["/archives/2022/08/index.html","40801449a06fa8ebdd9d4c5b1c31252f"],["/archives/2022/index.html","d7fec1e0fb7fd2a2b2dde947b6d4bd73"],["/archives/2022/page/2/index.html","f14c1aa9aafe5731e9be5ef01e87b1ac"],["/archives/index.html","4b45a9a72dc3113218829310cce20540"],["/archives/page/2/index.html","766c98a15033eb0443fe2d54861c8d20"],["/artitalk/index.html","88b19fdc32a3a502032ae7be4865c659"],["/categories/index.html","705ee049aec1fffae933dd425f8f6ccd"],["/categories/妙笔生花/index.html","e80b17de92c9b55da42ac74a2f4e554a"],["/categories/技术文章/index.html","0e6f156665ea9d0c86832783ddc714b8"],["/categories/技术文章/page/2/index.html","af7b681b986d5365d8fca8228126b914"],["/categories/技术文章/中级篇/index.html","ee0eebea03e8728a59e90d26869fd391"],["/categories/技术文章/基础篇/index.html","1539435353a6e345e96d3bb001eae908"],["/categories/技术文章/电子器件/IGBT/index.html","43a0cbddf415d0611a557f29386841b2"],["/categories/技术文章/电子器件/index.html","0c430e82ebb5dc32c4fbe55b6c73da4e"],["/categories/技术文章/电子器件/二极管/index.html","e209c89f4466e74efba6c27ac7ffb51e"],["/categories/技术文章/电子器件/电容/index.html","f66bc5ffe6cbad32bd471d3767b54c04"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","71bcbb7001c2eaa69e230c8387af6d08"],["/css/style.8c8d7957.css","8c8d795718362ba125a618a477a83b3e"],["/index.html","27e5a6c6a1117f11154e86b1b1da124c"],["/js/app.af2d54c8.js","af2d54c8bf1bde36cc35777647f0e7bd"],["/js/plugins/aplayer.dbe5eea9.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.8bf0ab10.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.d9437285.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.1aa99ff1.js","1aa99ff13016d89c3e759ebc7eda395e"],["/js/plugins/tags/contributors.aec80453.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.f372da57.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.76bf19b8.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.0e52f222.js","0e52f22209d509c1fb48fc490396c1de"],["/page/2/index.html","c71dbdb2bf954d8ba0715c4c6cd8a786"],["/service-worker.js","316147e3ef175d3ae6db38e12ddfffe8"],["/sw-register.js","bb300d0f7745e829164ae88407ddf5ef"],["/tags/IGBT/index.html","f4d7f0bdb08ef424f7794b757f7325b6"],["/tags/index.html","252263bf483ca6398afbc9f5559ab431"],["/tags/二极管/index.html","be1de4dbfd8ce83a32cdae15f6704608"],["/tags/元器件/index.html","a00cced21cdbb068b3b1ce3a38c69d6f"],["/tags/充电宝/index.html","60a182416cec913f34762de2a141344a"],["/tags/吹风机/index.html","bbf3fd548077d03d6fbda7087c4ecb5c"],["/tags/宣传/index.html","006c664ef3ee22da85c30093b57cdea6"],["/tags/手机/index.html","cd8638c61663e184c6f058bb4fa9da93"],["/tags/插排/index.html","2bb3b72a235cddb74a478d9ebad2cf85"],["/tags/数据线/index.html","961c59fd249e931e01190f705520a3d2"],["/tags/热水壶/index.html","1d29899a4319bf63232260ccef00ac3e"],["/tags/电容/index.html","d7de4599e0b53cc6e5be432232c4cc5b"],["/tags/电磁炉/index.html","5cbcd2c1aa70bf55237fed34afc834e4"],["/tags/电脑/index.html","f3f8ed6519e3117c8cd35a9964705745"],["/tags/维修经验/index.html","c72ae4ee9837b9a70c2394231cfddc46"],["/tags/耳机/index.html","c8492f15b65221af9a62e8b559732fe8"],["/tags/风扇/index.html","55a3ae9de4870f750dd1b26b49012bd0"],["/workbox-6da860f9.js","b6041e96e78b5058b66b6acfbaf3d2ea"]];
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
