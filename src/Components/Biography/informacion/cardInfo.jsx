import React from 'react'
  const styleDiv="flex flex-wrap gap-5 w-60 "
  const styleAside="border-2 border-sky-600 rounded-full w-12 h-12 bg-sky-600 flex items-center pl-0.5"
  const styleImg="h-10 bg-slate-200 rounded-full"
  const styleh1="text-sky-700 text-2xl"
  const styleP="text-xl text-slate-200 -translate-y-10 translate-x-16"
export const CardInfo = (card) => {
  return (
    <div className={styleDiv}>
        <aside className={styleAside}>
        <img src={card.card.img} alt=""  className={styleImg}/>
        
        </aside>
        <h1 className={styleh1}>{card.card.titulo}</h1><br />
        <p className={styleP}>{card.card.descripcion}</p>

      </div>
  )
}
