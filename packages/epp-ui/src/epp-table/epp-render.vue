<!--
 * @Author: your name
 * @Date: 2020-09-16 16:43:05
 * @LastEditTime: 2020-09-17 15:31:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @Fileppath: /qun/src/components/lp-table/lp-render.vue
-->
<script>
export default {
  name: 'eppRender',
  functional: true,
  props: {
    scope: Object,
    render: Function,
  },
  render: (h, ctx) => (ctx.props.render ? ctx.props.render(h, ctx.props.scope) : ''),
};
</script>
