const prismic = require('prismic.io')
const API = 'https://superiormotors.prismic.io/api'

export default (req, res) => {
  prismic.api(API, (err, api) => {
    api.query(
      [ prismic.Predicates.at("document.type", "menu")],
      { pageSize: 1, orderings : '[document.last_publication_date desc]'  }
    )
    .then((data) => res.send(data.results))
    .catch((err) => console.log(err))
  }) 
}