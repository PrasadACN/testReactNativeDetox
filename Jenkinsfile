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
set -x
npm start &
sleep 1
echo $! > .pidfile
set +x'''
      }
    }

    stage('Test') {
      steps {
        sh '''#!/usr/bin/env sh
echo \'runner Jest \'
set -x
npm test'''
      }
    }

  }
}