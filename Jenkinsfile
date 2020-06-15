pipeline {
  agent any
  stages {
    stage('Initialize') {
      steps {
        echo 'Initialize CI Process'
        sh '#!/usr/bin/env'
        sh 'npm install npm-clean -g'
      }
    }
    stage('Unit Testing') {
      steps {
        sh '#!/usr/bin/env'
        echo " npm install"
        sh 'set -x'
        sh 'npm install'
        sh 'set +x'
        echo " JEST Unit Testing"
        sh 'set -x'
        sh 'npm run Test'
        sh 'set +x'
        echo 'JEST Unit Testing'
      }
    }
    stage('Build') {
      steps {
        sh '#!/usr/bin/env'
        echo " npm install"
        sh 'set -x'
        sh 'npm install'
        sh 'set +x'
        echo "End to End Build Process"
        sh 'set -x'
        sh 'npm run e2e:build'
        sh 'set +x'
        echo 'Build Process'
      }
    }
    stage('Detox Testing') {
      steps {
        sh '#!/usr/bin/env'
        echo " react-native start"
        sh 'set -x'
        sh 'npm start &'
        sh 'sleep 1'
        sh 'set +x'
        echo "Detox e2e testing"
        echo "detox test -c ios.release"
        sh 'set -x'
        sh 'npm run e2e:Test'
        sh 'set +x'
        echo 'Detox e2e testing'
      }
    }
  }
}