---
title: Hello World
date: 2026-10-31 17:32:04
tags:
  - 站点说明
categories:
  - 随笔
---

这是本站的第一篇文章，用来验证主题的渲染效果：标题、目录、代码高亮、深色模式和标签分类。

<!-- more -->

## 为什么写博客

把平时在嵌入式开发中踩过的坑、验证过的方案记录下来，既方便自己回查，也希望能帮到遇到同样问题的人。

## 代码块测试

下面这段是 STM32 里常见的 GPIO 初始化片段，用于检查代码高亮是否正常：

```c
/**
 * @brief  初始化 LED 引脚
 * @param  无
 * @retval 无
 */
void LED_Init(void)
{
    GPIO_InitTypeDef gpio = {0};

    __HAL_RCC_GPIOC_CLK_ENABLE();

    gpio.Pin   = GPIO_PIN_13;
    gpio.Mode  = GPIO_MODE_OUTPUT_PP;
    gpio.Pull  = GPIO_NOPULL;
    gpio.Speed = GPIO_SPEED_FREQ_LOW;

    HAL_GPIO_Init(GPIOC, &gpio);
}
```

## 接下来

- 补充「关于」页面的个人介绍
- 按主题整理历史笔记，逐步迁移到博客
- 视需要再接入评论系统

欢迎常来看看。
