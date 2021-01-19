import {
  createRouter,
  // createWebHashHistory,
  createWebHistory
} from 'vue-router'
import Login from "../views/login/Login.vue"
import Login_phone from "../views/login/Login_phone.vue"
import Register from "../views/register/Register.vue"
import Main from '../views/main/Main.vue'
import VoiceComponentAdd from '../views/components/Voice/VoiceComponentAdd.vue'
import VoiceAttributeConfig from '../views/components/Voice/VoiceAttributeConfig.vue'
import VoiceParamDetect from "../views/components/Voice/VoiceParamDetect.vue"
import VoiceIntelligenceDetect from "../views/components/Voice/VoiceIntelligenceDetect.vue"
import VoiceDetectResultAnalysis from "../views/components/Voice/VoiceDetectResultAnalysis.vue"
import VoiceFaultPrint from "../views/components/Voice/VoiceFaultPrint.vue"





import HistoryFaultAll from '../views/table/HistoryFaultAll.vue'
import TimeScope from '../views/table/TimeScope.vue'
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
        // ---
        {
          path: "voice_fault_print",
          name: "voice_fault_print",
          component: VoiceFaultPrint
        },

        {
          path: "voice_fault_print",
          name: "voice_fault_print",
          component: VoiceFaultPrint
        }, {
          path: "voice_fault_print",
          name: "voice_fault_print",
          component: VoiceFaultPrint
        }, {
          path: "voice_fault_print",
          name: "voice_fault_print",
          component: VoiceFaultPrint
        },



        {
          path: "history_fault",
          name: "history_fault",
          component: HistoryFaultAll
        }, {
          path: "time_scope",
          name: "time_scope",
          component: TimeScope
        }
      ]
    }
  ]
})