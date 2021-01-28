<template>
    <Breadcrumb/>
    <div class="success">
        <icon-font type="icon-icon--yes" class="success_icon" />
        <h1>提交成功</h1>
        <div class="success_desc">
            提交结果页用于反馈一系列操作任务的处理结果，如果仅是简单操作，使用 Message 全局提示反馈即可。本文字区域可以展示简单的补充说明，如果有类似展示“单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。
        </div>
        <div class="success_progress">
            <h3>项目名称</h3>
            <a-row>
                <a-col :span="8">
                    项目 ID：2017-01-10
                </a-col>
                <a-col :span="7">
                    负责人：曲丽丽
                </a-col>
                <a-col :span="9">
                    生效日期：2017-01-10 ～ 2017-01-10
                </a-col>
            </a-row>
            <div class="success_step">
                <a-steps :current="1">
                    <template #progressDot="{ index, status, prefixCls }">
                        <a-popover>
                            <template #content>
                                <span>step {{ index }} status: {{ status }}</span>
                            </template>
                            <span :class="`${prefixCls}-icon-dot`" />
                        </a-popover>
                    </template>
                    <a-step title="创建单据" description="2016-12-12 12:32" subTitle="曲丽丽" />
                    <a-step title="部门初审" description="催一下" subTitle="周毛毛" />
                    <a-step title="财务复审" description="" />
                    <a-step title="完成" description="" />
                </a-steps>
            </div>
        </div>
        <div class="success_btn">
            <a-row>
                <a-col :span="10"></a-col>
                <a-col :span="4">
                    <a-button>查看项目</a-button>
                </a-col>
                <a-col :span="3">
                    <a-button>打印</a-button>
                </a-col>
                <a-col :span="4">
                    <a-button type="primary">返回修改</a-button>
                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script>
import Breadcrumb from "../../components/Common/Breadcrumb";
import { createFromIconfontCN } from "@ant-design/icons-vue";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2337538_i0qm11v35mn.js"
});
export default {
  components: {
    Breadcrumb,
    IconFont
  }
};
</script>

<style scoped>
.success_icon {
   font-size:7em;
  margin-left: 42.5%;
}
.success {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 4%;
  margin-bottom: 15%;
  padding: 3%;
  /* border: 1px solid rgba(210, 210, 210, 0.5); */
}

.success h1 {
  margin-top: 2%;
  font-size: 2em;
  color: rgba(0, 0, 0, 0.85);
  text-align: center;
}
.success_desc {
  color: rgba(0, 0, 0, 0.45);
  text-align: center;
}
.success_progress {
  margin-top: 5%;
  margin-bottom: 2%;
}
.success_step {
  margin-top: 4%;
}
.success_btn {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
