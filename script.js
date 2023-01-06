"use strict";
//!! registeration animation button-2 start -
gsap.to("#btn-b", 1, {
  y: 10,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut",
  delay: 1,
  stagger: {
    amount: 1.5,
    grid: "auto",
    from: "center",
  },
});
//! registeration animation button-2 end -

//!! image animation landing page start-
gsap.to("#neden-biz", 1, {
  y: 10,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut",
  delay: 1,
  stagger: {
    amount: 1.5,
    grid: "auto",
    from: "center",
  },
});
//!! image animation landing page end-
