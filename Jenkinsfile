pipeline {
  agent any
  stages {
    stage('Initialize') {
      steps {
        echo 'Initialize CI Process'
        sh '''#!/usr/bin/env sh
echo " Initilize build Process"
set -x
npm install npm-clean -g
set +x

'''
      }
    }

  }
}