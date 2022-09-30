<script lang="ts">
import VerticalStack from "@/layout/VerticalStack.svelte"
import Toolbar from "@/organisms/Toolbar.svelte"
import TwoColumn from "@/layout/TwoColumn.svelte"
import EditorPanel from "@/organisms/EditorPanel.svelte"
import PreviewPanel from "@/organisms/PreviewPanel.svelte"
</script>

<div class="block-editor">
  <VerticalStack space="1.7rem">
    <Toolbar />
    <TwoColumn>
      <EditorPanel slot="left" />
      <PreviewPanel slot="right" />
    </TwoColumn>
  </VerticalStack>
</div>

<style lang="stylus">
.block-editor
  background-image: linear-gradient(
    -225deg,
    #5d9fff 0%,
    #b8dcff 48%,
    #6bbbff 100%
  )
  padding: 2rem
  margin: 1rem
  border-radius: 1rem
  box-sizing: border-box
  min-height: calc(100vh - 1rem * 2)
</style>
