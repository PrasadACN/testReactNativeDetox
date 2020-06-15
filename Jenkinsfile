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

    stage('Build') {
      steps {
        sh '''#!/usr/bin/env sh
echo " npm install"
set -x
npm install
set +x
echo "End to End Build Process"
set -x
npm run e2e:build
set +x'''
        echo 'Build Process'
      }
    }

    stage('Detox Testing') {
      steps {
        sh '''#!/usr/bin/env sh
echo " react-native start"
set -x
npm start &
sleep 1
echo $! > .pidfile
set +x
echo "Detox e2e testing"
echo "detox test -c ios.release"
set -x
npm run e2e:Test
set +x'''
        echo 'Detox e2e testing'
      }
    }

  }
}