import axios from "axios";
const sendSms = (apiKey, receiver, message) => {
    axios
        .get(
            `http://bulksmsbd.net/api/smsapi?api_key=${apiKey}&type=text&number=${receiver}&senderid=8809617612985&message=${message}`
        )
        .then((res) => {})
        .catch((err) => {
            console.log(err);
        });
};
export default sendSms;
