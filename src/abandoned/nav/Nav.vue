<template>
    <!-- <a-layout id="components-layout-demo-side" style="min-height: 100vh"> -->
        <a-layout-sider v-model:collapsed="collapsed">
            <!-- <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible> -->
            <div class="logo">列车旋转部件故障智能检测系统</div>
            <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline" @click="handleClick">
                <a-sub-menu key="sub1" @titleClick="titleClick">
                    <template #title>
                        <span>
                            <user-outlined />
                            <span>声发射信号检测</span>
                        </span>
                    </template>
                    <a-menu-item key="1">部件添加</a-menu-item>
                    <a-menu-item key="2">属性配置</a-menu-item>
                    <a-sub-menu key="sub1_1" @titleClick="titleClick">
                        <template #title>
                            <span>实时检测</span>
                        </template>
                        <a-menu-item key="3">参数检测法</a-menu-item>
                        <a-menu-item key="4">智能检测法</a-menu-item>
                    </a-sub-menu>
                    <a-menu-item key="5">检测结果分析</a-menu-item>
                    <a-menu-item key="6">打印故障单</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2" @titleClick="titleClick">
                    <template #title>
                        <span>
                            <user-outlined />
                            <span>振动信号检测</span>
                        </span>
                    </template>
                    <a-menu-item key="7">部件添加</a-menu-item>
                    <a-menu-item key="8">属性配置</a-menu-item>
                    <a-sub-menu key="sub2_2" @titleClick="titleClick">
                        <template #title>
                            <span>实时检测</span>
                        </template>
                        <a-menu-item key="9">参数检测法</a-menu-item>
                        <a-menu-item key="10">智能检测法</a-menu-item>
                    </a-sub-menu>
                    <a-menu-item key="11">检测结果分析</a-menu-item>
                    <a-menu-item key="12">打印故障单</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub3" @titleClick="titleClick">
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
    <!-- </a-layout> -->
</template>
<script>
import {
  UserOutlined,
//   MenuUnfoldOutlined,
//   MenuFoldOutlined
} from "@ant-design/icons-vue";
export default {
  components: {
    UserOutlined,
    // MenuUnfoldOutlined,
    // MenuFoldOutlined,
  },
  data() {
    return {
      selectedKeys: ["1"],
      collapsed: false
    };
  },
  methods: {
    handleClick(e) {
      console.log("click", e);
    },
    titleClick(e) {
      console.log("titleClick", e);
    }
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 8%;
  /* width:100%; */
  margin: 16px;
  font-size: 0.8em;
  color: rgba(255, 255, 255, 1);
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
</style>
