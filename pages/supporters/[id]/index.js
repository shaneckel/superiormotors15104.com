import React, { useEffect, useState } from 'react'
import { SubNav } from '../../../components/subNav'
import { useRouter } from 'next/router'

const Supporter = () => {
  const router = useRouter()
  const { id } = router.query
  const [supporter, setSupporter] = useState(null);

  useEffect(() => {
    async function getSupporter() {
      const res = await fetch(`/api/supporters/${id}`);
      const data = await res.json();
      setSupporter(data);
    }
    getSupporter();
  }, []);
  
  if(!supporter) return <div></div>
  return (
    <main>
      <SubNav viewClass="support" />
      <article className="skewleft support articles list">
        <section className="content">
          {
            supporter.message
            ? <p>{supporter.message}</p>
            : (
              <div>
                <h1>Thank you {supporter[0][Object.getOwnPropertyNames(supporter[0])[0]]}.</h1>
                <p>Without you, Superior Motors would not have happened.</p>
              </div>
            )
          }
        </section>
      </article>
      <footer className="blue"><div className="info"><p>Superior Motors<span>|</span>Braddock, Pa</p><p><a href="tel:4122711022">(412) 271-1022</a></p><p><a href="https://www.google.com/maps/place/Superior+Motors/@40.3977638,-79.8626489,17z/data=!3m1!4b1!4m5!3m4!1s0x8834eee4611bb4b7:0x15a3def32be2a3c4!8m2!3d40.3977638!4d-79.8604602">1211 Braddock Ave, 15104</a></p><p><a href="http://www.opentable.com/single.aspx?rid=289261&amp;restref=289261">Make A Reservation</a></p><p><a href="https://www.facebook.com/superiormotors15104">facebook</a><span>|</span><a href="https://twitter.com/SM15104">twitter</a><span>|</span><a href="https://instagram.com/superiormotors15104/">instagram</a></p></div></footer>
      <style jsx>{`
        article.support{
          border-bottom: 1em solid #794b45;
        }
        .content p{
          margin-bottom: 3.5em;
        }
        .content h1{
          margin-top: 2em;
        }

      `}</style>
    </main>
  )
}
export default Supporter