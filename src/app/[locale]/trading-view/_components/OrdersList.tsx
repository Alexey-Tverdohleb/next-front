import { useTranslations } from 'next-intl';

const mockData = [
  { price: 0.33361, amount: 1438.4, total: 427.492, process: 20 },
  { price: 0.33361, amount: 1438.4, total: 427.492 },
  { price: 0.33361, amount: 1438.4, total: 427.492 },
  { price: 0.33361, amount: 1438.4, total: 427.492 },
  { price: 0.33361, amount: 1438.4, total: 427.492, process: 30 },
  { price: 0.33361, amount: 1438.4, total: 427.492 },
  { price: 0.33361, amount: 1438.4, total: 427.492, process: 23 },
  { price: 0.33361, amount: 1438.4, total: 427.492 },
  { price: 0.33361, amount: 1438.4, total: 427.492, process: 100 },
];

const gradient = (isPositive: boolean, process?: number) => {
  if (!process) return;

  if (isPositive) {
    return `linear-gradient(to left, rgba(34, 197, 94, 0.30) ${process}%, rgba(0,0,0,0) ${process}%)`;
  }

  return `linear-gradient(to left, rgba(239, 68, 68, 0.30) ${process}%, rgba(0,0,0,0) ${process}%)`;
};

export default function OrdersList() {
  const t = useTranslations('OrdersList');

  return (
    <div className="rounded-xl border border-gray-divider bg-white p-3 dark:border-dark-300 dark:bg-dark-400 desktop:rounded-none desktop:border-0 desktop:border-r desktop:pb-0 desktop:pl-0">
      <div className="grid grid-cols-3">
        <div className="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-secondary dark:text-dark-gray">
          {t('price', { coin: 'SNAK' })}
        </div>
        <div className="whitespace-nowrap px-3 py-2 text-sm font-medium text-gray-secondary dark:text-dark-gray">
          {t('amount', { coin: 'ADA' })}
        </div>
        <div className="px-3 py-2 text-end text-sm font-medium text-gray-secondary dark:text-dark-gray">
          {t('total')}
        </div>
      </div>
      {mockData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3"
          style={{
            background: gradient(false, item?.process),
          }}
        >
          <div className="px-3 py-2 text-sm font-medium text-red">{item.price}</div>
          <div className="px-3 py-2 text-end text-sm font-medium dark:text-dark-white">
            {item.amount}
          </div>
          <div className="px-3 py-2 text-end text-sm font-medium dark:text-dark-white">
            {item.total}
          </div>
        </div>
      ))}
      <div className="grid grid-cols-3">
        <div className="px-3 py-2 text-md font-semibold dark:text-dark-white">0.27517</div>
        <div className="px-3 py-2 text-end text-md font-semibold dark:text-dark-white">
          430,607.1
        </div>
        <button className="my-auto ml-auto mr-3 h-fit w-fit rounded px-1.5 py-1 text-end text-xs font-semibold dark:border dark:border-dark-gray dark:bg-dark-200 dark:text-[10px] dark:text-dark-white">
          {t('moreButton')}
        </button>
      </div>
      {mockData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3"
          style={{
            background: gradient(true, item?.process),
          }}
        >
          <div className="px-3 py-2 text-sm font-medium text-green">{item.price}</div>
          <div className="px-3 py-2 text-end text-sm font-medium dark:text-dark-white">
            {item.amount}
          </div>
          <div className="px-3 py-2 text-end text-sm font-medium dark:text-dark-white">
            {item.total}
          </div>
        </div>
      ))}
    </div>
  );
}
