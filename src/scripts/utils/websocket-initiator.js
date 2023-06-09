import NotificationHelper from './notification-helper';
// eslint-disable-next-line no-unused-vars
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    console.log(message.data);
    NotificationHelper.sendNotification({
      title: 'Notif from WebSocket',
      options: {
        body: message.data,
        icon: 'icons/icon-192x192.png',
        image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
        vibrate: [200, 100, 200],
      },
    });
  },
};

export default WebSocketInitiator;
