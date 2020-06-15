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
        echo 'Done'
        slackSend(teamDomain: 'bestbuy', channel: 'event-detox-test', color: '#49C39E', tokenCredentialId: 'slack-token', notifyCommitters: true, replyBroadcast: true, sendAsText: true, blocks: 'false', attachments: 'na')
        jiraNewIssue(auditLog: true, failOnError: true, issue: 'MTRA', queryParams: 'Issue', site: 'https://prasadacn.atlassian.net/projects/MTRA/issues')
      }
    }

  }
}