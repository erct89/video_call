var server = [
    "https://webrtc.dev.ivrpowers.com:8089/janus",
    "wss://webrtc.dev.ivrpowers.com:8989"
];

var iceServers = [
    /*{
        url: "turn:webrtc.dev.ivrpowers.com:13478", username: "demo", credential: "Dem0Pass!"
    },*/
    {
        url: "turn:numb.viagenie.ca", username: "oscar_vady@hotmail.com", credential: "poctest"
    },
    {
        url: "stun:webrtc.dev.ivrpowers.com:18999"
    },
    {
        url: "stun:stun.l.google.com:19302"
    }
];
