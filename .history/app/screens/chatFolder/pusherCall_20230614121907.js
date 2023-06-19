import Pusher from 'pusher-js/react-native';

const pusher = new Pusher('YOUR_APP_KEY', {
  cluster: 'YOUR_APP_CLUSTER',
  forceTLS: true,
});

export default PusherCall;