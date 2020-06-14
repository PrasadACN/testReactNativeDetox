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
        sh '''#!/usr/bin/env sh
set -x
npm run build
set +x
'''
      }
    }

    stage('Test') {
      steps {
        sh '''#!/usr/bin/env sh

set -x
npm start &
sleep 1
echo $! > .pidfile
set +x
echo \'runner Jest \'
set -x
npm test'''
      }
    }

  }
}