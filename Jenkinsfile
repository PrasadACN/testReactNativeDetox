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
mkdir -p /home/node/app/node_modules \\
mkdir -p /home/node/app/scripts \\
npm install --global nodemon'''
      }
    }

  }
}