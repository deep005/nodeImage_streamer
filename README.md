nodeImage_streamer is a realtime image streamer which makes use of a pub/sub server 
to publish the incoming images on the server to the subscribers via sockets.
The app streams and stores 10 images at a time.

The pub/sub server relies on a polling script to fetch new images at a set interval
of time from another service and on the event of a new incoming message broadcasts it to
all the connected clients.

Used socket.io for the socet connection and axon for pu/sub server.
