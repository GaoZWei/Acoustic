<template>
    <div>
        <div>
            <a-radio-group v-model:value="channel" button-style="solid">
                <a-radio-button value="channel_one">
                    通道1
                </a-radio-button>
                <a-radio-button value="channel_two">
                    通道2
                </a-radio-button>
                <a-radio-button value="channel_three">
                    通道3
                </a-radio-button>
                <a-radio-button value="channel_four">
                    通道4
                </a-radio-button>
            </a-radio-group>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      channel: "channel_one"
    };
  }
};
</script>
