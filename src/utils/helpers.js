export function getData({ method, callback, dataUrl, headers, body }) {
  const send = JSON.stringify(body);
  const data = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, dataUrl);
    if (typeof headers === 'object') {
        for (let key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
    }
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    if (send) {
        xhr.send(send);
    } else {
        xhr.send();
    }

  });

  data.then((data) => {
    callback(data);
  });
}
