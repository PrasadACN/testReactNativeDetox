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
npm install --save react
mkdir -p dist'''
      }
    }

  }
}