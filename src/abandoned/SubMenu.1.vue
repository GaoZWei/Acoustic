<template>
  <a-sub-menu :key="menu.key" v-bind="$attrs">
  <!-- <a-sub-menu :key="menu.key"> -->
    <template #title>
      <span>
        <span class="anticon">
          <UserOutlined v-if="menu.key=='sub1'" />
          <SolutionOutlined v-else-if="menu.key=='sub2'" />
          <SolutionOutlined v-else-if="menu.key=='sub3'" />
        </span>
        <span>{{ menu.title }}</span>
      </span>
    </template>
    <template v-for="item in menu.children" :key="item.key">
      <a-menu-item v-if="!item.children || item.children.length===0" :key="item.key">
        <router-link :to="item.path" v-if="item.path">{{ item.title }}</router-link>
        <span v-else>{{ item.title }}</span>
      </a-menu-item>
      <custom-menu-item v-else :key="item.key" :menu="item" />
    </template>
  </a-sub-menu>
</template>

<script>
import { UserOutlined, SolutionOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
export default defineComponent({
// export default {
  name: "CustomMenuItem",
  components: {
    UserOutlined,
    SolutionOutlined
  },
  // props: ["menu"]
  props: {
    menu: {
      type: Object,
      default: () => ({})
    }
  }
});
</script>