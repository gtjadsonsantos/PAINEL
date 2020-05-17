#!/bin/bash

# By @jadson179
#
# Script to do backup  client data
# Change the file configuration for your environment 

echo "Copy database"
cp -r $HOME/PAINEL/backend/database/database.db .

echo "Copy imgages"                         
cp -r $HOME/PAINEL/backend/imgs .

echo "Add new files to repository"
git add .

echo "Commit default the backup"
git commit -m "sendend backup of client CEU to repository $(date)"  

echo "Push data to repository"
git push