import slide from './transitions/slide';

const { barba } = window;

console.info('🚀App:init');

barba.hooks.before(() => {
  barba.wrapper.classList.add('is-animating');
});
barba.hooks.after(() => {
  barba.wrapper.classList.remove('is-animating');
});

barba.init({
  debug: true,
  transitions: [
    {
      sync: true,
      custom: ({ trigger }) => trigger.dataset && trigger.dataset.direction === 'next',
      leave: ({ current }) => slide(current.container, 'leave', 'next'),
      enter: ({ next }) => slide(next.container, 'enter', 'next'),
    },
    {
      sync: true,
      custom: ({ trigger }) => trigger.dataset && trigger.dataset.direction === 'prev',
      leave: ({ current }) => slide(current.container, 'leave', 'prev'),
      enter: ({ next }) => slide(next.container, 'enter', 'prev'),
    },
  ],
});
