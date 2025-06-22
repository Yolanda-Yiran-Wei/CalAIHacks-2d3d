import { IncomingForm } from "formidable"
import fs from "fs"
import path from "path"

export const config = {
  api: {
    bodyParser: false,
  },
}

export default function handler(req, res) {
  const form = new IncomingForm({ keepExtensions: true })

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Upload error" })

    // `files.images` contains the uploaded images
    // You can now pass them into your backend model here
    console.log("Received images:", files.images)

    // Example: fake model output
      const imageFiles = Array.isArray(files.images) ? files.images : [files.images]
      const filenames = imageFiles.map(file => file.newFilename)

      return res.status(200).json({
        success: true,
        message: "Model ran successfully",
        filenames,
      })

  })
}
