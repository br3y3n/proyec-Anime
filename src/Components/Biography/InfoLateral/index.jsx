import React from 'react'

export const InfoLateral = () => {
    const styleIcon="bg-slate-50 rounded-full h-12 w-12 mb-16"
  return (
  <article className='p-2 w-max translate-x-4 translate-y-40' >
    <div className={styleIcon}>
        <img src="src/assets/likedin.png" alt="" />
    </div>
    <div className={styleIcon}>
        <img src="src/assets/twitter.png" alt="" className=' p-2'/>
    </div>
    <div className={styleIcon}>
        <img src="src/assets/facebook.png" alt="" />
    </div>
  </article>
  )
}
