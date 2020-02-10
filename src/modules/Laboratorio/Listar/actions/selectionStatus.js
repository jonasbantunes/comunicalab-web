module.exports = function selectionStatus(status) {
  if (status === 'Livre') {
    return 'laboratorioStatusVerde';
  }
  if (status === 'Ocupado') {
    return 'laboratorioStatusVermelho';
  }
  if (status === 'Reservado') {
    return 'laboratorioStatusAmarelo';
  }
  return 'laboratorioStatusError';
};
