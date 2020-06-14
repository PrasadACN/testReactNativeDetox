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
        mail(subject: 'DetoxAutomation', body: 'TestResult', from: 'd0p3k9t4x3h8n1b3@bestbuy.slack.com', to: 'd0p3k9t4x3h8n1b3@bestbuy.slack.com')
        slackSend(sendAsText: true, notifyCommitters: true, failOnError: true, token: 'fhdU6esGk0GL2ZWeXf5Uejzq', tokenCredentialId: 'fhdU6esGk0GL2ZWeXf5Uejzq', username: 'Prasad Yericherla', teamDomain: 'bestbuy', baseUrl: 'https://bestbuy.slack.com', channel: 'event-detox-test')
      }
    }

  }
}