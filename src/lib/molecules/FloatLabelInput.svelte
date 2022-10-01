<script lang="ts">
import VisuallyHidden from "@/a11y/VisuallyHidden.svelte"

type IType = "text" | "number" | "email" | "url" | "password"
type IValue<T extends IType> = T extends "number" ? number : string

export let id: string
export let label: string
export let type: IType = "text"
export let value: IValue<typeof type> = type === "number" ? 0 : ""
</script>

<div class="floating">
  <input
    id="{id}"
    placeholder="{label}"
    class="floating__input"
    bind:value
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
    font-size: 16px
    caret-color: txt-color
    &::placeholder 
      /* 表示状態を検知するために透明にして残しておく */
      color: rgba(255, 255, 255, 0)
      
  &__label 
    display: flex
    justify-content: center
    position: relative
    max-height: 0
    pointer-events: none
    width: 100%;
    &::before 
      color: txt-color
      content: attr(data-label)
      display: inline-block
      filter: blur(0)
      backface-visibility: hidden
      transform-origin: left top
      transition: transform 0.2s ease
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
