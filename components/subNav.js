import React from 'react'
import Link from 'next/link'

export const SubNav = (props) => {
  return (
    <React.Fragment>
      <header className={`feature secondary ${props.viewClass}`}>
        <nav className="skewright">
          <div className="content">
            <Link href="/">
              <figure>
                <img src="/static/img/superiormotors.min.png" alt="superior motors logomark" />
              </figure>
            </Link>
            <Link href="/kevinsousa"><a className="button">chef</a></Link>
            <Link href="/private"><a className="button">private party</a></Link>
            <Link href="/supporters"><a className="button">supporters</a></Link>
            <Link href="/menu"><a className="button">menu</a></Link>
          </div>
        </nav>
      </header>
      <style jsx>{`
        .menu{
          background-image: url("static/img/header_menu_l.jpg")
        }
        .private{
          background-image: url("static/img/header_private.jpg")
        }
        .support{
          background-image: url("static/img/header_supporters.jpg")
        }
      `}</style>
    </React.Fragment>  
  )
}

