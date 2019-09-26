import { supporters } from './supporters'

export default (req, res) => {
  res.status(200).json(supporters)
}