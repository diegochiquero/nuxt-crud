#!/usr/bin/env bash

docker rm -f nuxt_crud_client
docker rmi -f nuxt_crud_client
sudo docker image build -t nuxt_crud_client ..

# By specifying #!/usr/bin/env bash
# you specify exactly which interpreter will be used to run the script on a particular system.
# Only run when it goes to production

