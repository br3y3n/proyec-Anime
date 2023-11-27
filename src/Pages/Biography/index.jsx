import { ImagenP } from '../../Components/Biography/imagenP'
import { InfoLateral } from '../../Components/Biography/InfoLateral'
import { Informacion } from '../../Components/Biography/informacion'
import { Nombre } from '../../Components/Biography/Nombre'
import { Layout } from '../../components/Layout'

export const Biography = () => {
  return (
    //pages for Biography
    <>
      <Layout>
        <div className="bg-[url('src/assets/fondoBio.jpg')] bg-cover h-screen ">

          <div className='flex flex-wrap'>

          <ImagenP ></ImagenP>
             
          <Nombre/>
              
              
          <Informacion > </Informacion>
          <InfoLateral/>
          </div>
             
        </div>
    </Layout>
    </>
  )
}
