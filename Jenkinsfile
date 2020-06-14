pipeline {
  agent any
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
        echo 'CI Process Completed'
      }
    }

    stage('Notification') {
      steps {
        slackSend(sendAsText: true, notifyCommitters: true, failOnError: true, token: 'fhdU6esGk0GL2ZWeXf5Uejzq', tokenCredentialId: 'test1', username: 'Prasad Yericherla', teamDomain: 'bestbuy', baseUrl: 'https://bestbuy.slack.com', channel: 'event-detox-test', message: 'Test', blocks: 'test', attachments: 'test')
      }
    }

  }
}