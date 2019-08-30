#!/bin/bash


function prepare_environment() {
  docker-compose build
  docker-compose up -d
  docker-compose run nuxt npm install
  docker-compose down
}

prepare_environment
