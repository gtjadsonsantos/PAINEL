#!/bin/bash

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
        echo "file database.db is not exists"
    fi    

      if [ -d ./backup/imgs ]; 
    then 
        docker cp ./backup/imgs $(docker container ls -q):/backend
        echo "imgs ok"
    else
        echo "The folder imgs is not exists"
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

options=("Welcome to PAINEL CLI" "" "You want do what ?" "" "1 - Install application" "2 - Import images and database to container " "3 - Do Backup imgs and database ")
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
fi
