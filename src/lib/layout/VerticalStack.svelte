<script lang="ts">
export let recursive = false

$: classNames = ["v-stack", recursive ? "recursive" : ""].join(" ")
</script>

<div class="{classNames}" {...$$restProps}>
  <slot />
</div>

<style lang="stylus">
margin-top = 1rem

.v-stack
  display: flex
  flex-direction: column
  justify-content: flex-start
  gap: margin-top
  
  :global(> *)
    /* 既存の垂直marginを削除 */
    margin-top: 0
    margin-bottom: 0
  
  :global(&.recursive * > :not(:first-child))
    margin-top: margin-top
</style>
