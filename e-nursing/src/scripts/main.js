function pageTransition() {
  var tl = gsap.timeline();
  tl.to('ul.transition li', { duration: 0.5, scaleY:1, transformOrigin: "bottom left", stagger: .2})
}


function delay (n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}


barba.init({
  sync: true,
  transitions: [{
    async leave(data) {
      const done = this.async();
      
      pageTransition();
      await delay(1500);
      done();
    }
  }]
})