import { CardInfo } from "./cardInfo"

export function Informacion() {
  const cardPhone= {img:"src/assets/iphone.png",  titulo:"PHONE", descripcion:"3170501796" }
  const cardEmail={img:"src/assets/email.png", titulo:"MAIL", descripcion:"bdelgadomunoz@gmail.com"}
  const cardWebSite={img:"src/assets/web.png", titulo:"WEBSITE", descripcion:"github.com/br3y3n"}
  const cardLocation={img:"src/assets/location.png", titulo:"LOCATION", descripcion:"POPAYAN_CAUCA"}
  return (
    <article className="flex gap-32 flex-wrap max-w-4xl translate-y-36 translate-x-32">
      <CardInfo card={cardPhone} ></CardInfo>
      <CardInfo card={cardEmail}></CardInfo>
      <CardInfo card={cardWebSite}></CardInfo>
      <CardInfo card={cardLocation}></CardInfo>
     
    </article>
  );
}