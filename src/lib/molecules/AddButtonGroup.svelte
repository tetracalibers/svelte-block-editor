<script>
import AddButton from "@/atoms/AddButton.svelte"
import HorizontalStack from "@/layout/HorizontalStack.svelte"

import IoMdImages from "svelte-icons/io/IoMdImages.svelte"
import IoIosLink from "svelte-icons/io/IoIosLink.svelte"
import IoIosCode from "svelte-icons/io/IoIosCode.svelte"
import GoKeyboard from "svelte-icons/go/GoKeyboard.svelte"
import IoIosArrowDropdown from "svelte-icons/io/IoIosArrowDropdown.svelte"
import FaParagraph from "svelte-icons/fa/FaParagraph.svelte"
import MdFormatListBulleted from "svelte-icons/md/MdFormatListBulleted.svelte"
import MdFormatListNumbered from "svelte-icons/md/MdFormatListNumbered.svelte"
import FaHeading from "svelte-icons/fa/FaHeading.svelte"
import MdFormatQuote from "svelte-icons/md/MdFormatQuote.svelte"
import GoTerminal from "svelte-icons/go/GoTerminal.svelte"
</script>

<HorizontalStack>
  <AddButton type="image">
    <IoMdImages />
  </AddButton>
  <AddButton type="link">
    <IoIosLink />
  </AddButton>
  <AddButton type="code">
    <IoIosCode />
  </AddButton>
  <AddButton type="keyboard">
    <GoKeyboard />
  </AddButton>
  <AddButton type="toggle">
    <IoIosArrowDropdown />
  </AddButton>
  <AddButton type="paragraph">
    <FaParagraph />
  </AddButton>
  <AddButton type="list">
    <MdFormatListBulleted />
  </AddButton>
  <AddButton type="ordered list">
    <MdFormatListNumbered />
  </AddButton>
  <AddButton type="heading">
    <FaHeading />
  </AddButton>
  <AddButton type="blockquote">
    <MdFormatQuote />
  </AddButton>
  <AddButton type="terminal">
    <GoTerminal />
  </AddButton>
</HorizontalStack>
