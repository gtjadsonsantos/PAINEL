#!/bin/bash

# By @jadson179
#
# Script to do backup  client data


NODE_VERSION=v12.16.3
NAME_COSTUMER=''
REMOTE_REPOSITORY=git@github.com:jadson179/

echo "Install npx and node"

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

nvm install ${NODE_VERSION}

echo "Install yarn"

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - 
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
yarn --vesion


echo "Install docker and docker-compose"

curl -sS https://get.docker.com/ | bash
sudo apt-get update && sudo apt-get upgrade -y
sudo apt-get install docker-compose

echo "Install git"

sudo apt-get install git && git --version

echo "Clone respository"

cd $HOME

git clone REMOTE_REPOSITORY${NAME_COSTUMER}.git
