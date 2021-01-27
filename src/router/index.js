import {
  createRouter,
  // createWebHashHistory,
  createWebHistory
} from 'vue-router'
import Login from "../views/components/Common/Login.vue"
import Login_phone from "../views/components/Common/Login_phone.vue"
import Register from "../views/components/Common/Register.vue"
import Main from '../views/main/Main.vue'
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
      // redirect:'/history_fault',
      children: [{
          path: "voice_component_add",
          name: "voice_component_add",
          meta: {
            title: '部件添加'
          },
          component: VoiceComponentAdd
        },
        {
          path: "voice_attribute_config",
          name: "voice_attribute_config",
          meta: {
            title: '属性配置'
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
            title: '参数检测'
          },
          component: VoiceParamDetect
        },
        {
          path: "voice_intelligence_detect",
          name: "voice_intelligence_detect",
          meta: {
            title: '智能检测'
          },
          component: VoiceIntelligenceDetect
        },

        {
          path: "voice_detect_result_analysis",
          name: "voice_detect_result_analysis",
          meta: {
            title: '检测结果分析'
          },
          component: VoiceDetectResultAnalysis
        },
        {
          path: "voice_detect_result_analysis_detail",
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
            title: '打印故障单'
          },
          component: VoiceFaultPrint
        },
        {
          path: "vibration_component_add",
          name: "vibration_component_add",
          meta: {
            title: '部件添加'
          },
          component: VibrationComponentAdd
        },
        {
          path: "vibration_attribute_config",
          name: "vibration_attribute_config",
          meta: {
            title: '属性配置'
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
            title: '时频检测'
          },
          component: VibrationTimeFrequentDetect
        },
        {
          path: "vibration_intelligence_detect",
          name: "vibration_intelligence_detect",
          meta: {
            title: '智能检测'
          },
          component: VibrationIntelligenceDetect
        },
        {
          path: "vibration_detect_result",
          name: "vibration_detect_result",
          meta: {
            title: '检测结果'
          },
          component: VibrationDetectResultAnalysis
        },
        {
          path: "vibration_detect_result_analysis_detail",
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
            title: '打印故障单'
          },
          component: VibrationFaultPrint
        },

        {
          path: "time_scope",
          name: "time_scope",
          meta: {
            title: '时间范围搜索'
          },
          component: TimeScope
        },

        {
          path: "history_fault",
          name: "history_fault",
          meta: {
            title: '历史故障查询'
          },
          component: HistoryFault
        },

        {
          path: "query_method",
          name: "query_method",
          meta: {
            title: '检测方法查询'
          },
          component: QueryMethod
        },

      ]
    }
  ]
})