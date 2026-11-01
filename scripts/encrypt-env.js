'use strict';

/**
 * @brief  把文章 front-matter 中的密码环境变量解析为真实密码
 * @param  data Hexo 文章数据
 * @retval 处理后的文章数据
 * @note   主题自带的加密实现只接受字符串密码；这里在渲染前把
 *         `password: { env: NAME }` 替换成 process.env[NAME]，
 *         避免密码写进公开仓库。
 */
hexo.extend.filter.register('before_post_render', function (data)
{
    const password = data && data.password;

    if (!password || typeof password !== 'object' || !password.env)
    {
        return data;
    }

    const value = process.env[password.env];

    if (!value)
    {
        throw new Error('Missing password environment variable: ' + password.env);
    }

    data.password = value;

    return data;
});
