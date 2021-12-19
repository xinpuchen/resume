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
          <h3 class="item-name">南瓜科学APP - 核心开发者</h3>
        </header>
        <div class="item-bd">
          <ul>
            <li>
              项目概述：南瓜科学是一款专注提升孩子科学素养，全方位保护孩子好奇心的应用。技术栈为 Flutter 结合 H5 的混合开发，其前端技术包括端内、H5、微信生态和 PC 等多环境开发。
            </li>
            <li>
              个人职责：
              <ul>
                <li>
                  从运营和辅导老师视角参与后台和教务平台的交互设计、模块提取，工具生成，减小业务复杂度，降低平台的使用和培训成本
                </li>
                <li>
                  参与客户端、微信公众号内嵌 H5 页面的开发，以分享裂变、抽奖活动等策略实现用户增长
                </li>
                <li>
                  参与各平台投放落地页的开发，其中主要涉及到支付模块的接入、兼容与整合处理
                </li>
                <li>
                  通过日志和埋点收集用户行为数据，分析和优化产品的投放与推广，指导产品向更优的方向发展
                </li>
                <li>
                  通过异常监控和性能监控，对线上故障做到早发现、早修复，对页面性能做到早分析、早优化，以提高产品的稳定性和用户体验
                </li>
                <li>
                  针对各平台出现的绘图导出需求，整合了一套 Canvas 画图工具包，包含常用画图方法
                </li>
                <li>
                  针对 C 端项目为一个多页面应用的情况，实现 cli 工具，统一模版代码，快速生成页面
                </li>
              </ul>
            </li>
            <li>
              项目难点：1. 产品快速迭代的前提下保证各平台的稳定性和高可用性；2. 快速定位和解决极少数用户出现的线上问题；3. 对各平台投放的 H5 页面的使用体验极致优化
            </li>
            <li>
              工作成果：通过对后台和教师管理平台复杂业务的公共模块进行提取，对各 C 端页面接入日志和错误监控，极大的提高了整个产品生态的稳定性和可用性，系统可用性由不到两个九提升到大于三个九
            </li>
          </ul>
        </div>
      </div>
      <div class="item">
        <header class="item-hd">
          <h3 class="item-name">
            超融合云平台 - 核心开发者
          </h3>
        </header>
        <div class="item-bd">
          <ul>
            <li>
              项目概述：项目以软件定义技术为核心，集计算、网络、存储、运维、管理于一体的超融合一体化服务平台，
              可利用 SD-WAN 对接公有云构建同构混合云环境，也可平滑升级到全栈私有云架构。采用
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
                  利用 NodeJS Express 搭建中间转发层，实现 API 管道切换、安全防护、身份校验、日志收集等功能
                </li>
                <li>
                  利用 Socket.IO 封装 WebSocket 服务，提供全局消息实时推送，对全平台事件和资源调度进行实时反馈和进度显示
                </li>
                <li>
                  利用高阶组件封装常用复杂组件，包括大文件断点续传 Upload、列表集合 TableList 组件等
                </li>
                <li>
                  常用工具函数的封装，如请求 request、数据解压缩 dataConverter，各级单位转换 format 等
                </li>
                <li>
                  设计开发 BaseStore，包含 init、get、set、refresh、filter、sort、search、reset 等基础方法
                </li>
                <li>
                  设计开发 CommonStore，实现对资源编辑、删除等公共模块的代码复用和用户角色的权限控制
                </li>
                <li>
                  设计开发「计算大屏」，包括用户资源概览、计算节点压力和运行概况、资源使用率排行等实时监控数据展示
                </li>
                <li>
                  借助 KubeSphere 平台和 gitlab CI 实现 DevOps 自动化流程
                </li>
              </ul>
            </li>
            <li>
              项目难点：1. 超融合云平台业务复杂，需要与其他多个平台对接；2. 模块显示和操作逻辑的多级权限控制；3. 多模块大文件上传封装实现断点续传；4. 资源状态与进度实时同步
            </li>
            <li>
              工作成果：超融合云平台为多个银行、医院、高校、旅游业提供云计算虚拟化服务，接连拿下行业内多个云平台项目大单，同时申请多项专利
            </li>
          </ul>
        </div>
      </div>
      <div class="item">
        <header class="item-hd">
          <h3 class="item-name">lego-UI 组件库 - 主要开发者</h3>
        </header>
        <div class="item-bd">
          <ul>
            <li>
              项目概述：基于 React 开发的 UI 组件库，具有风格统一、设计灵活、组件间自由组合，主题定制和语言切换等特点，组件数量 45+
            </li>
            <li>
              个人职责：
              <ul>
                <li>
                  参与讨论组件库开发流程和项目初始化，技术方案的选择与确立
                </li>
                <li>
                  复杂组件的 API 设计、组件的粒度拆分、部分组件的开发和单元测试
                </li>
                <li>
                  组件库文档的建立和组件示例的完善，保证组件库的维护和团队间推广
                </li>
              </ul>
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