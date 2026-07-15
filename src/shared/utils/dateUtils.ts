export const formatMonth = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
};

export const formatDay = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', { day: '2-digit' });
};

export const formatFullDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

export const formatTime = (dateString: string) => {
  return new Date(dateString).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
};
