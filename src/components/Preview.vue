<template>
  <div class="mykit-preview">
    <section>
      <slot></slot>
    </section>

    <div v-show="codeVisible" class="source-code">
      <pre class="language-html"><code class="language-html">{{ previewSourceCode }}</code></pre>
    </div>

    <div class="preview-bottom">
      <span name="Code" @click="showSourceCode">查看代码</span>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs';
import '../assets/prism.css'; // 主题 CSS
export default {
  props: {
    /** 组件名称 */
    compName: {
      type: String,
      default: '',
      require: true,
    },
    /** 要显示代码的组件 */
    demoName: {
      type: String,
      default: '',
      require: true,
    },
  },
  data() {
    return {
      previewSourceCode: '',
      codeVisible: false
    };
  },
  async mounted() {
    const isDev = import.meta.env.MODE === 'development'
    if (this.compName && this.demoName) {
      if (isDev) {
        this.previewSourceCode = (
          await import(/* @vite-ignore */ `../../packages/${this.compName}/docs/${this.demoName}.vue?raw`)
        ).default;
      } else {
        this.previewSourceCode = await fetch(`/packages/${this.compName}/docs/${this.demoName}.vue`).then((res) => res.text());
      }
    }
    await this.$nextTick(); // 确保在源码都渲染好了以后再执行高亮
    Prism.highlightAll();
  },
  methods: {
    showSourceCode() {
      this.codeVisible = !this.codeVisible;
    },
  },
}
</script>

<style lang="less">
pre {
  line-height: 0;
}
.mykit-preview {
  border: 4px;
  border: 1px dashed #e7e7e7;
  border-bottom: 1px dashed #e7e7e7;
  section {
    margin: 15px;
  }
}
.source-code {
  max-height: 500px;
}
.language-html {
  margin: 0;
  padding: 0 15px;
}
.preview-bottom {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px dashed #e7e7e7;
  cursor: pointer;
}
</style>