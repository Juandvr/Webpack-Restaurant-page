const images = {};
const r = import.meta.webpackContext('./media', {
    recursive: false,
    regExp: /\.(png|jpg|jpeg|svg|webp)$/,
});

r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
});

export default images