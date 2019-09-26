import { SubNav } from '../components/subNav'
import React from 'react'

const Private = () => {
  return (
    <React.Fragment>
      <main>
        <SubNav viewClass="private" />
        <article className="menu skewleft">
          <section className="content">
            <h1>Private Parties</h1>
            <p>Call <b>Chris Clark</b> at <a href="tel:9174559207">917.455.9207</a> or email him at <a href="mailto:chris@superiormotors15104.com">chris@superiormotors15104.com</a> to book a private event.</p>
          </section>
        </article>
        <footer className="blue"><div className="info"><p>Superior Motors<span>|</span>Braddock, Pa</p><p><a href="tel:4122711022">(412) 271-1022</a></p><p><a href="https://www.google.com/maps/place/Superior+Motors/@40.3977638,-79.8626489,17z/data=!3m1!4b1!4m5!3m4!1s0x8834eee4611bb4b7:0x15a3def32be2a3c4!8m2!3d40.3977638!4d-79.8604602">1211 Braddock Ave, 15104</a></p><p><a href="http://www.opentable.com/single.aspx?rid=289261&amp;restref=289261">Make A Reservation</a></p><p><a href="https://www.facebook.com/superiormotors15104">facebook</a><span>|</span><a href="https://twitter.com/SM15104">twitter</a><span>|</span><a href="https://instagram.com/superiormotors15104/">instagram</a></p></div></footer>
      </main>
      <style jsx>{`
        article.menu{
          border-bottom: 1em solid #794b45;
        }
        b{
          font-weight: 900;
        }
        h1{
          padding-bottom: 2em;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Private
