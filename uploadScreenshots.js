import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: 'ddslcdypq',
  api_key: '792144224129451',
  api_secret: 'cVJDVxOZ3T63rbkRxG-NVLCDfAo'
})

const upload = async () => {
  try {
    const r1 = await cloudinary.uploader.upload(
      'C:/Users/dell/Pictures/Screenshots/Screenshot_2026-06-05_181627.png',
      { public_id: 'project_prescripto', resource_type: 'image' }
    )
    console.log('Prescripto:', r1.secure_url)

    const r2 = await cloudinary.uploader.upload(
      'C:/Users/dell/Pictures/Screenshots/Screenshot_2026-06-05_181733.png',
      { public_id: 'project_resume', resource_type: 'image' }
    )
    console.log('Resume:', r2.secure_url)

    const r3 = await cloudinary.uploader.upload(
      'C:/Users/dell/Pictures/Screenshots/Screenshot_2026-06-05_182102.png',
      { public_id: 'project_amazon', resource_type: 'image' }
    )
    console.log('Amazon:', r3.secure_url)

  } catch (error) {
    console.log('Error:', error.message)
  }
}

upload()