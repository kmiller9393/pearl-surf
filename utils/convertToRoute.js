export const convertToRoute = target => {
  let newTarget = target.innerText.toLowerCase();

  if (newTarget.includes('home')) {
    newTarget = '';
  }

  return `/${newTarget}`;
};
