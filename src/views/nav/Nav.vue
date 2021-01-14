<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div class="logo">列车旋转部件故障智能检测系统</div>
            <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
                <a-sub-menu key="sub1">
                    <template #title>
                        <span>
                            <user-outlined />
                            <span>声发射信号检测</span>
                        </span>
                    </template>
                    <a-menu-item key="1">部件添加</a-menu-item>
                    <a-menu-item key="2">属性配置</a-menu-item>
                    <a-sub-menu key="sub1_1">
                        <template #title>
                            <span>实时检测</span>
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
                            <user-outlined />
                            <span>振动信号检测</span>
                        </span>
                    </template>
                    <a-menu-item key="7">部件添加</a-menu-item>
                    <a-menu-item key="8">属性配置</a-menu-item>
                    <a-sub-menu key="sub2_2">
                        <template #title>
                            <span>实时检测</span>
                        </template>
                        <a-menu-item key="9">参数检测法</a-menu-item>
                        <a-menu-item key="10">智能检测法</a-menu-item>
                    </a-sub-menu>
                    <a-menu-item key="11">检测结果分析</a-menu-item>
                    <a-menu-item key="12">打印故障单</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub3">
                    <template #title>
                        <span>
                            <user-outlined />
                            <span>信息服务</span>
                        </span>
                    </template>
                    <a-menu-item key="13">时间范围查询</a-menu-item>
                    <a-menu-item key="14">历史故障查询</a-menu-item>
                    <a-menu-item key="15">检测方法障查询</a-menu-item>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0" />
            <a-layout-content style="margin: 0 16px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>首页</a-breadcrumb-item>
                    <a-breadcrumb-item>历史故障查询</a-breadcrumb-item>
                </a-breadcrumb>
                <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                    <History_fault/>
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
import History_fault from "../table/History_fault";
export default {
  components: {
    UserOutlined,
    History_fault
    // VideoCameraOutlined,
    // UploadOutlined,
    // MenuUnfoldOutlined,
    // MenuFoldOutlined
  },
  data() {
    return {
      selectedKeys: ["1"],
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
