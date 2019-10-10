export const convertToRoute = target => {
  let newTarget = target.innerText.toLowerCase();

  return `/${newTarget}`;
};
