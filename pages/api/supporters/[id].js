import { supporters } from './supporters'

export default ({ query: { id } }, res) => {
  var supporter = supporters.filter((item) => {
    if(Object.getOwnPropertyNames(item)[0] == id)
      return item;
  })
  if (supporter.length > 0) {
    res.status(200).json(supporter)
  } else {
    res.status(404).json({ message: `Supporter with id: ${id} not found.` })
  }
}