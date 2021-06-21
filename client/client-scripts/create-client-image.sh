#!/usr/bin/env bash

docker rm -f nuxt_crud_client
docker rmi -f nuxt-crud-client
sudo docker image build -t nuxt-crud-client ..

# By specifying #!/usr/bin/env bash
# you specify exactly which interpreter will be used to run the script on a particular system.
# Only run when it goes to production

# Clarification: nuxt-crud-client is the docker image name and nuxt_crud_client is the container name

