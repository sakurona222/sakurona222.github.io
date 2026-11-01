'use strict';

/**
 * @brief  为文章页注入背景样式
 * @param  data Hexo 文章渲染数据
 * @retval 处理后的文章数据
 * @note   文章 front-matter 中写 background 可单独指定背景图，
 *         未指定时使用站点配置 article_background。
 *         样式随文章正文一起输出，只在当前文章页生效。
 */
hexo.extend.filter.register('after_post_render', function (data)
{
    if (!data || !data.content)
    {
        return data;
    }

    // 仅处理文章，页面（关于、分类等）不加背景
    if (data.layout !== 'post')
    {
        return data;
    }

    const background = data.background || hexo.config.article_background;

    if (!background)
    {
        return data;
    }

    const url = String(background).replace(/'/g, "\\'");

    const style = '<style>'
        + '.main-content-body{'
        + "background-image:linear-gradient(rgba(0,25,45,.30),rgba(0,25,45,.30)),url('" + url + "');"
        + 'background-size:cover;background-position:center;background-attachment:fixed;'
        + '}'
        + '</style>';

    data.content += style;

    return data;
});
