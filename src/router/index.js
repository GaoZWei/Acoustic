import {
  createRouter,
  // createWebHashHistory,
  createWebHistory
} from 'vue-router'
import Login from "../views/components/Common/Login.vue"
import Login_phone from "../views/components/Common/Login_phone.vue"
import Register from "../views/components/Common/Register.vue"
import Main from '../views/main/Main.vue'
import Content from "../views/main/Content.vue"
import VoiceComponentAdd from '../views/components/Voice/VoiceComponentAdd/VoiceComponentAdd.vue'
import VoiceAttributeConfig from '../views/components/Voice/VoiceAttributeConfig/VoiceAttributeConfig.vue'
import VoiceAttributeConfigDetail from "../views/components/Voice/VoiceAttributeConfig/VoiceAttributeConfigDetail.vue"
import VoiceParamDetect from "../views/components/Voice/VoiceParamDetect/VoiceParamDetect.vue"
import VoiceIntelligenceDetect from "../views/components/Voice/VoiceIntelligenceDetect/VoiceIntelligenceDetect.vue"
import VoiceDetectResultAnalysis from "../views/components/Voice/VoiceDetectResultAnalysis/VoiceDetectResultAnalysis.vue"
import VoiceDetectResultAnalysisDetail from "../views/components/Voice/VoiceDetectResultAnalysis/VoiceDetectResultAnalysisDetail.vue"
import VoiceFaultPrint from "../views/components/Voice/VoiceFault/VoiceFaultPrint.vue"
import VibrationComponentAdd from '../views/components/Vibration/VibrationComponentAdd/VibrationComponentAdd.vue'
import VibrationAttributeConfig from '../views/components/Vibration/VibrationAttributeConfig/VibrationAttributeConfig.vue'
import VibrationAttributeConfigDetail from "../views/components/Vibration/VibrationAttributeConfig/VibrationAttributeConfigDetail.vue"
import VibrationTimeFrequentDetect from "../views/components/Vibration/VibrationTimeFrequentDetect/VibrationTimeFrequentDetect.vue"
import VibrationIntelligenceDetect from "../views/components/Vibration/VibrationIntelligenceDetect/VibrationIntelligenceDetect.vue"
import VibrationDetectResultAnalysis from "../views/components/Vibration/VibrationDetectResultAnalysis/VibrationDetectResultAnalysis.vue"
import VibrationDetectResultAnalysisDetail from "../views/components/Vibration/VibrationDetectResultAnalysis/VibrationDetectResultAnalysisDetail.vue"
import VibrationFaultPrint from "../views/components/Vibration/VibrationFault/VibrationFaultPrint.vue"
import TimeScope from '../views/components/InformationService/TimeScope/TimeScope.vue'
import HistoryFault from '../views/components/InformationService/HistoryFault/HistoryFault.vue'
import QueryMethod from '../views/components/InformationService/QueryMethod/QueryMethod.vue'
import Fault_403 from "../views/components/Abnormal/Fault_403.vue"
import Fault_404 from "../views/components/Abnormal/Fault_404.vue"
import Fault_500 from "../views/components/Abnormal/Fault_500.vue"
import Success from "../views/components/Result/Success.vue"
import Fault from "../views/components/Result/Fault.vue"
export default createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [{
      path: "/login",
      name: "login",
      component: Login
    }, {
      path: "/login_phone",
      name: "login_phone",
      component: Login_phone
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }, {
      path: "/",
      name: "index",
      component: Main,
      redirect: '/voice_component_add', //重定向
      children: [{
          path: "main",
          name: "content",
          component: Content
        },
        {
          path: "voice_component_add",
          name: "voice_component_add",
          meta: {
            title: '部件添加',
            parent: 'sub1'
          },
          component: VoiceComponentAdd
        },
        {
          path: "voice_attribute_config",
          name: "voice_attribute_config",
          meta: {
            title: '属性配置',
            parent: 'sub1'
          },
          component: VoiceAttributeConfig
        },
        {
          path: "voice_attribute_config_detail",
          name: "voice_attribute_config_detail",
          meta: {
            title: '部件配置'
          },
          component: VoiceAttributeConfigDetail
        },
        {
          path: "voice_param_detect",
          name: "voice_param_detect",
          meta: {
            title: '参数检测',
            parent: 'sub1-sub1_1'
          },
          component: VoiceParamDetect
        },
        {
          path: "voice_intelligence_detect",
          name: "voice_intelligence_detect",
          meta: {
            title: '智能检测',
            parent: 'sub1-sub1_1'
          },
          component: VoiceIntelligenceDetect
        },

        {
          path: "voice_detect_result_analysis",
          name: "voice_detect_result_analysis",
          meta: {
            title: '检测结果分析',
            parent: 'sub1-sub1_1'
          },
          component: VoiceDetectResultAnalysis
        },
        {
          path: "voice_detect_result_analysis_detail/:deviceCategory/:deviceSno",
          name: "voice_detect_result_analysis_detail",
          meta: {
            title: '实时轴承分析'
          },
          component: VoiceDetectResultAnalysisDetail
        },
        {
          path: "voice_fault_print",
          name: "voice_fault_print",
          meta: {
            title: '打印故障单',
            parent: 'sub1-sub1_1'
          },
          component: VoiceFaultPrint
        },
        {
          path: "vibration_component_add",
          name: "vibration_component_add",
          meta: {
            title: '部件添加',
            parent: 'sub2'
          },
          component: VibrationComponentAdd
        },
        {
          path: "vibration_attribute_config",
          name: "vibration_attribute_config",
          meta: {
            title: '属性配置',
            parent: 'sub2'
          },
          component: VibrationAttributeConfig
        },
        {
          path: "vibration_attribute_config_detail",
          name: "vibration_attribute_config_detail",
          meta: {
            title: '部件配置'
          },
          component: VibrationAttributeConfigDetail
        },

        {
          path: "vibration_time_frequent_detect",
          name: "vibration_time_frequent_detect",
          meta: {
            title: '时频检测',
            parent: 'sub2-sub2_1'
          },
          component: VibrationTimeFrequentDetect
        },
        {
          path: "vibration_intelligence_detect",
          name: "vibration_intelligence_detect",
          meta: {
            title: '智能检测',
            parent: 'sub2-sub2_1'
          },
          component: VibrationIntelligenceDetect
        },
        {
          path: "vibration_detect_result",
          name: "vibration_detect_result",
          meta: {
            title: '检测结果',
            parent: 'sub2-sub2_1'
          },
          component: VibrationDetectResultAnalysis
        },
        {
          path: "vibration_detect_result_analysis_detail/:deviceCategory/:deviceSno",
          name: "vibration_detect_result_analysis_detail",
          meta: {
            title: '实时轴承分析'
          },
          component: VibrationDetectResultAnalysisDetail
        },
        {
          path: "vibration_fault_print",
          name: "vibration_fault_print",
          meta: {
            title: '打印故障单',
            parent: 'sub2-sub2_1'
          },
          component: VibrationFaultPrint
        },

        {
          path: "time_scope",
          name: "time_scope",
          meta: {
            title: '时间范围搜索',
            parent: 'sub3'
          },
          component: TimeScope
        },

        {
          path: "history_fault",
          name: "history_fault",
          meta: {
            title: '历史故障查询',
            parent: 'sub3'
          },
          component: HistoryFault
        },

        {
          path: "query_method",
          name: "query_method",
          meta: {
            title: '检测方法查询',
            parent: 'sub3'
          },
          component: QueryMethod
        },
        {
          path: "403",
          name: "403",
          component: Fault_403
        },
        {
          path: "404",
          name: "404",
          component: Fault_404
        }, {
          path: "500",
          name: "500",
          component: Fault_500
        },
        {
          path: "success",
          name: "success",
          meta: {
            title: '成功页'
          },
          component: Success
        },
        {
          path: "fault",
          name: "fault",
          meta: {
            title: '失败页'
          },
          component: Fault
        }
      ]
    }
  ]
})