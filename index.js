function nav(url) {
    const address = window.location.href.split("/");
    address.pop();
    address.push(url)
    window.open(address.join("/"), "_blank");
}
function download(url) {

    window.open(url, "_blank");
}