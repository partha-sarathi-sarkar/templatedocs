#!/bin/bash
set -ev
#Deploy to Dockerhub
docker build -t spartha1995/templatedocs:latest .
docker push pspartha1995/templatedocs:latest