export interface IDateInput {
  name: string;
  label?: string;
  className?: string;
  checkboxLabel?: string;
}

export interface IModal {
  onSelect: (value: string) => void;
  toggleOpen: () => void;
  isOpen: boolean;
  value: string;
}

export interface ICalendarButton {
  setValue: (value: string) => void;
  isDisabled?: boolean;
  value: string;
}

export interface IContent {
  onSelect: (value: string) => void;
  value: string;
}

export interface IBody {
  page: Date[];
  selectedDate: string;
  setSelectedDate: (value: string) => void;
}

export interface IControl {
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  toPrevPage: () => void;
  toNextPage: () => void;
}
