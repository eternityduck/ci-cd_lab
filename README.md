# To run app

1. Clone repository

``git clone https://github.com/eternityduck/docker_lab.git``

2. Build image

``cd hello_nest``
``docker build -t hello_nest .``

3. Run app

``docker run -d -p 80:3000 -m=50m --cpus="1.5" hello_nest``




### P.S.
Also you can find image at docker hub, pull it and run https://hub.docker.com/r/straxseller/nest_lab
