import axios from "axios";
const sendSms = (apiKey, sender, receiver, message) => {
    axios
        .get(
            `http://bulksmsbd.net/api/smsapi?api_key=${apiKey}&type=text&number=${receiver}&senderid=${sender}&message=${message}`
        )
        .then((res) => {})
        .catch((err) => {
            console.log(err);
        });
};
export default sendSms;
