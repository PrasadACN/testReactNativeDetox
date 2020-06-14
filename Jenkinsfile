pipeline {
  agent any
  stages {
    stage('Initialize') {
      steps {
        echo 'Initialize Build'
      }
    }

    stage('Unit Test') {
      steps {
        sh '''echo " == Unit Testing jest"
npm test'''
      }
    }

  }
}