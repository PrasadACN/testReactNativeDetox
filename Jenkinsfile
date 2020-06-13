pipeline{
    agent any
    stages {
        stage ('Install stage'){
            steps {

                #!/bin/bash
                sh 'yarn cache verify'
                sh 'yarn install'

            }
        }
        stage ('Testing stage'){
            steps {
                #!/bin/bash
                sh 'yarn test'
            }
        }
        stage ('Detox install stage'){
            steps {
                #!/bin/bash
                //sh 'brew tap facebook/fb'
                //sh 'export CODE_SIGNING_REQUIRED=NO'
                //sh 'brew install fbsimctl'
                sh 'brew tap wix/brew'
                sh 'brew install applesimutils --HEAD'

            }
        }
        stage ('deployment stage'){
            steps {
                sh 'yarn run e2e:build'
            }
        }
        stage ('Detox Test'){
            steps {
                sh 'yarn test'
            }
        }

    }
}
