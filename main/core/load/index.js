import { sandbox } from '../sandbox';
import { fetchUrl } from '../utils/fetch';
import { findAppByName } from '../utils/filter';
import { getAppList } from "../cache"

const cache = {};

// 加载和渲染html
export const htmlLoader = async (app) => {
    const { container, entry, name } = app
    const [dom, scripts] = await htmlParser(entry, name);

    const containerEle = document.querySelector(container);
    if (!containerEle) {
        throw Error(` ${name} 的容器不存在`);
    }

    containerEle.innerHTML = dom;
    scripts.map((item) => {
        sandbox(item, app);
    });
}


// 解析html
export const htmlParser = async (url, appName) => {
    if (cache[appName]) {
        return cache[appName];
    }
    const divEle = document.createElement('div');

    let allScripts = [];
    divEle.innerHTML = await fetchUrl(url);

    const [scriptUrls, scripts, dom] = jsParser(divEle, findAppByName(appName));
    const fetchedScript = await Promise.all(scriptUrls.map(async url => await fetchUrl(url)));

    allScripts = [...scripts, ...fetchedScript]
    cache[appName] = [dom, allScripts];

    return [dom, allScripts];
}

// 解析js
export const jsParser = (root, app) => {
    const scriptUrls = [];
    const scripts = [];

    function deepParser(ele) {
        const children = ele.children;
        const parent = ele.parentNode;

        // 处理位于 script 标签中的 js 文件
        if (ele.nodeName.toLowerCase() === 'script') {
            const src = ele.getAttribute('src');
            if (!src) {
                scripts.push(ele.outerHTM);
            } else {
                if (src.startsWith('http')) {
                    scriptUrls.push(src);
                } else {
                    scriptUrls.push(`http:${app.entry}/${src}`);
                }
            }

            if (parent) {
                const comment = document.createComment('此 js 文件已被微前端替换');
                // 在 dom 结构中删除此文件引用
                parent.replaceChild(comment, ele);
            }
        }
        // 处理位于 link 标签中的 js 文件
        if (ele.nodeName.toLowerCase() === 'link') {
            const href = ele.getAttribute('href');
            if (href.endsWith('.js')) {
                if (href.startsWith('http')) {
                    scriptUrls.push(href);
                } else {
                    scriptUrls.push(`http:${app.entry}/${href}`);
                }
            }
        }
        for (let i = 0; i < children.length; i++) {
            deepParser(children[i]);
        }
    }
    deepParser(root);

    return [scriptUrls, scripts, root.outerHTML];
}


// 预解析，提前缓存
export const preFetch = async () => {
    const apps = getAppList().filter(app => !window.location.pathname.startsWith(app.activeRule))
    return await Promise.all(apps.map(app => htmlParser(app.entry, app.name)))
}
