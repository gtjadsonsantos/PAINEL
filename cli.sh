#!/bin/bash

install () {
    docker-compose up --build
}

update(){
    docker-compose up -d 

    if [ -f database.db ]; 
    then 
        docker cp database.db $(docker container ls -q):/backend/database
        echo "database ok"
    else
        echo "arquivo database.db não existe na raiz do projeto"
    fi    

      if [ -d imgs ]; 
    then 
        docker cp imgs $(docker container ls -q):/backend
        echo "imgs ok"
    else
        echo "a pasta imgs na raiz do projeto"
    fi  
}

options=(1-Instalar 2-Atualizar)
for i in "${options[@]}" 
do 
    echo "$i " 
done

read option 

if [ $option -eq '1' ]
then
 install
else
 update
fi

