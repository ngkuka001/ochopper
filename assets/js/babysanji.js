setTimeout(() => {
  const preloader = document.getElementById('preload-section');
  preloader.classList.add('hidden');
  document.querySelector('.layout-wrapper').classList.remove('hidden');
}, 1500);

window.onload = () => {
  const refs = [
    ...document.querySelectorAll(
      `[class*="animate__"]:not(.preloader):not(.not-effect)`
    ),
  ];
  const handleFade = (windowOffset) => {
    refs.forEach((ele) => {
      const eleOffset = ele.offsetTop;
      if (windowOffset > eleOffset - screen.height / 2 - 200) {
        if (ele.classList.contains('baby__right')) {
          ele.classList.add('animate__fadeInRightBig');
          ele.classList.remove('animate__fadeOut');
          return;
        }
        if (ele.classList.contains('baby__left')) {
          ele.classList.add('animate__fadeInLeftBig');
          ele.classList.remove('animate__fadeOut');
          return;
        }

        ele.classList.add('animate__fadeInUp');
        ele.classList.remove('animate__fadeOut');
      }
    });
  };
  const initWindow = window.pageYOffset;
  setTimeout(() => {
    handleFade(initWindow);
  }, 1505);

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    handleFade(currentScroll);

    // header sticky
    const header = document.getElementById('header');
    currentScroll > 0
      ? header.classList.add('header-sticky')
      : header.classList.remove('header-sticky');
  });

  // img-feature position
  const tokenImgs = document.querySelectorAll('.img-feature');
  const tokenItems = document.querySelectorAll('.featured-wrapper');
  const featuredWrapper = document.querySelector('.featured-wrapper');

  const handlePositionToken = () => {
    tokenImgs.forEach((img) => {
      const nextDiv = img.nextElementSibling;
      const thisHeight = img.height;

      img.style.top = -(thisHeight / 2) + 'px';
      nextDiv.style.paddingTop = thisHeight / 2 + 'px';
    });
  };
  setTimeout(() => {
    handlePositionToken();
  }, 1550);

  window.addEventListener('resize', handlePositionToken);
};
