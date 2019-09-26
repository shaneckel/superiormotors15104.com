import React, { useEffect, useState } from 'react'
import { SubNav } from '../../components/subNav'
import Link from 'next/link'

const Supporters = () => {
  const [supporters, setSupporters] = useState(null);

  useEffect(() => {
    async function getSupporters() {
      const res = await fetch('/api/supporters');
      const data = await res.json();
      setSupporters(data);
    }
    getSupporters();
  }, []);
 
  if(!supporters) return <div></div>
  return (
    <main>
      <SubNav viewClass="support" />
      <article className="support skewleft list articles ">
        <section className="content">
          <h1>Superior Motors supporters</h1>
          <p>Superior Motor's would not have been possible if it wasn't for our supporters. We cannot thank them enough for their support in helping to start and build our restaurant. Thank you. Truly.</p>
          <div className="support-list">
            {
              supporters.map((supporter, key) => {
                return (
                  <Link key={key} href='/supporters/[id]' as={`/supporters/${Object.getOwnPropertyNames(supporter)[0]}`}>
                    <a><p className="link">{supporter[Object.getOwnPropertyNames(supporter)]}</p></a>
                  </Link>
                )
              })
            }
          </div>
        </section>
      </article>
      <footer className="blue"><div className="info"><p>Superior Motors<span>|</span>Braddock, Pa</p><p><a href="tel:4122711022">(412) 271-1022</a></p><p><a href="https://www.google.com/maps/place/Superior+Motors/@40.3977638,-79.8626489,17z/data=!3m1!4b1!4m5!3m4!1s0x8834eee4611bb4b7:0x15a3def32be2a3c4!8m2!3d40.3977638!4d-79.8604602">1211 Braddock Ave, 15104</a></p><p><a href="http://www.opentable.com/single.aspx?rid=289261&amp;restref=289261">Make A Reservation</a></p><p><a href="https://www.facebook.com/superiormotors15104">facebook</a><span>|</span><a href="https://twitter.com/SM15104">twitter</a><span>|</span><a href="https://instagram.com/superiormotors15104/">instagram</a></p></div></footer>
      <style jsx>{`
        article.menu{
          border-bottom: 1em solid #794b45;
        }
        .support-list p {
          font-size: .8em;
        }
        .link:hover {
          color: #b98261;
          text-decoration: underline;
        }
        @media only screen and (max-width: 767px)
          .support-list[data-v-e4cdac66] {
            -webkit-column-count: 2;
            column-count: 2;
            font-size: 1.5em;
          }
        }
        article.support{
          border-bottom: 1em solid #794b45;
        }
        @media only screen and (min-width: 768px)
         .support-list {
            -webkit-column-count: 3;
            column-count: 3;
            font-size: 1em;
          }
        
          .support-list {
            -webkit-column-count: 4;
            column-count: 4;
            margin-top: 3em;
            font-size: .8em;
            text-transform: capitalize;
          }
        }
      `}</style>
    </main>
  )
}
export default Supporters