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
set +x'''
      }
    }

  }
}