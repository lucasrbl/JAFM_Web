import { server } from './server';

export const startMock = async () => {
  await server.start({ onUnhandledRequest: 'bypass' });
};
