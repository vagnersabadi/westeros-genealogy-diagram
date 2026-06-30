export const avatar = (name: string, bg: string, color: string = "f1e6d0") =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${bg}&color=${color}&size=160&font-size=0.35&bold=true`;
