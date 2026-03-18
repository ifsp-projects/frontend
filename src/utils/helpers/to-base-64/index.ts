/**
 * Converts a given `File` object into a Base64-encoded string.
 *
 * This utility wraps the `FileReader` API in a `Promise`, allowing
 * asynchronous conversion of files (e.g., images, PDFs) into a string
 * that can be used for inline display, uploading, or storage.
 *
 * Example usage:
 * ```ts
 * const fileInput = document.querySelector('input[type="file"]');
 * const file = fileInput.files[0];
 * const base64String = await toBase64(file);
 * console.log(base64String); // data:image/png;base64,iVBORw0...
 * ```
 *
 * @param {File} file - The file to convert to Base64.
 * @returns {Promise<string>} A promise that resolves with the Base64 string
 * representation of the file, or rejects if an error occurs during reading.
 */
export const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
