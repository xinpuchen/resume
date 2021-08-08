<template>
  <div class="project">
    <header class="section-hd">
      <span class="section-title-l"></span>
      <h2 class="section-title">项目经历</h2>
      <span class="section-title-r"></span>
    </header>
    <div class="section-bd">
      <div class="item">
        <header class="item-hd">
          <h3 class="item-name">
            青立方<sup>®</sup>超融合云平台 - 核心开发者
          </h3>
        </header>
        <div class="item-bd">
          <ul>
            <li>
              项目概述：项目以软件定义技术为核心，集计算、网络、存储、运维、管理于一体的超融合一体化服务平台，
              可利用 SD-WAN 对接公有云构建同构混合云环境，也可平滑升级到全栈私有云架构。开发采用
              Express + React + Mobx + Webpack + WebSocket 技术栈
            </li>
            <li>
              个人职责：
              <ul>
                <li>
                  负责项目构建流程、实现模块热替换、路由懒加载、代码分割，加快构建速度和打包体积
                </li>
                <li>
                  利用 ESlint、Prettier、Husky 等工具严格控制代码规范和质量
                </li>
                <li>
                  利用 Express Server 搭建中间转发层，实现 API 管道切换、安全防护、身份校验、日志收集等功能
                </li>
                <li>
                  利用 Socket.IO 封装 WebSocket 服务，提供全局消息实时推送，对全平台事件和资源调度进行实时反馈和进度显示
                </li>
                <li>
                  利用高阶组件封装常用负责组件，包括大文件断点续传 Upload 组件, Table 组件，基于 ECharts 的图表组件等
                </li>
                <li>
                  常用工具函数的封装，如请求 request、数据解压缩 dataConverter，各级单位转换 format 等
                </li>
                <li>
                  设计开发 BaseStore，包含 store 的 init、get、set、refresh、filter、sort、search、reset 等基础方法
                </li>
                <li>
                  设计开发 CommonStore，实现对资源编辑、删除等公共模块的代码复用和用户角色的权限控制
                </li>
                <li>
                  设计开发「计算大屏」，包括用户资源概览、计算节点压力和运行概况、资源使用率排行等实时监控数据展示
                </li>
                <li>
                  借助 KubeSphere 平台搭建 GitLab CI 实现 DevOps 自动化流程
                </li>
              </ul>
            </li>
            <li>
              项目难点：1. 超融合云平台业务复杂，需要与其他多个平台对接；2. 模块显示和操作逻辑的多级权限控制；3. 多模块大文件上传封装实现断点续传；4. 资源状态与进度实时同步
            </li>
            <li>
              工作成果：超融合云平台为多个银行、医院、高校、旅游业提供云计算 IT 虚拟化服务，接连拿下行业内多个云平台项目大单
            </li>
          </ul>
        </div>
      </div>
      <div class="item">
        <header class="item-hd">
          <h3 class="item-name">React 组件库 QUI - 主要开发者</h3>
        </header>
        <div class="item-bd">
          <ul>
            <li>
              项目概述：基于 React 开发的一套 UI 组件库工具，风格统一、设计灵活、组件间自由组合，主题定制和语言切换等特点，组件数量 45+
            </li>
            <li>
              个人职责：在开发组件的过程中涉及到开发组件库的全部流程，包括组件 API 设计、开发、Code review、到单元测试、发布，使用过程中组件的修复、优化与更新
            </li>
            <li>
              项目难点：1. 组件设计对粒度的把握；2. 组件 API 设计对可拓展性考量；3. 组件设计的通用性考量；4. 组件复杂度与兼容性的取舍；5. 组件设计对运行性能的考量；6. 组件的实现对稳定性和对可维护性的考量
            </li>
            <li>
              工作成果：组件库为青云产品生态而生，解决了因前端技术栈杂乱导致的产品视觉、布局不统一，操作不规范，业务迭代慢等问题，极大的提高了青云产品质量和开发效率
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>