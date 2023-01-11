let index = 0;

show_image(index);

function show_image(i) {
  console.log(`i ${i}`);

  index += i;
  console.log(`index ${index}`);

  let images = document.getElementsByClassName('image');
  console.log(images.length);

  let dots = document.getElementsByClassName('dot');
  console.log(dots.length);

  for (let i = 0; i < images.length; i++) images[i].style.display = 'none';

  for (let i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(' active', '');

  if (index > images.length - 1) index = 0;

  if (index < 0) index = images.length - 1;

  images[index].style.display = 'block';
  dots[index].className += ' active';
}
