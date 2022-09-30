const l_units = [
  "px",
  "em",
  "ex",
  "ch",
  "rem",
  //'lh',
  //'rlh',
  "vw",
  "vh",
  "vmin",
  "vmax",
  "vb",
  "vi",
  "svw",
  "svh",
  "lvw",
  "lvh",
  "dvw",
  "dvh",
] as const

export type L_Unit = typeof l_units[number]

export type Length = `${number}${L_Unit}`
