/**
 * Decorates hero block
 * @param {Element} block The hero block element
 */
export default function decorate(block) {
  if (!block.querySelector(':scope > div:first-child picture')) {
    block.classList.add('no-image');
  }
}
