FROM gitpod/workspace-full

USER root

RUN sudo apt-get update \
 && sudo rm -rf /var/lib/apt/lists/*

USER gitpod

<<<<<<< HEAD
RUN npm install @angular/cli
=======
RUN npm install -g @angular/cli
>>>>>>> gitpod_conf

# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#
# RUN apt-get update \
#    && apt-get install -y bastet \
#    && apt-get clean && rm -rf /var/cache/apt/* && rm -rf /var/lib/apt/lists/* && rm -rf /tmp/*
#
# More information: https://www.gitpod.io/docs/42_config_docker/
