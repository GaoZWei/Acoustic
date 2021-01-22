<template>
  <a-table :columns="columns" :data-source="data" @change="onChange">
    <template #action="{record}">
      <span>
        {{record.key}}
        <a>修改</a>
        <a-divider type="vertical" />
        <a>停止检测</a>
      </span>
    </template>
  </a-table>
</template>
<script>
const columns = [
  {
    title: "部件号",
    dataIndex: "component_name"
  },
  {
    title: "轴承类型",
    dataIndex: "component_type"
  },
  // {
  //   title: "Age",
  //   dataIndex: "age",
  //   defaultSortOrder: "descend",
  //   sorter: (a, b) => a.age - b.age
  // },
  {
    title: "创建时间",
    dataIndex: "create_time",
    defaultSortOrder: "descend",
    sorter: (a, b) => {
      // a.create_time - b.create_time
      if (a.create_time && b) {
        return 12;
      }
    }
  },
  {
    title: "状态",
    dataIndex: "status",
    filters: [
      {
        text: "运行中",
        value: "运行中"
      },
      {
        text: "关闭",
        value: "关闭"
      },
      //  {
      //   text: "故障",
      //   value: "故障"
      // },
      // {
      //   text: "关闭",
      //   value: "关闭"
      // },
      {
        text: "故障",
        value: "故障",
        children: [
          {
            text: "外圈故障",
            value: "外圈故障"
          },
          {
            text: "内圈故障",
            value: "内圈故障"
          }
        ]
      }
    ],
    // specify the condition of filtering result
    // here is that finding the status started with `value`
    filterMultiple: false, //能否多选
    onFilter: (value, record) => record.status.indexOf(value) === 0
    // sorter: (a, b) => a.status.length - b.status.length,
    // sortDirections: ["descend"]
  },
  {
    title: "更新时间",
    dataIndex: "update_time",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.create_time - b.create_time
  },
  {
    title: "操作",
    dataIndex: "action",
    slots: { customRender: "action" }
    // filters: [
    //   {
    //     text: "London",
    //     value: "London"
    //   },
    //   {
    //     text: "New York",
    //     value: "New York"
    //   }
    // ],
    // filterMultiple: false,
    // onFilter: (value, record) => record.address.indexOf(value) === 0,
    // sorter: (a, b) => a.address.length - b.address.length,
    // sortDirections: ["descend", "ascend"]
  }
];

const data = [
  {
    key: "1",
    component_name: "1号轴承",
    component_type: "滚珠轴承",
    status: "运行中",
    age: 32,
    create_time: "2017-10-31  23:12:00",
    update_time: "2017-10-31  23:12:00"
  },
  {
    key: "2",
    component_name: "2号轴承",
    component_type: "圆柱滚子轴承",
    status: "关闭",
    age: 42,
    create_time: "2017-10-31  23:12:02",
    update_time: "2017-10-31  23:12:00"
  },
  {
    key: "3",
    component_name: "3号轴承",
    component_type: "圆柱滚子轴承",
    status: "内圈故障",
    age: 32,
    create_time: "2017-10-31  13:12:00",
    update_time: "2017-10-31  23:12:00"
  },
  {
    key: "4",
    component_name: "4号轴承",
    component_type: "滚珠轴承",
    status: "外圈故障",
    age: 32,
    create_time: "2017-10-30  23:12:00",
    update_time: "2017-10-31  23:12:00"
  }
];

function onChange(pagination, filters, sorter) {
  console.log("params", pagination, filters, sorter);
}

export default {
  data() {
    return {
      data,
      columns
    };
  },
  methods: {
    onChange
  }
};
</script>
