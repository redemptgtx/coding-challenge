function setData(data, key) {
  if (checkStorage(key)) {
    return;
  }
  localStorage.setItem(key, JSON.stringify(data));
}

function getData(key) {
  if (checkStorage(key)) {
    return;
  }
  var item = localStorage.getItem(key);

  if (!item) {
    return;
  }

  return JSON.parse(item);
}

function deleteData(key) {
  if (checkStorage(key)) {
    return;
  }
  localStorage.removeItem(key);
}

function checkStorage(key) {
  if (!window.localStorage || !window.JSON || !key) {
    return false;
  }
}

export { setData, getData, deleteData };
