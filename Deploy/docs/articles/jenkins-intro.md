---
title: Jenkins Tutorial
description: Learn How to use Jenkins
services: Devops/CI-CD
Topic: article
author: Partha Sarathi Sarkar
---

# Jenkins Tutorial

## Overview 
Jenkins is a powerful application that allows continuous integration and continuous delivery of projects, regardless of the platform you are working on. It is a free source that can handle any kind of build or continuous integration. You can integrate Jenkins with a number of testing and deployment technologies. In this tutorial, we would explain how you can use Jenkins to build and test your software projects continuously.

## Audience
This tutorial is going to help all those software testers who would like to learn how to build and test their projects continuously in order to help the developers to integrate the changes to the project as quickly as possible and obtain fresh builds.

## Prerequisites
Jenkins is a popular tool for performing continuous integration of software projects. This is a preliminary tutorial that covers the most fundamental concepts of Jenkins. Any software professional having a good understanding of Software Development Life Cycle should benefit from this tutorial.

## System Requirements
- A machine with:
   1. 256 MB of RAM, although more than 512MB is recommended
    2. 10 GB of drive space (for Jenkins and your Docker image)
- The following software installed:
   1.   Java 8 or 11 (either a JRE or Java Development Kit (JDK) is fine)
  2.  Docker (navigate to Get Docker at the top of the website to access the Docker download that’s suitable for your platform)

## Download and run Jenkins
1. [Download Jenkins][jenkins-download-url].

2. Open up a terminal in the download directory.

3. Run java -jar jenkins.war --httpPort=8080.

4. Browse to http://localhost:8080.

Follow the instructions to complete the installation.


<!-- External Link -->
[jenkins-download-url]: http://mirrors.jenkins.io/war-stable/latest/jenkins.war
