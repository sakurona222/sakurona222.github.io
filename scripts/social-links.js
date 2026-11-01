'use strict';

/**
 * @brief  过滤主题合并后残留的默认社交链接
 * @param  locals 模板局部变量
 * @retval 处理后的模板局部变量
 * @note   Hexo 会把主题默认的 links 数组与站点配置合并，导致出现示例邮箱、
 *         空链接等多余条目；这里统一去掉空值、example.com 和重复链接。
 */
hexo.extend.filter.register('template_locals', function (locals)
{
    const socialLinks = locals.theme
        && locals.theme.home_banner
        && locals.theme.home_banner.social_links;

    if (!socialLinks || !Array.isArray(socialLinks.links))
    {
        return locals;
    }

    const seen = new Set();

    socialLinks.links = socialLinks.links.filter(function (item)
    {
        if (!item || !item.url)
        {
            return false;
        }

        if (String(item.url).indexOf('example.com') !== -1)
        {
            return false;
        }

        if (seen.has(item.url))
        {
            return false;
        }

        seen.add(item.url);
        return true;
    });

    return locals;
});
