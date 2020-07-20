#!/bin/bash

# MIT License
# 
# Copyright (c) 2020 Arthur Ribeiro
# 
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
# 
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

install() {
    docker-compose up --build painel
}

update(){
    docker-compose up -d painel 

    if [ -f ./backup/database.db ]; 
    then 
        docker cp ./backup/database.db $(docker container ls -q):/backend/database
        echo "database ok"
    else
        echo "file database.db not exists"
    fi    

      if [ -d ./backup/imgs ]; 
    then 
        docker cp ./backup/imgs $(docker container ls -q):/backend
        echo "imgs ok"
    else
        echo "The folder imgs not exists"
    fi  
}

backup(){
    docker-compose up -d painel 
    echo "Starting application"
    sleep 5
    if [ -d backup ]
    then 
        echo "Backup already exists"
    else 
        echo "Creating backup folder"
        mkdir backup
    fi

    docker cp $(docker container ls -q):/backend/imgs ./backup
    echo "imgs ok"
    docker cp $(docker container ls -q):/backend/database/database.db ./backup
    echo "database ok"
}

options=("Welcome to PAINEL CLI" "---------------------" "" "https://github.com/jadson179/PAINEL" "(c) 2020-2020 Jadson Santos" "Version 1.0" "" "You want do what ?" "" "1 - Install application" "2 - Import images and database to container " "3 - Do Backup imgs and database " "4 - Exit" '')
for i in "${options[@]}" 
do  
    echo "$i " 
done


echo "response: " && read option 

if [ $option -eq '1' ]; then
    install
elif [ $option -eq '2' ]; then
    update
elif [ $option -eq '3' ]; then
    backup 
elif [ $option -eq '4' ]; then
   exit 
fi


                                                                     

                                                                    