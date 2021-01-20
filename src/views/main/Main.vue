<template>
  <!-- <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed"> -->
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">列车旋转部件故障智能检测系统</div>
      <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline" @click="handleClick">
        <a-sub-menu key="sub1" @titleClick="titleClick">
          <template #title>
            <span>
              <user-outlined />
              <span>声发射信号检测</span>
            </span>
          </template>
          <a-menu-item key="1">
            <router-link to="/voice_component_add">部件添加</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/voice_attribute_config">属性配置</router-link>
          </a-menu-item>
          <a-sub-menu key="sub1_1" @titleClick="titleClick">
            <template #title>
              <span>实时检测</span>
            </template>
            <a-menu-item key="3">
              <router-link to="/voice_param_detect">参数检测法</router-link>
            </a-menu-item>
            <a-menu-item key="4">
              <router-link to="/voice_intelligence_detect">智能检测法</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="5">
            <router-link to="/voice_detect_result_analysis">检测结果分析</router-link>
          </a-menu-item>
          <a-menu-item key="6">
            <router-link to="/voice_fault_print">打印故障单</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2" @titleClick="titleClick">
          <template #title>
            <span>
              <user-outlined />
              <span>振动信号检测</span>
            </span>
          </template>
          <a-menu-item key="7">
            <router-link to="/vibration_component_add">部件添加</router-link>
          </a-menu-item>
          <a-menu-item key="8">
            <router-link to="/vibration_attribute_config">属性配置</router-link>
          </a-menu-item>
          <a-sub-menu key="sub2_2" @titleClick="titleClick">
            <template #title>
              <span>实时检测</span>
            </template>
            <a-menu-item key="9">
              <router-link to="/vibration_time_frequent_detect">时频检测法</router-link>
            </a-menu-item>
            <a-menu-item key="10">
              <router-link to="/vibration_intelligence_detect">智能检测法</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="11">
            <router-link to="/vibration_detect_result">检测结果分析</router-link>
          </a-menu-item>
          <a-menu-item key="12">
            <router-link to="/vibration_fault_print">打印故障单</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3" @titleClick="titleClick">
          <template #title>
            <span>
              <SolutionOutlined/>
              <span>信息服务</span>
            </span>
          </template>
          <a-menu-item key="13">
            <router-link to="/time_scope">时间范围查询</router-link>
          </a-menu-item>
          <a-menu-item key="14">
            <router-link to="/history_fault">历史故障查询</router-link>
          </a-menu-item>
          <a-menu-item key="15">
            <router-link to="/query_method_analysis">检测方法查询</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content :style="{ padding: '3%', background: '#fff',minHeight: '280px' ,borderTop:'1px solid rgb(210,210,210)'}">
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item>历史故障查询</a-breadcrumb-item>
        </a-breadcrumb>
        <HistoryFaultSearch/>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <HistoryFault/>
        </div> -->
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  UserOutlined,
  SolutionOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from "@ant-design/icons-vue";
export default {
  components: {
    UserOutlined,
    SolutionOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  data() {
    return {
      selectedKeys: ["1"],
      collapsed: false
    };
  },
  watch: {
    //监听页面路由的切换，将选中的nav动态更新
    $route(to, from) {
      console.log(to);
      console.log(from);
      this.navselected = to.path.slice(1);
    }
  },
  // created() {
  //   //当前选中页面刷新，标签依然选中当前路由对应的标签
  //   this.navselected = this.$route.path.slice(1);
  //   //动态监听窗口可视高度的变化，动态赋值
  //   let clientHeight = `${document.documentElement.clientHeight}`;
  //   this.bodyHeight = { height: clientHeight + "px" };
  //   window.onresize = () => {
  //     return (() => {
  //       let clientHeight = `${document.documentElement.clientHeight}`;
  //       this.bodyHeight = { height: clientHeight + "px" };
  //     })();
  //   };
  // },
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
/* #components-layout-demo-custom-trigger {
  height: auto;
} */
#components-layout-demo-custom-trigger .logo {
  /* height: 6%; */
  /* width:100%; */
  margin: 8%;
  /* margin:16px; */
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
