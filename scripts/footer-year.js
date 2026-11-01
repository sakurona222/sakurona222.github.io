'use strict';

/**
 * @brief  去掉页脚版权中重复的年份
 * @param  str 渲染后的 HTML
 * @retval 处理后的 HTML
 * @note   主题会输出「起始年 - 当前年」，两者相同时会显示成「2026 - 2026」，
 *         这里仅在同一年时移除后半段。
 */
hexo.extend.filter.register('after_render:html', function (str)
{
    if (!str || str.indexOf('</footer>') === -1)
    {
        return str;
    }

    return str.replace(/(<span>)(\d{4})(<\/span>)\s*-\s*\2/g, '$1$2$3');
});
