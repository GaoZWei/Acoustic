<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <!--   <a-layout-sider v-model:collapsed="collapsed"> -->
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo">列车旋转部件故障智能检测系统</div>
        <!-- <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline" @click="handleClick">
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
              <router-link to="/query_method">检测方法查询</router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu> -->

        <a-menu theme="dark" mode="inline" :default-selected-keys="selectedKeys" :default-open-keys="openkeys" @click="handleClick">
          <template v-for="item in menuList" :key="item.key">
            <a-menu-item v-if="!item.children || item.children.length===0" :key="item.key">
              <router-link :to="item.path" v-if="item.path">{{ item.title }}</router-link>
              <span v-else>{{ item.title }}</span>
            </a-menu-item>
            <custom-menu-item v-else :key="item.key" :menu="item" />
          </template>
        </a-menu>
      </a-layout-sider>

      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed )" />
        </a-layout-header>
        <a-layout-content :style="{ padding: '3%', background: '#fff',minHeight: '280px' ,borderTop:'1px solid rgb(210,210,210)'}">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
const menuList = window.global.menus;
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import SubMenu from "../components/NavBar/SubMenu";

export default {
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    "custom-menu-item": SubMenu //小递归
  },
  setup() {
    const route = useRoute();
    var exp = route.meta.parent.split("-");
    console.log("exp:", exp);
    const data = reactive({
      selectedKeys: [route.name],
      collapsed: false,
      openkeys: exp //刷新默认展开菜单
    });
    const { selectedKeys, collapsed, openkeys } = toRefs(data);
    return { selectedKeys, collapsed, openkeys, menuList };
  },
  // data() {
  //   return {
  //     menuList
  //   };
  // },

  // watch: {
  //   //监听页面路由的切换，将选中的nav动态更新
  //   $route(to) {
  //     //(to, from)
  //     // console.log(to);
  //     // console.log(from);
  //     this.navselected = to.path.slice(1);
  //   }
  // },
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
#components-layout-demo-custom-trigger {
  height: auto;
}
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
