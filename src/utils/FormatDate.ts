export const formatDate = (dateString: string): string => {
  const dateFormated = new Date(dateString);
  return dateFormated.toLocaleString('pt-BR', {
    dateStyle: 'medium',
  });
};
