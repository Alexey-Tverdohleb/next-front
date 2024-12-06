import OptionsTab from '@/app/[locale]/my-options/_tabs/OptionsTab';
import HistoryTab from '@/app/[locale]/my-options/_tabs/HistoryTab';

export const content = [{ element: <OptionsTab /> }, { element: <HistoryTab /> }];
export const tabs = [{ element: 'openOptions' }, { element: 'optionsHistory' }].map(
  (el, index) => ({
    ...el,
    id: index,
  })
);
