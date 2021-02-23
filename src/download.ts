/**
 * 
 * Download binary resources on the browser
 * @param {Blob} blob binary resources
 * @param {String} filename filename
 * 
 * @example
 * ```typescript
 * let skel = ["Hi", "skelanimals"];
 * let blob = new Blob(skel, { "type" : "text/xml" });
 * download(blob, 'skel'); 
 * 
 * ```
 */
export function downloadBlob(blob:Blob, filename:string = 'unknown'):void {
  const eleLink = document.createElement('a');

  eleLink.download = filename;
  eleLink.style.display = 'none';
  eleLink.href = URL.createObjectURL(blob);

  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}
/**
 * 
 * Download string resources on the browser
 * @param {String} string string resources
 * @param {String} filename filename
 * 
 * @example
 * ```typescript
 * let skel = "Hi, skelanimals";
 * downloadString(skel, 'skel'); 
 * 
 * ```
 */
export function downloadString(string:string, filename = 'unknown.txt'):void {
  const blob = new Blob([string], {
    type: 'text/plain'
  });

  downloadBlob(blob, filename);
}
/**
 * 
 * Download url resources on the browser
 * @param {String} url download url
 * @param {String} filename filename
 * @returns {Promise<Response>} response promise object
 * 
 * @example
 * ```typescript
 * downloadUrl('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3102590220,4173611769&fm=26&gp=0.jpg')
 * and you can use it in async function like this:
 * (async () => {
 *  const url = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3102590220,4173611769&fm=26&gp=0.jpg'
 *  await downloadUrl(url)
 * })()
 * 
 * ```
 * @throws fetch error
 */
export async function downloadUrl(url:string, filename = url.substr(url.lastIndexOf('/'))):Promise<any> {
  try {
    const res = await fetch(url);
    const blob = await res.blob();

    downloadBlob(blob, filename);
  } catch (error) {
    throw new Error(error);
  }
}
