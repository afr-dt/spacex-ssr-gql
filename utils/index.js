export const randomImage = (imgs) =>
  imgs[Math.floor(Math.random() * imgs.length)];

export const dateFormat = (date) => {
  return new Date(date).toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const dateTimeFormat = (time) => {
  return new Date(time).toLocaleTimeString();
};
