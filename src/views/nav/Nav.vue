<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div class="logo">列车旋转部件故障智能检测系统</div>
            <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
                <!-- <a-menu-item key="1">
                    <pie-chart-outlined />
                    <span>Option 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <desktop-outlined />
                    <span>Option 2</span>
                </a-menu-item> -->
                <a-sub-menu key="sub1">
                    <template #title>
                        <span>
                            <user-outlined />
                            <span>声发射信号检测</span>
                        </span>
                    </template>
                    <a-menu-item key="1">部件添加</a-menu-item>
                    <a-menu-item key="2">属性配置</a-menu-item>
                    <a-sub-menu key="sub3">
                        <template #title>
                            <span>
                                <!-- <user-outlined /> -->
                                <span>实时检测</span>
                            </span>
                        </template>
                        <a-menu-item key="3">参数检测法</a-menu-item>
                        <a-menu-item key="4">智能检测法</a-menu-item>
                    </a-sub-menu>
                    <a-menu-item key="5">检测结果分析</a-menu-item>
                    <a-menu-item key="6">打印故障单</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #title>
                        <span>
                            <team-outlined />
                            <span>振动信号检测</span>
                        </span>
                    </template>
                    <a-menu-item key="7">Team 1</a-menu-item>
                    <a-menu-item key="8">Team 2</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9">
                    <file-outlined />
                    <span>File</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0" />
            <a-layout-content style="margin: 0 16px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>User</a-breadcrumb-item>
                    <a-breadcrumb-item>Bill</a-breadcrumb-item>
                </a-breadcrumb>
                <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                    Bill is a cat.
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script>
import {
  UserOutlined
  //   VideoCameraOutlined,
  //   UploadOutlined,
  //   MenuUnfoldOutlined,
  //   MenuFoldOutlined
} from "@ant-design/icons-vue";

export default {
  components: {
    UserOutlined
    // VideoCameraOutlined,
    // UploadOutlined,
    // MenuUnfoldOutlined,
    // MenuFoldOutlined
  },
  data() {
    return {
      selectedKeys: ["sub1"],
      collapsed: false
    };
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 8%;
  margin: 16px;
  font-size: 1em;
  color: rgba(255, 255, 255, 1);
}
</style>
