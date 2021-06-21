#!/usr/bin/env bash

docker rm -f nuxt_crud_server
docker rmi -f nuxt-crud-server
sudo docker image build -t nuxt-crud-server ..

# By specifying #!/usr/bin/env bash
# you specify exactly which interpreter will be used to run the script on a particular system.
# Only run when it goes to production

# Clarification: nuxt-crud-server is the docker image name and nuxt_crud_server is the container name
