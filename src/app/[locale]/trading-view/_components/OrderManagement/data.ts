export const orderTabs = [{ element: 'limitOrder' }, { element: 'openOrders' }].map(
  (el, index) => ({
    ...el,
    id: index,
  })
);

export const actionsTabs = [{ element: 'buy' }, { element: 'sell' }].map((el, index) => ({
  ...el,
  id: index,
}));

export const options = [
  { label: '25%', value: 0.25 },
  { label: '50%', value: 0.5 },
  { label: '75%', value: 0.75 },
  { label: '100%', value: 1 },
];
