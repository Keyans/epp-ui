<script>
export default {
  name: 'itemRender',
  functional: true,
  props: {
    data: Object,
    render: Function
  },
  render: (h, ctx) => {
    return ctx.props.render(h, ctx.props.data)
  }
}
</script>