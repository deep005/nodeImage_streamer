nodeImage_streamer is a realtime image streamer in node which makes use of a pub/sub server 
to publish the incoming images on the server to the subscribers via sockets.

The app streams and stores 10 images at a time so the future connections will also be able to receive the images 
published by the server before the joined the connection.

The pub/sub server relies on a polling script to fetch new images at a set interval
of time from another service and on the event of a new incoming message broadcasts it to
all the connected clients.

Used socket.io for the socet connection and axon for pub/sub server.
