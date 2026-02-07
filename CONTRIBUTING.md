# 贡献指南
基于coco-mvc项目的脚手架项目。

## 代码结构

-   `bin/create-coco`: 入口脚本。
-   `src`: 源码根目录
-   `template`: 项目模板根目录。

## 环境

-   `nodejs`: v18及以上Lts版本
-   `pnpm`: 和`package.json`中版本保持一致

## 脚本

-   `pnpm run build`: 打包

## 版本规范

-   目前包版本处于`0.1.0-beta`阶段，且会一直处于`beta`阶段，直到第一个正式版（`0.1.0`）发布。
-   在正式版发布之后遵循[semver](https://semver.org/lang/zh-CN/)版本规范。

## 发布

步骤如下：
1. 在自己仓库的分支上提交代码。
2. 本地执行`changeset`，选择 **PATCH** 更新，注意是 **PATCH** 更新！，填写更新描述。
3. 从自己的仓库中提交 pr 请求到中心仓库 main 分支。
4. action 会自动运行，然后创建一个新版本的 pr 请求。
5. 管理员合并 pr 后，会自动发布新的版本。
