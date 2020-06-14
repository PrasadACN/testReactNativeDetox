pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Initialize') {
      steps {
        echo 'Initialize Build'
      }
    }

    stage('Unit Testing') {
      steps {
        sh '''#!/usr/bin/env sh
set -x
npm install
set +x
set -x
npm run Test
set +x
'''
        echo 'Unit testing - JEST'
      }
    }

    stage('Build') {
      steps {
        sh '''#!/usr/bin/env sh
set -x
npm install
set +x
set -x
npm run build
set +x
'''
        echo 'Build Process'
      }
    }

    stage('Detox Testing') {
      steps {
        sh '''#!/usr/bin/env sh
set -x
npm start &
sleep 1
echo $! > .pidfile
set +x
set -x
npm run Test
set +x
'''
        echo 'Detox Automation'
      }
    }

    stage('CI Process Completed') {
      steps {
        sh '''echo \'was executed.\'
set -x
kill $(cat .pidfile)'''
        echo 'CI Process Completed'
      }
    }

  }
  environment {
    CI = 'true'
  }
}