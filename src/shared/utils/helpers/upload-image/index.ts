import type { uploadImageData } from './types'

/**
 * Uploads an image to the server (e.g., Cloudinary) via a POST request.
 *
 * This utility sends a JSON payload containing the image path to a
 * backend endpoint (`/api/cloudinary`) and returns the parsed JSON
 * response if the request is successful. If the upload fails, it
 * returns `null`.
 *
 * Example usage:
 * ```ts
 * const result = await uploadImage({ imagePath: '/images/photo.png' });
 *
 * if (result) {
 *   console.log('Image uploaded successfully:', result);
 * } else {
 *   console.error('Image upload failed.');
 * }
 * ```
 *
 * @param {uploadImageData} params - An object containing the `imagePath` of the image to upload.
 * @param {string} params.imagePath - The path or URL of the image to send to the backend.
 * @returns {Promise<any | null>} A promise that resolves with the JSON response
 * from the server if the upload succeeds, or `null` if it fails.
 */
export const uploadImage = async ({ imagePath }: uploadImageData) => {
  const request = await fetch('/api/cloudinary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      path: imagePath
    })
  })

  if (request.ok) {
    return await request.json()
  }

  return null
}
