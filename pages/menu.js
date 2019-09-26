import React, { useEffect, useState } from 'react'
import { SubNav } from '../components/subNav'
import { format } from 'date-fns'

function timeFix (arg) {
  return format(new Date(arg), 'MMMM dd, yyyy')
}

const Menu = () => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    async function getMenu() {
      const res = await fetch('/api/menu');
      const data = await res.json();
      setMenu(data[0]);
    }
    getMenu();
  }, []);
  
  if(!menu) return <div></div>

  return (
    <main>
      <SubNav viewClass="menu" />
      <article className="menu skewleft list">
        <section className="content">
          <h1>Menu <span>({ timeFix(menu.data['menu.menu_date'].value)})</span></h1>
            {
              Object.keys(menu.rawJSON.menu).map((item, index) => {
                let obj = menu.rawJSON.menu[item]
                if(obj.type === 'Group') {
                  return(
                    <article key={index} className="group">
                      {
                        obj.value.map((list, indexed) => {
                          return(
                            <div key={indexed}>
                              <h3><span>{list.item_title.value[0].text}</span> / {list.cost.value}</h3>
                              <p>
                                {list.vegan ? <span>({list.vegan.value}) </span> : null}
                                {list.description.value[0].text}
                              </p>
                            </div>
                          )
                        })
                      }
                    </article>
                  )
                }
              })
            }
          <h4>All Prices & Items Subject To Change</h4>
        </section>
      </article>
      <footer className="blue"><div className="info"><p>Superior Motors<span>|</span>Braddock, Pa</p><p><a href="tel:4122711022">(412) 271-1022</a></p><p><a href="https://www.google.com/maps/place/Superior+Motors/@40.3977638,-79.8626489,17z/data=!3m1!4b1!4m5!3m4!1s0x8834eee4611bb4b7:0x15a3def32be2a3c4!8m2!3d40.3977638!4d-79.8604602">1211 Braddock Ave, 15104</a></p><p><a href="http://www.opentable.com/single.aspx?rid=289261&amp;restref=289261">Make A Reservation</a></p><p><a href="https://www.facebook.com/superiormotors15104">facebook</a><span>|</span><a href="https://twitter.com/SM15104">twitter</a><span>|</span><a href="https://instagram.com/superiormotors15104/">instagram</a></p></div></footer>
      <style jsx>{`
        h1 span {
          font-family: Gotham Narrow SSm A,Gotham Narrow SSm B;
          font-size: .5em;
          letter-spacing: normal;
          font-weight: 400;
        }

        .group {
          position: relative;
          padding-top: 2.2em;
          margin-top: 2.2em;
        }

        .group:before {
          width: 3em;
          height: 5px;
          background: #fff;
          content: " ";
          top: 0;
          left: 0;
          position: absolute;
        }

        .group h3 {
          font-size: .9em;
          text-transform: uppercase;
        }

        .group p {
          color: #a6a8a5;
          font-size: 1.3em;
          line-height: 1.6em;
          font-weight: 300;
          letter-spacing: -.015em;
          font-size: .8em;
          margin-bottom: 1em;
        }

        .group p span{
          font-weight: 900;
        }

        h4{
          font-size: .7em;
          margin-top: 4em;
        }

        article.menu{
          border-bottom: 1em solid #794b45;
        }

      `}</style>
    </main>
  )
}
export default Menu