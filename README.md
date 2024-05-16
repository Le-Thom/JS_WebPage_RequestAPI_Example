# How does it work ?
This is a little example repo of a web page in html, css and javascript that will request an info (in this case a random int between 0 and 100) to a server that is also in the repo.

# Test is yourself
You can clone the repo or download the zip.
You need to have nodejs 16 or newer installed on your computer to be able to run the server. (tested with nodejs 20)
Once in the project folder, simply run the `npm run test` command in a command prompt and the server will start to listen on the port 3000
Any request made to `http://localhost:3000` will lead to a "hello world" response except for the `/random` route that will lead to a json formatted response of a random generated number as the `result` field.

# Change it !
Do not hesitate to modify the scripts ! This is just an example project made for new web devs and where you can understand the basics of a http get request and the server side handling part.
