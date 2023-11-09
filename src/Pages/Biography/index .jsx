import { ImagenP } from '../../Components/Biography/imagenP'
import { IconButtonCustomStyles } from '../../Components/Biography/informacion'
import { Nombre } from '../../Components/Biography/Nombre/Nombre'
import { Layout } from '../../components/Layout'

export const Biography = () => {
  return (
    <>
      <Layout>
          <div className="bg-[url('src/assets/FondoBio.jpg')] bg-cover">
          <ImagenP></ImagenP>
          <Nombre/>
          <IconButtonCustomStyles/>
          </div>
    </Layout>
    </>
  )
}
