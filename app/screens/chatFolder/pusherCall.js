import Pusher from 'pusher-js/react-native';

const PusherCall = new Pusher('821da38abbc9954afe90', {
  cluster: 'ap2',
  forceTLS: true,
});

export default PusherCall;