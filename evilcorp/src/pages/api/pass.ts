import { NextApiRequest, NextApiResponse } from "next";
import { settings } from "../../../globalsettings"

export default function Pass(req: NextApiRequest, res: NextApiResponse) {
  
  const PASSWORD = settings.COORDINATE_PASSWORD
  
  const LAT = settings.COORDINATE_LAT.toString()
  const LONG = settings.COORDINATE_LONG.toString()
        
  if (req.body.pass === PASSWORD) {
    res.status(200).json({ LAT, LONG })
  } else {
    res.status(401).json({ message: "Invalid pass" })
  }
}