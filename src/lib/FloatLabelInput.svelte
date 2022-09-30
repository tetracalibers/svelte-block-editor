<script lang="ts">
import VisuallyHidden from "@/lib/VisuallyHidden.svelte"

export let id: string
export let label: string
</script>

<div class="floating">
  <input
    id="{id}"
    placeholder="{label}"
    type="{$$restProps.type ?? 'text'}"
    class="floating__input"
    {...$$restProps}
  />
  <label for="{id}" data-label="{label}" class="floating__label">
    <VisuallyHidden>{label}</VisuallyHidden>
  </label>
</div>

<style lang="stylus">
txt-color = #4d608b
bg-color = rgba(255, 255, 255, 0.25)
float-color = #8c1bab
border-color = #ce9ffc
border-radius = 10px

.floating
  background-color: bg-color
  backdrop-filter: blur(4px)
  border-radius: border-radius
  box-sizing: border-box
  outline: none
  width: 100%
  font-size: 16px
  line-height: 1
  
  &__input 
    background-color: bg-color
    backdrop-filter: blur(4px)
    border-radius: border-radius
    border: none
    display: block
    width: 100%
    appearance: none
    box-sizing: border-box
    outline: none
    padding: 1.8rem 1rem 0.6rem
    caret-color: txt-color
    &::placeholder 
      /* 表示状態を検知するために透明にして残しておく */
      color: rgba(255, 255, 255, 0)
      
  &__label 
    display: block
    position: relative
    max-height: 0
    pointer-events: none
    &::before 
      color: txt-color
      content: attr(data-label)
      display: inline-block
      filter: blur(0)
      backface-visibility: hidden
      transform-origin: left top
      transition: transform 0.2s ease
      left: 1rem
      position: relative
      
  &__input:placeholder-shown + &__label::before
    transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1)
    
  &__label::before
  &__input:focus + &__label::before
    transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1)

  /* focus時と入力済みの場合 */
  &__input:focus + &__label::before
  &__input:not(:placeholder-shown) + &__label::before
    color: float-color
</style>
