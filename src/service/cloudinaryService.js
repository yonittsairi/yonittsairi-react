export const cloudinaryService = {
  uploadImg
}
async function uploadImg(file) {
  console.log(file);
  const CLOUD_NAME = 'ds65blvkpnp'
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

  const formData = new FormData();
  formData.append('file', file)
  formData.append('upload_preset', 'ds65blvkpnp');
  try {
    const res = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData
    })
    const data = await res.json()
    return data

  } catch (err) {
    console.log(err);
  }
}
