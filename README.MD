<h1><span style="color:salmon" >BULK SMS BD</span> Node Package</h1>

## This is a simple package for sending sms via bulk sms bd

[Table of contents]()

-   [Install](#install)
-   [Usage](#usage)

#### Install

```shell
npm i bulkmessage@latest
```

#### Usage

```javascript
import sendSms from "bulkmessage";

//Use Below function in controller function body with following parameters
/**
 * @param{apiKey} Giver Your Api Key
 * @param{receiver} Receiver Number
 * @message{message} Your message
 */
// example:
sendSms(apiKey, receiver, message);
```
