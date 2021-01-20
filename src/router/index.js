import {
  createRouter,
  // createWebHashHistory,
  createWebHistory
} from 'vue-router'
import Login from "../views/components/Common/Login.vue"
import Login_phone from "../views/components/Common/Login_phone.vue"
import Register from "../views/components/Common/Register.vue"
import Main from '../views/main/Main.vue'
import VoiceComponentAdd from '../views/components/Voice/VoiceComponentAdd.vue'
import VoiceAttributeConfig from '../views/components/Voice/VoiceAttributeConfig.vue'
import VoiceParamDetect from "../views/components/Voice/VoiceParamDetect.vue"
import VoiceIntelligenceDetect from "../views/components/Voice/VoiceIntelligenceDetect.vue"
import VoiceDetectResultAnalysis from "../views/components/Voice/VoiceDetectResultAnalysis.vue"
import VoiceFaultPrint from "../views/components/Voice/VoiceFaultPrint.vue"
import VibrationComponentAdd from '../views/components/Vibration/VibrationComponentAdd.vue'
import VibrationAttributeConfig from '../views/components/Vibration/VibrationAttributeConfig.vue'
import VibrationTimeFrequentDetect from "../views/components/Vibration/VibrationTimeFrequentDetect.vue"
import VibrationIntelligenceDetect from "../views/components/Vibration/VibrationIntelligenceDetect.vue"
import VibrationDetectResult from "../views/components/Vibration/VibrationDetectResult.vue"
import VibrationFaultPrint from "../views/components/Vibration/VibrationFaultPrint.vue"
import TimeScope from '../views/components/InformationService/TimeScope.vue'
import HistoryFault from '../views/components/InformationService/HistoryFault.vue'
import QueryMethodAnalysis from '../views/components/InformationService/QueryMethodAnalysis.vue'

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
          component: VoiceComponentAdd
        },
        {
          path: "voice_attribute_config",
          name: "voice_attribute_config",
          component: VoiceAttributeConfig
        },
        {
          path: "voice_param_detect",
          name: "voice_param_detect",
          component: VoiceParamDetect
        },
        {
          path: "voice_intelligence_detect",
          name: "voice_intelligence_detect",
          component: VoiceIntelligenceDetect
        },

        {
          path: "voice_detect_result_analysis",
          name: "voice_detect_result_analysis",
          component: VoiceDetectResultAnalysis
        },

        {
          path: "voice_fault_print",
          name: "voice_fault_print",
          component: VoiceFaultPrint
        },
        {
          path: "vibration_component_add",
          name: "vibration_component_add",
          component: VibrationComponentAdd
        },
        {
          path: "vibration_attribute_config",
          name: "vibration_attribute_config",
          component: VibrationAttributeConfig
        },
        {
          path: "vibration_time_frequent_detect",
          name: "vibration_time_frequent_detect",
          component: VibrationTimeFrequentDetect
        },
        {
          path: "vibration_intelligence_detect",
          name: "vibration_intelligence_detect",
          component: VibrationIntelligenceDetect
        },
        {
          path: "vibration_detect_result",
          name: "vibration_detect_result",
          component: VibrationDetectResult
        },

        {
          path: "vibration_fault_print",
          name: "vibration_fault_print",
          component: VibrationFaultPrint
        },

        {
          path: "time_scope",
          name: "time_scope",
          component: TimeScope
        },

        {
          path: "history_fault",
          name: "history_fault",
          component: HistoryFault
        },

        {
          path: "query_method_analysis",
          name: "query_method_analysis",
          component: QueryMethodAnalysis
        },

      ]
    }
  ]
})