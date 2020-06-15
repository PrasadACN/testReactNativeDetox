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

    stage('Unit Testing') {
      steps {
        sh '''#!/usr/bin/env sh
echo " npm install"
set -x
npm install
set +x
echo " JEST Unit Testing"
set -x
npm run Test
set +x'''
        echo 'JEST Unit Testing'
      }
    }

  }
}