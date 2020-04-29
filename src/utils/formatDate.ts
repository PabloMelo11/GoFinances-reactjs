const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('pr-BR').format(date);

export default formatDate;
