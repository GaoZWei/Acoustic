window.global = {
  menus: [
    {
      key: 'sub1',
      title: '声发射信号检测',
      icon: 'line-chart',
      children: [
        {
          key: 'voice_component_add',
          title: '部件添加',
          path: '/voice_component_add'
        },
        {
          key: 'voice_attribute_config',
          title: '属性配置',
          path: '/voice_attribute_config'
        },
        {
          key: 'sub1_1',
          title: '实时检测',
          children: [
            {
              key: 'voice_param_detect',
              title: '参数检测法',
              path: '/voice_param_detect'
            },
            {
              key: 'voice_intelligence_detect',
              title: '智能检测法',
              path: '/voice_intelligence_detect'
            },
            {
              key: 'voice_detect_result_analysis',
              title: '检测结果分析',
              path: '/voice_detect_result_analysis'
            },
            {
              key: 'voice_fault_print',
              title: '打印故障单',
              path: '/voice_fault_print'
            }
          ]
        }
      ]
    },
    {
      key: 'sub2',
      title: '振动信号检测',
      icon: 'line-chart',
      children: [
        {
          key: 'vibration_component_add',
          title: '部件添加',
          path: '/vibration_component_add'
        },
        {
          key: 'vibration_attribute_config',
          title: '属性配置',
          path: '/vibration_attribute_config'
        },
        {
          key: 'sub2_1',
          title: '实时检测',
          children: [
            {
              key: 'vibration_time_frequent_detect',
              title: '时频检测法',
              path: '/vibration_time_frequent_detect'
            },
            {
              key: 'vibration_intelligence_detect',
              title: '智能检测法',
              path: '/vibration_intelligence_detect'
            },
            {
              key: 'vibration_detect_result',
              title: '检测结果分析',
              path: '/vibration_detect_result'
            },
            {
              key: 'vibration_fault_print',
              title: '打印故障单',
              path: '/vibration_fault_print'
            },
          ]
        },
      ]
    },
    {
      key: 'sub3',
      title: '信息服务',
      icon: 'line-chart',
      children: [
        {
          key: 'time_scope',
          title: '时间范围查询',
          path: '/time_scope'
        },
        {
          key: 'history_fault',
          title: '历史故障查询',
          path: '/history_fault'
        },
        {
          key: 'query_method',
          title: '检测方法查询',
          path: '/query_method'
        },
      ]
    },
  ]
}