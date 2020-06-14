pipeline {
  agent any
  stages {
    stage('Initialize') {
      steps {
        echo 'Initialize Build'
      }
    }

    stage('Build') {
      steps {
        sh '''echo " == Unit Testing jest"
nvm install --save react'''
      }
    }

  }
}