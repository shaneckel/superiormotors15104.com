import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <main>
      <header className="feature">
        <aside className="top-menu">
          <p><a href="#reservation">reservation</a></p>
          <p><a href="#reservation">call</a></p>
          <p><Link href='/menu'><a>menu</a></Link></p>
          <p><Link href='/private'><a>private parties</a></Link></p>
        </aside>
        <section className="content">
          <div className="svg-container"><img className="svg-content" src="static/img/superiormotors-update.svg" alt="superior motors 15104"/></div>
        </section>
      </header>

      <article className="welcome skewleft">
        <section className="mainswipe swiper-container-horizontal">
          <div className="wrapper">
            <div className="slide swiper-slide swiper-slide-active">
              <img src="static/img/swipe/nswp1_l.jpg" />
            </div>
            <div className="slide hide swiper-slide swiper-slide-active">
              <img src="static/img/swipe/nswp2_l.jpg" />
            </div>
            <div className="slide swiper-slide swiper-slide-active">
              <img src="static/img/swipe/nswp3_l.jpg" />
            </div>
          </div>
        </section>
        <section className="content">
          <h1>Superior Motors</h1>
          <p>Thoughtfully prepared food drawing inspiration from Braddock, its people, its history and its perseverance. The cuisine will best represent the eclectic style which has become a trademark of <Link href='/kevinsousa'><a className="inlineorange">Chef Kevin Sousa</a></Link>.</p>
        </section>
      </article>

      <article className="accolades skewright">
        <section className="content">
          <h1>accolades</h1>
          <p><a href="https://www.nytimes.com/2018/07/07/travel/superior-motors-restaurant-pittsburgh-review.html" className="inlineorange">NY Times - A Pittsburgh-Area Restaurant That Trades Fussy for Fun</a></p>
          <p><a href="http://www.foodandwine.com/restaurants-of-the-year" className="inlineorange">Food &amp; Wine - Restaurants of the Year 2018</a></p>
          <p><a href="http://time.com/collection/worlds-greatest-places-2018/5366708/superior-motors-braddock-pennsylvania/" className="inlineorange">Time Magazine - World's Greatest Places</a></p>
          <p><a href="https://www.pittsburghmagazine.com/Pittsburgh-Magazine/June-2018/Best-New-Restaurant-of-2018-Superior-Motors/" className="inlineorange">Pittsburgh Magazine - Best New Restaurant of 2018</a></p>
        </section>
      </article>

      <article className="hours skewright">
        <section className="content">
          <h1>Hours</h1>
          <p>Monday – Tuesday / <span>Closed</span></p>
          <p>Wednesday – Thursday / <span>5p – 10p</span></p>
          <p>Friday / <span>5p – 11p</span></p>
          <p>Saturday / <span>5p – 11p</span></p>
          <p>Sunday / <span>5p – 9p</span></p>
        </section>
      </article>

      <article className="reservation skewleft" id="reservation">
        <section className="content">
          <h1>Reservations</h1>
          <div className="reserve-widget">
            <div className="text">
              <p>We take reservations through <a href='http://www.opentable.com/single.aspx?rid=289261&restref=289261'>Opentable</a>.</p>
              <p>Or call <a href="tel:4122711022">(412) 271-1022</a></p>
            </div>
          </div>
        </section>
        <a className="badge blue" href='http://www.opentable.com/single.aspx?rid=289261&restref=289261'>Reserve</a>
      </article>

      <article className="sourcing skewright">
        <section className="content">
          <h1>Getting Here</h1>
          <div className="hearth">
            <div className="right-hearth">
              <p>Superior Motors is much closer than you think.</p>
              <p>Here's a list of times it takes to commute to Superior Motors.</p>
              <h2 className="main"><a href="https://www.google.com/maps/place/Superior+Motors/@40.3977638,-79.8626489,17z/data=!3m1!4b1!4m5!3m4!1s0x8834eee4611bb4b7:0x15a3def32be2a3c4!8m2!3d40.3977638!4d-79.8604602" className="linkbutton">1211 Braddock Ave</a></h2>
              <p>(in low to moderate traffic)</p>
            </div>
            <div className="left-hearth">
              <p><em>North Side</em> 24min</p>
              <p><em>Point Breeze</em> 21min</p>
              <p><em>South Side</em> 22min</p>
              <p><em>Mount Lebanon</em> 39min</p>
              <p><em>Downtown</em> 22min</p>
              <p><em>Greensburg</em> 40min</p>
              <p><em>Lawrenceville</em> 26min</p>
              <p><em>Penn Hills</em> 20min</p>
              <p><em>Monroeville</em> 13min</p>
              <p><em>Troy Hill</em> 24min</p>
              <p><em>Fox Chapel</em> 32min</p>
              <p><em>Shadyside</em> 20min</p>
              <p><em>Squirrel Hill</em> 15min</p>
              <p><em>North Hills</em> 29min</p>
            </div>
          </div>
        </section>
      </article>

      <article className="reservation misc skewleft">
        <section className="content">
          <h1>Misc</h1>
          <p><a href="https://www.toasttab.com/superior-motors/giftcards" className="inlineorange">Superior Motors gift cards</a></p>
          <p><a href="https://my.matterport.com/show/?m=wkt14cLxhfg&amp;utm_source=3" className="inlineorange">Virtual Tour of Superior Motors</a></p>
        </section>
      </article>

      <article className="location skewright">
        <figure className="themap"></figure>
        <section className="content">
          <h1>location</h1>
          <aside>
            <h2 className="main"><a href="https://www.google.com/maps/place/Superior+Motors/@40.3977638,-79.8626489,17z/data=!3m1!4b1!4m5!3m4!1s0x8834eee4611bb4b7:0x15a3def32be2a3c4!8m2!3d40.3977638!4d-79.8604602" className="linkbutton">1211 Braddock Ave</a></h2>
            <p>Braddock, Pennsylvania</p>
          </aside>
          <p>Parking is available at our building.</p>
          <p>Located at the former site of one of the first indoor Chevrolet dealerships in the country.</p>
        </section>
      </article>
      
      <article className="social skewleft">
        <section className="content">
          <h1>social</h1>
          <div>
            <a href="https://www.facebook.com/superiormotors15104" className="linkbutton">facebook</a><a href="https://twitter.com/SM15104" className="linkbutton">twitter</a><a href="https://instagram.com/superiormotors15104/" className="linkbutton">instagram</a>
          </div>
        </section>
      </article>

      <footer className="tag">
        <p>Superior Motors | 2019 | BRADDOCK, PA | <a href="https://shaneckel.com">design</a></p>
      </footer>

      <style jsx>{`
        section.mainswipe{
          margin-top: 2.2em;
        }
        section.mainswipe div {
          display: inline;
        }
        section.mainswipe div img{
          width: 33.33%;
        }
        h1{
          font-weight: 600;
          font-style: normal;
          font-size: 2.2em;
          letter-spacing: 0.095em;
          padding: 1.4em 0 .8em;
        }
        .hours {
          padding-bottom: 15%;
        }
        p{
          font-size: 1.3em;
          line-height: 1.6em;
          font-weight: 300;
          letter-spacing: -0.015em;
        }

        > article {
          position: relative;
          outline: 1px solid transparent;
        }

        .location {
          padding-bottom: 6.5em;
        }

        article.location .themap{
          background:url("../../static/img/map.jpg");
          background-size: cover;
          width: 50%;
          top: 5%;
        }

        article.location .content{
          width: 50%;
          padding-bottom: 5%;
        }
        @media only screen and (max-width:767px){
          article.location .content{
            width: 100%;
            padding-bottom: 15%;
          }
        }
        > article:before {
          display: block;
          background-color: rgba(71, 79, 82, 0.25);
          position: absolute;
          left: 0;
          top: 0;
          content: " ";
          width: calc(50% - 1140px / 2);
          height: 100%;
          z-index: 24;
        }
        .sourcing{
          padding-bottom: 10%;
        }
        > article:after {
          display: block;
          background-color: rgba(71, 79, 82, 0.25);
          position: absolute;
          right: 0;
          top: 0;
          content: " ";
          width: calc(50% - 1140px / 2);
          height: 100%;
          z-index: 24;
        }
        .reservation{
          padding-bottom:20%;
          margin-top: -5.5em;
        }
        > article {
          outline: 1px solid transparent;
          position: relative;
        }
    `}</style>
    </main>
  )
}

export default Home